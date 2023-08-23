const express = require('express')
const router = express.Router()
const { Karte  } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    cena: Joi.number()
        .min(2)
        .max(10)
        .required(),

    film_id: Joi.number()
        .min(0)
        .max(5),

    korisnik_id: Joi.number()
        .min(0)
        .max(5),

})

router.get('/',async (req, res) => {
    console.log('index')
    try{
        const kartenadjeni = await  Karte.findAll(); 
        res.send(kartenadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const karte = await Karte.create(req.body);
        res.send(karte)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const karte = await Karte.findByPk(req.params.id);
        if (karte === null) {
            res.send('Not found!');
        } else {
            res.send(karte);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const karte = await Karte.findByPk(req.params.id);
        if (karte === null) {
            res.send('Not found!');
        } else {
            try {
                await karte.update(req.body);
                res.send(karte);
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
        const karte = await Karte.findByPk(req.params.id);
        if (karte === null) {
            res.send('Not found!');
        } else {
            try {
                await karte.destroy();
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