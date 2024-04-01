#! / usr/bin.env/node
import inquirer from "inquirer";


let todos: string[] = [];
let loop = true;

while (loop) {
    const answer :{
        TODO:string,
        ADDMORE:boolean 
    }
     = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message:"What do you want to add in your todos?"
        },

        {
            type: "confirm",
            message:"Do you want to add more todos?",
            name : "ADDMORE",
            default:"false"
        }
    ]);
    const {TODO , ADDMORE} = answer;
    console.log(answer);
    
    loop = ADDMORE;
    if (TODO) {
        todos.push(TODO)
    } else {
        console.log("Kindly add valid input");
    }
}

if (todos.length > 0) {
    console.log("Your TODO list");
    todos.forEach(todo => {
        console.log(todo)
    });
} else {
    console.log("NO todos Found")
}