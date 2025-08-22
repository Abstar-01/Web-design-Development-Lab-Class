function calculateDiscount(a,b){
    return '$' + (a- (a*(b/100))).toFixed(2);
}

console.log(calculateDiscount(100,20))

