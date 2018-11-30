class Perceptron {

    constructor(){
        this.weights = [random(-1,1),random(-1,1)];

    }
    // Guess the approximate values and process through act function 
    guess(inputs){
        var sum = 0;
        for (let index = 0; index < this.weights.length; index++) {
            sum+= this.weights[index]*inputs[index]
            
        }

        return activationFunction(sum);
    }

    // train the perceptron on give points data
    train(inputs,desiredValue){
        var approxVal = this.guess(inputs);
        var error = desiredValue - approxVal;

        // tweaking weights according to error
        for (let i = 0; i < this.weights.length; i++) {
            
            
        }
    }

}

activationFunction = (value)=>{
    return value > 0 ? 1 : -1;
}