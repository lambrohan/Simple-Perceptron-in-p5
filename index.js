var perceptron;
var trainingPoints = [];
var showError = 0;
var trainingIndex = 0;

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

        var inputs = [point.x,point.y];
        var desiredVal = point.label;
        var approxVal = perceptron.guess(inputs);
        showError = desiredVal-approxVal;


        if (desiredVal-approxVal==0) {
            fill (0,255,0);
        }else{
            fill(255,0,0);
        }
        ellipse(point.getPx(),point.getPy(),8,8);
    })
    stroke(255);
    line (0,height,width,0);

    var trainingPoint = trainingPoints[trainingIndex];
    perceptron.train([trainingPoint.x,trainingPoint.y],trainingPoint.label);
    trainingIndex++;
    if(trainingIndex==trainingPoints.length){
        trainingIndex=0;
    }
    

}

function mouseClicked(){
    trainingPoints.forEach((point)=>{
       
    })

    console.log('err',showError);
    
}

