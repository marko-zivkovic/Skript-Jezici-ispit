const express = require('express')
const router = express.Router()
const { Lokacija  } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    adresa: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    bioskop_id: Joi.number()
        .min(0)
        .max(5),

})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const lokacijanadjeni = await Lokacija.findAll(); 
        res.send(lokacijanadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const lokacija = await Lokacija.create(req.body);
        res.send(lokacija)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const lokacija = await Lokacija.findByPk(req.params.id);
        if (lokacija === null) {
            res.send('Not found!');
        } else {
            res.send(lokacija);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const lokacija = await Lokacija.findByPk(req.params.id);
        if (lokacija === null) {
            res.send('Not found!');
        } else {
            try {
                await lokacija.update(req.body);
                res.send(lokacija);
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
        const lokacija = await Lokacija.findByPk(req.params.id);
        if (lokacija === null) {
            res.send('Not found!');
        } else {
            try {
                await lokacija.destroy();
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