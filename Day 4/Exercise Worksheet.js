//
//
//
//
//
//

// Javascript Exercise 

// Question 1 - Even or Odd

function EvenOrOdd(x){
    return x%2 == 0? "Even" : "Odd";
}

///////////////////////////////////////////////
// Question 2 - Reverse a Word

function Revers(x){
    var y = "";
    for(var i = x.length - 1; i >= 0; i--){
        y += x[i];
    }
    return y
}

//////////////////////////////////////////////
// Question 3 - Find the Largest Number

console.log(Revers("cat"))

function larg(){
    var largest = arguments[0];
    for(var i = 0; i < arguments.length; i++){
        largest = largest < arguments[i] ? arguments[i] : largest;
    }
    return largest;
}

//////////////////////////////////////////////
// Question 4 - Count Vowels

function CountVowels(x){
    var count = 0;
    for(var i = 0; i < x.length; i++){
        if(x[i] == 'a' || x[i] == 'e' || x[i] == 'i' || x[i] == 'o' || x[i] == 'u'){
            count++;
        }
    }
    return count;
}

//////////////////////////////////////////////
// Question 5 - Multiplication Table

function CountVowels(x){
    for(var i = 1; i <= 10; i++){
        console.log(x*i);
    }
}

//////////////////////////////////////////////
// Question 6 - Remove Duplicates

function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

//////////////////////////////////////////////
// Question 7 - Sum of Digits

function SumDigits(x){
    var sum = 0;
    while( x != 0){
        sum += Math.trunc(x%10);
        x/=10;
    }
    return sum;
}

console.log(SumDigits(123))

//////////////////////////////////////////////
// Question 8 - Palindrome Checker

function PanlindromChecker(X){
    for(var i = 0; i < X.length/2; i++){
        if(X[i] != X[X.length - 1 - i]){
            console.log("Value is not a palindrome");
            return;
        }
    }
    console.log("Value is a palindrome");
}

//////////////////////////////////////////////
// Question 9 - Longest Word in a Sentence




//////////////////////////////////////////////
// Question 10 - Frequency Counter

function FrquencyCounter(x){

}