const express = require('express')
const router = express.Router()
const { Bioskop , Lokacija, Sale} = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    grad: Joi.string()
        .min(3)
        .max(15),

})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const bioskopnadjeni = await Bioskop.findAll({include: Lokacija, Sale}); 
        res.send(bioskopnadjeni);
        return
    }catch (err){
        res.send(err);
        return
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const bioskop = await Bioskop.create(req.body);
        res.send(bioskop)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const bioskop = await Bioskop.findByPk(req.params.id);
        if (bioskop === null) {
            res.send('Not found!');
        } else {
            res.send(bioskop);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const bioskop = await Bioskop.findByPk(req.params.id);
        if (bioskop === null) {
            res.send('Not found!');
        } else {
            try {
                await bioskop.update(req.body);
                res.send(bioskop);
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
        const bioskop = await Bioskop.findByPk(req.params.id);
        if (bioskop === null) {
            res.send('Not found!');
        } else {
            try {
                await bioskop.destroy();
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