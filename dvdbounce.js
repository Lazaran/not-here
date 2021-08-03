
var text = document.getElementById("thetext")
var back = document.getElementById("container")

var VecX = 0;
var VecY = 0;
var PosX = 0;
var PosY = 0;

var Hue = 20;

var backLeft = back.getBoundingClientRect().x
var backRight = back.getBoundingClientRect().x + back.getBoundingClientRect().width-1
var backTop = back.getBoundingClientRect().y
var backBot = back.getBoundingClientRect().y + back.getBoundingClientRect().height-1

function randStart(){
    VecX = Math.floor(Math.random() * 2) + 1;
    VecY = Math.floor(Math.random() * 2) + 1;
    if (VecX == 2){
        VecX = -1
    }
    if (VecY = 2){
        VecY = -1
    }
}

function randHue(){
    let jump = (Math.floor(Math.random()*9)+1)*10
    if (Hue >= 360){
        Hue -= 360
        Hue += jump
    }
    else {
        Hue += jump
    }
    console.log(Hue)
}

function currentPos(){
    textLeft = text.getBoundingClientRect().x
    textRight = text.getBoundingClientRect().x + text.getBoundingClientRect().width
    textTop = text.getBoundingClientRect().y
    textBot = text.getBoundingClientRect().y + text.getBoundingClientRect().height
    let hue = String()
    let filterStr = "sepia(3) saturate(100000%) brightness(50%) hue-rotate("+Hue+"deg )"
    if (textLeft <= backLeft|| textRight >= backRight){
        VecX = -VecX
        randHue()
        text.style.filter = filterStr;
        console.log("helo")
    }
    if (textTop <= backTop|| textBot >= backBot){
        VecY = -VecY
        randHue()
        text.style.filter = filterStr;
        console.log("fucl")
    }
}

function animate(){
    randStart()
    var id = null
    id = setInterval(bouncing,5);
    function bouncing(){
        PosX = PosX + VecX
        PosY = PosY + VecY
        text.style.left = PosX +"px"
        text.style.top = PosY + "px"
        currentPos()

    }

}

animate()