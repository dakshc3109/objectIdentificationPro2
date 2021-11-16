var status = "";
object = [];

function preload(){
    img = loadImage("bedromm.jpg")
}

function setup(){
    canvas = createCanvas(640, 400);
    canvas.position(330, 150);;
    objetDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object";
}

function modelLoaded(){
   console.log("model laoded") 
}

function draw(){
    image(img, 0, 0, 640, 420);
    status = true;
    objetDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error();
    }
    else{
        object = results;
        console.log(object);
    }
} 