var perceptron;
var trainingPoints = [];
var showError = 0;

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
            stroke (0,255,0);
        }else{
            stroke(255,0,0);
        }
        ellipse(point.x,point.y,8,8);
    })
    stroke(255);
    line (0,0,height,width);
    

}

function mouseClicked(){
    trainingPoints.forEach((point)=>{
        perceptron.train([point.x,point.y],point.label);
    })

    console.log('err',showError);
    
}

