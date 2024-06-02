import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blue.bold("\n \t Welcome to 'HafizaAsma' - Currency Convertor\n"));




//Define the list of currencies and their exchange rates
let exchange_rate : any = {
    "USD": 1,              //base currwncy
    "EUR":0.9,             //european currency
    "JYP": 113,            //Japenese currency
    "CAD":1.3,             //canadiancurency
    "AUD": 1.65,           //Australian currency
    "PKR": 280,            //Pakistani currency
//add more currencies and their change rates    
}

//promp the user to select the currencies to convert from and to
let user_answer = await inquirer.prompt(
    [
        {
            name: "from_currency",
            type: "list",
            message: "select the currency to convert from:",
            choices: ["USD","EUR","JUP","CAD","AUD","PKR"] 
        },
        {
            name: "to_currency",
            type: "list",
            mesage: "Select the currency to convert into",
            choices: ["USD","EUR","JUP","CAD","AUD","PKR"]
        },
        {
            name: "amount",
            type: "input",
            message: "Enter the amount to convert:"
        }
    ]
);
//perform currency conversion by usin formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount 
let converted_amount = base_amount * to_amount 

//display the converted amount 
console.log(`converted amount = ${converted_amount}`);