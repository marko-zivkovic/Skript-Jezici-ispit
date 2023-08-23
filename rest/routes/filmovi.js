const express = require('express')
const router = express.Router()
const { Filmovi, Kategorija ,Karte,Repertoar_stavke} = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');
const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    reziser: Joi.string()
        .min(3)
        .max(38),

    datum: Joi.date()
        .min(0)
        .max(20),

    trajanje: Joi.string()
        .min(0)
        .max(10),

    kategorija_id: Joi.number()

})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const filmovinadjeni = await Filmovi.findAll({ include: Kategorija }); 
        res.send(filmovinadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const film = await Filmovi.create(req.body);
        res.send(film)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const film = await Filmovi.findByPk(req.params.id);
        if (film === null) {
            res.send('Not found!');
        } else {
            res.send(film);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const film = await Filmovi.findByPk(req.params.id);
        if (film === null) {
            res.send('Not found!');
        } else {
            try {
                await film.update(req.body);
                res.send(film);
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
        const film = await Filmovi.findByPk(req.params.id);
        if (film === null) {
            res.send('Not found!');
        } else {
            try {
                await film.destroy();
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