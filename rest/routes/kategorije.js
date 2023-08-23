const express = require('express')
const router = express.Router()
const { Kategorija, Filmovi  } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const kategorijanadjeni = await Kategorija.findAll({include: Filmovi}); 
        res.send(kategorijanadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const kategorija = await Kategorija.create(req.body);
        res.send(kategorija)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const kategorija = await Kategorija.findByPk(req.params.id);
        if (kategorija === null) {
            res.send('Not found!');
        } else {
            res.send(kategorija);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const kategorija = await Kategorija.findByPk(req.params.id);
        if (kategorija === null) {
            res.send('Not found!');
        } else {
            try {
                await kategorija.update(req.body);
                res.send(kategorija);
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
        const kategorija = await Kategorija.findByPk(req.params.id);
        if (kategorija === null) {
            res.send('Not found!');
        } else {
            try {
                await kategorija.destroy();
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