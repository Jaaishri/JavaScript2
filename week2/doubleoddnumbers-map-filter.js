var myNumbers = [1, 2, 3, 4];

var newNumbers = myNumbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers);