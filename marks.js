// Prompt the user to enter the vehicle speed and store the input in the 'speed' variable
let marks = (prompt('Enter your Marks'));

//calling function before decaring due to hoisting
grade(marks)
function grade(marks){
//if marks are greater than 79, grade A
if (marks > 79 && marks<=100){
return("A") 
//if marks are between 60 and 79, grade B
}else if (marks >= 60 && marks<=79){
return("B") 
//if marks are between 49 and 59, grade C
}else if (marks > 49 && marks<=59){
return("C") 
//if marks are between 40 and 49, grade D
}else if (marks >= 40 && marks<=49){
return("D") 
//if marks are below 40 and above 0, grade E
}else if (marks >=0 && marks<40){
   return("E")
//return invalid if marks are not between 0 to 100
}else {
    return("Invalid marks,must be b2n 0 to 100")
}

}
console.log(grade(50));

