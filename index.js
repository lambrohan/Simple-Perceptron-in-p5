var perceptron;
var trainingPoints = [];

function setup(){
    createCanvas(600,600);
    background(100);
    perceptron = new Perceptron();
    trainingPoints.length = 100;
    for (let i = 0; i < trainingPoints.length; i++) {
        trainingPoints[i] = new Point();
        
    }
    
    
}

function draw(){
    trainingPoints.forEach((point)=>{
        point.show();
    })
    stroke(255);
    line (0,0,height,width);
    

}

function mouseClick(){
    alert('clicked');
}

