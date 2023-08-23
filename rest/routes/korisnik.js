const express = require('express')
const router = express.Router()
const { Korisnik, Karte } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .min(3)
        .max(38)
        .required(),

    password: Joi.string()
        .min(3)
        .max(30)
        .required(),

})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const korisniknadjeni = await Korisnik.findAll({include: Karte}); 
        res.send(korisniknadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const korisnik = await Korisnik.create(req.body);
        res.send(korisnik)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const korisnik = await Korisnik.findByPk(req.params.id);
        if (korisnik === null) {
            res.send('Not found!');
        } else {
            res.send(korisnik);
        }
    }catch (err){
        res.send(err);
    }
 });
router.post("/:id", async function(req, res) {
    console.log('hi')
    try {
        const korisnik = await Korisnik.findByPk(req.params.id);
        if (korisnik === null) {
            res.send('Not found!');
        } else {
            console.log('you')

            try {
                console.log('are')

                await korisnik.update(req.body);
                console.log('good')

                res.send(korisnik);
            } catch (err){
                res.send(err);
            }
        }
    } catch (err){
        res.send(err);
    }
});
router.delete("/:id",[authenticate.isModerator],async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try {
        const korisnik = await Korisnik.findByPk(req.params.id);
        if (korisnik === null) {
            res.send('Not found!');
        } else {
            try {
                await korisnik.destroy();
                res.send("Uspesno izbrisano!");
            } catch (err){
                res.send(err);
            }
        }
    } catch (err){
        res.send(err);
    }
});


module.exports = router