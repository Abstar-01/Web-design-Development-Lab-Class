function scopeDemo(){
    var a = 10;
    let b = 20;

    if(true){
        let b = 30;

        console.log("In the block value a = " + a);
        console.log("In the block value b = " + b);
    }
        console.log("Outside the block value a = " + a);
        console.log("Outside the block value b = " + b);
}