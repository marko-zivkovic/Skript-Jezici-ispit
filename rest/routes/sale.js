const express = require('express')
const router = express.Router()
const { Sale , Repertoar_stavke } = require('../models')
const { authenticate } = require("../middleware");
const Joi = require('joi');

const schema = Joi.object({
    naziv: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    kapacitet: Joi.number()
        .min(3)
        .max(300),

    redovi: Joi.number()
        .min(0)
        .max(100),

    bioskop_id: Joi.number()
        .min(0)
        .max(5),

    opis: Joi.string()
        .min(0)
        .max(20),


})

router.get('/', async (req, res) => {
    console.log('index')
    try{
        const salenadjeni = await Sale.findAll({include: Repertoar_stavke}); 
        res.send(salenadjeni);
    }catch (err){
        res.send(err);
    }
})

router.post('/new', [authenticate.isModerator], async (req, res) => {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const sale = await Sale.create(req.body);
        res.send(sale)
    }catch (err){
        res.send(err);
    }
})

router.get("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}
    try{
        const sale = await Sale.findByPk(req.params.id);
        if (sale === null) {
            res.send('Not found!');
        } else {
            res.send(sale);
        }
    }catch (err){
        res.send(err);
    }
 });
router.put("/:id", [authenticate.isModerator], async function(req, res) {
    const { error, value } = await schema.validate(req.body);
    if(error) { res.send(error); return}

    try {
        const sale = await Sale.findByPk(req.params.id);
        if (sale === null) {
            res.send('Not found!');
        } else {
            try {
                await sale.update(req.body);
                res.send(sale);
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
        const sale = await Sale.findByPk(req.params.id);
        if (sale === null) {
            res.send('Not found!');
        } else {
            try {
                await sale.destroy();
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