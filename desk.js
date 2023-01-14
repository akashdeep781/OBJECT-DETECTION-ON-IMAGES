img="";
status="";
objects=[];

function preload()
{
    img=loadImage("Screenshot_20230112_193448.png");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:detecting objects";
    
}

function modelLoaded()
{
    console.log("modelLoaded");
    status="true";
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function draw()
{
    image(img,0,0,640,420);
    if(status !="")
    {

    }
}

