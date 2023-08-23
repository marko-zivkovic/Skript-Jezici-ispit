const express = require('express')
const router = express.Router()
const { Repertoar  } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    pocetak: Joi.date()
        .min(3)
        .max(38),

    kraj: Joi.date()
        .min(0)
        .max(20),

})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const repertoarnadjeni = await Repertoar.findAll(); 
        res.send(repertoarnadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const repertoar = await Repertoar.create(req.body);
        res.send(repertoar)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const repertoar = await Repertoar.findByPk(req.params.id);
        if (repertoar === null) {
            res.send('Not found!');
        } else {
            res.send(repertoar);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const repertoar = await Repertoar.findByPk(req.params.id);
        if (repertoar === null) {
            res.send('Not found!');
        } else {
            try {
                await repertoar.update(req.body);
                res.send(repertoar);
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
        const repertoar = await Repertoar.findByPk(req.params.id);
        if (repertoar === null) {
            res.send('Not found!');
        } else {
            try {
                await repertoar.destroy();
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