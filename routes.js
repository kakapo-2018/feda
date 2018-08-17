const express = require('express')
const router = express.Router()
const data = require('./data.json')
const fs = require('fs')

router.get('/', function(req,res){
    res.redirect('restaurants')
})

router.get('/restaurants', function(req,res){
    res.render('restaurants/index', getData())
})


router.get('/submit', function(req,res){
    res.render('restaurants/submit', data)
})

router.post('/restaurants', function(req, res)  {
    let restaurantSubmit = req.body

    let restaurantNextId = data.restaurants.length+1
    restaurants.id = restaurantNextId

    data.restaurants.push(restaurantSubmit)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        console.log('err', err)
        if (err) res.send('Not OK')
        if (!err) res.redirect('/')   

    })    
})


router.get('/restaurants/:id', (req, res) => {
    const restId = req.params.id
    const found = data.restaurants.find(function(rests) {
      return rests.id == restId;
    });

    res.render('restaurants/view', found)
  })


function getData(){
    let arr = data.restaurants.sort((a,b) => {
        return b.rating.length-a.rating.length
    }).map((r,i) => {
        r.rank = i+1
        return r
    })
    return { restaurants: arr }
}

module.exports = router