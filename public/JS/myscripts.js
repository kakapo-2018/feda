document.addEventListener('DOMContentLoaded', createEventListeners)
let data = require('../../data.json')
const fs = require('fs')

// announcement section
function createEventListeners (){
    images = document.getElementById("note");
    images.addEventListener("mousedown", pushedImage);
    images.addEventListener("mouseup", backImage);
} 

function pushedImage () {
this.className = "pushed"
console.log("hello")
}

function backImage () {
this.className = "";
}

// function ranking() {
//     let arr = data.restaurants.map(function(r) {
//         let ratingStars = r.rating
//         console.log(ratingStars)
//         return ratingStars
//     }).sort((a,b) => b.length-a.length);
//     console.log(arr)   
// }

// ranking ()

// funciton ratingRestaurants() {
//     return data.json sorted by the number of stars
// }


function ranking() {
    let arr = data.restaurants.map(function(r) {
        let ratingStars = r.rating

        console.log(ratingStars)
        return ratingStars 
    }).sort((a,b) => b.length-a.length);
    console.log(arr)   
}

// rankRestaurants()
// rating system


// numArray.sort((a, b) => b - a); // For descending sort


module.exports = {
   ranking
}