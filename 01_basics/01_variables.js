const account_id = 144553;
let accountEmail = "1245Ritik@123";
var accountPass = "12345645";
accountCity = "jaipur";   //not prefrable
let accountState;


// account_id = 2;   not allowed;

accountEmail = "asd@123";
accountPass = "212125";
accountCity = "Gurgaon";

/*
prefer not to use var
because of the issue in block scope and functional scope
*/

console.log(account_id);
console.table([accountEmail, accountPass , account_id , accountCity, accountState])
