const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')

router.get('/', function(req,res){
    res.send("Hi FEDA")
})

router.get('/restaurants', function(req,res){
    res.render('restaurants/index', data)
})

module.exports = router