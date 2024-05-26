#! /usr/bin/env node

import { differenceInSeconds} from "date-fns";
import inquirer from "inquirer";
import chalk from "chalk";

console.log( chalk.greenBright.bold("\n\t\t      COUNTDOWN TIMER by: Muhammad Salman Hussain"));
console.log(chalk.bold.rgb(204,204,204)(`\t\t* * * * * * * * * * * * * * * * * * * * * * * * * * * *`));

const respons = await inquirer.prompt([
    {
        type : "number",
        name: "userInput",
        message: chalk.blue.bold("Enter your required amount of time below 60 seconds: "),
        validate : (input) => {
        if(isNaN(input)){
            return chalk.greenBright.bold("Please enter numbers only!")
        }else if (input > 60 ){
            return chalk.yellowBright.bold("Seconds must be 60 or below.")
        }else{
            return true;
        }
      }
    }
]);

 let input = respons.userInput

function startTime(val:number){
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime);
    setInterval(( () => {
         const currentTime = new Date()
    const timeDiff = differenceInSeconds(intervalTime,currentTime)

    if(timeDiff <= 0){
        console.log(chalk.red.bold("Time-up!"));
        process.exit()
    }
    const minute = Math.floor((timeDiff%(3600*24))/3600)
    const seconds = Math.floor(timeDiff  % 60)
    console.log(`${minute.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`);
     }),1000);
    }

startTime(input)