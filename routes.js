const express = require('express')
const router = express.Router()
const data = require('./data.json')
const aData = require('./adata.json')
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
    restaurantSubmit.id = restaurantNextId

    data.restaurants.push(restaurantSubmit)

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        console.log('err', err)
        if (err) res.send('Not OK')
        if (!err) res.redirect('/')   

    })    
})

router.get('/restaurants/announcement', function(req,res){
    res.render('restaurants/announcement', aData.announcement[0])
})

router.post('/restaurants/announcement', function(req, res)  {
    let announcementSubmit = req.body

    let announcementNextId = aData.announcement.length+1
    announcementSubmit.id = announcementNextId

    aData.announcement.push(announcementSubmit)

    fs.writeFile('aData.json', JSON.stringify(aData, null, 2), (err) => {
        console.log('err', err)
        if (err) res.send('Not OK')
        if (!err) res.send('OK') 

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