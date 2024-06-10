const accountId = 144553;
let accountEmail = "priya@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // This line will cause an error because you can't reassign a value to a constant variable

// prefer not to use var because of issue in block scope and functional scope//
//if we doesnt declare any value then it gives undefined

accountEmail = "abc@gmail.com"
accountPassword = "45678"
accountCity = "Bengluru"


console.log(accountId);



console.table([accountEmail, accountPassword, accountCity,accountState]);

