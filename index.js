// Write your solution in this file!
var  customerName = 'bob';
//function OF uppercasename
function upperCaseCustomerName() {
     customerName = customerName.toUpperCase();
}
//function to setbestcustomer

var  bestCustomer;
function setBestCustomer(){
    bestCustomer = 'maybe bob';

}


//function of overwritebestcustomer
{ var bestCustomer = 'not bob';
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
 
}
console.log(bestCustomer); // 'not bob'
overwriteBestCustomer();
console.log(bestCustomer); // 'maybe bob'
}

const LeastFavoriteCustomer = 'bob';

//function
function changeLeastFavoriteCustomer(){
    
    LeastFavoriteCustomer = 'maybe not bob';
    console.log(LeastFavoriteCustomer);
    
}

