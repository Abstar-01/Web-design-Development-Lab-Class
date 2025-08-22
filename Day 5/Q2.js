function Count(a){
    return a;
}

function createCounter(a, callback){
    var counter = 1;
    while(counter <= 3){
        console.log(callback(a))
        counter++;
    }
}


