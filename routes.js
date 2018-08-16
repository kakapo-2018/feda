const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')

router.get('/', function(req,res){
    res.redirect('restaurants')
})

router.get('/restaurants', function(req,res){
    res.render('restaurants/index', data)
})


router.get('/restaurants/submit', function(req,res){
    res.render('restaurants/submit', data)
})

module.exports = router