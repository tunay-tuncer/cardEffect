import './style.css'

const imageDiv = document.querySelector(".container");
const image = document.querySelector(".image");
const name = document.querySelector(".name")

let mouseX
let mouseY

function movePicture(event){
    mouseX = event.pageX
    mouseY = event.pageY

    image.style.backgroundPosition = `${mouseX}px ${mouseY}px`
    console.log(mouseX, mouseY)
}

imageDiv.addEventListener("mousemove", movePicture)