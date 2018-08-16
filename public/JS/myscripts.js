
document.addEventListener('DOMContentLoaded', createEventListeners)

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
