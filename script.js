//questions
var index = 0 
var questions = [
    {
        question: "Where is the Great Barrier Reef located?", 
        choices: ["Australia", "New Zealand", "Vietnam", "Indonesia"],
        answer: "Australia"
    },
    {
        question: "Which country gifted the Statue of Liberty to the US? ", 
        choices: ["France", "England", "Germany", "Austria"],
        answer: ""
    },
    {
        question: "How many points are a touchdown worth", 
        choices: ["6", "8", "9", "5"],
        answer: "7"
    },
    {
        question: "", 
        choices: ["", "", "", ""],
        answer: ""
    },
    {
        question: "", 
        choices: ["", "", "", ""],
        answer: ""
    }
];
console.log(questions[0].question)

//global vars
 //create addEventListener button
 var startbtn = document.getElementById("startbtn")
 var quiz = document.getElementById("quiz")
 var timer = document.getElementById("timer")
 var nextQ = document.getElementById("nextQ")
 //tracking time
 var timerid; 
 var time = questions.length * 10; 
 var currentindex= 0;
 startbtn.addEventListener("click", startquiz)
 //first function 
 function startquiz(){
     //start clock
     timerid= setInterval(clock, 1000);
    timer.textContent= time
     //hide intro
     var intro = document.getElementById("intro");
     intro.setAttribute("class", "hide");
     //unhide quiz
     quiz.removeAttribute("class");

     getq();
     getChoices();
 }
 function getq(){ 
     var htmlQuestions = "<h3>" + questions[index].question + "</h3>"
     document.getElementById("question").innerHTML = htmlQuestions
     
    
     
//declare questions here
//question title
//displey question textcontent
//display button
//for loop on choices and create buttons

 }

function getChoices() {
    var htmlChoices = "<ul>"

questions[index].choices.forEach(function(choice) {
    htmlChoices += "<li> <button>" + choice + "</button> </li> "
    
}) 
htmlChoices += "</ul>"  
document.getElementById("choices").innerHTML = htmlChoices

}

nextQ.addEventListener("click", function(){
    index++;
    if (index <= questions.length-1) {
        getq()
    getChoices()
    }
    

})






function clock(){
time--;
timer.textContent= time;
if (time<= 0) {
    console.log("game ends")
}
}