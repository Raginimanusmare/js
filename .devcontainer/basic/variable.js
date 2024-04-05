const accountId=243355;
let accountEmail="ragini@123gmail.com";
var accountPassword="123";
Accountcity="jaipur";
let accountState;


// accountId=2; not allow//

/* prefer not use var because of issue in block scope and functional scope*/
console.log(accountId);
accountEmail="rag@gmail.com";
accountPassword="321";
Accountcity="pune";

console.table([accountEmail,accountPassword,Accountcity,accountState])