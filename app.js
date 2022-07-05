'use strict';
let name = prompt("Please enter your name");
let gender = prompt("Please enter your gender (male or female)");
let age = prompt("Please enter your age");
if(age <= 0){
    alert("age not valid");
}
if(!(confirm("you want to skip the welcoming message ?"))){
    if(gender == "male"){
        alert(`Welcome Mr ${name} , We hope you have a great day!`);
    }else if(gender == "female"){
        alert(`Welcome Ms ${name} , We hope you have a great day!`);
    }else{
        alert(`Welcome ${name} , We hope you have a great day!`);
    }
}

let answers =[];

function getAnswers(){
    let answer = prompt("Do you have a job ? (Yes/No)");
    if(!answer){
        answers[0] = "invalid";
    }else {
        answers[0] = answer;
    }
    answer = prompt("Do you watch lots of TV ? (Yes/No)");
    if(!answer){
        answers[1] = "invalid";
    }else {
        answers[1] = answer;
    }
    answer = prompt("Do you get up early every morning ? (Yes/No)");
    if(!answer){
        answers[2] = "invalid";
    }else {
        answers[2] = answer;
    }
}

getAnswers();

function printAnswers(){
    for(let i=0 ; i<3 ; i++){
        console.log(answers[i]);
    }
}

printAnswers();
