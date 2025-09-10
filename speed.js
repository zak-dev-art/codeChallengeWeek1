let speed = (prompt('Enter vehicle speed')); //Prompt the user to enter the vehicle speed and store the input in the 'speed' variable

speeder(speed);
//function decaration
function speeder(speed){
// if speed is less than 70 return Ok
if (speed <=70 ){
return("Ok") 

}else {
    let demPoints = (speed-70)/5 // Calculate demerit points: for every 5 km/h over 70, 1 point is added

    // Check if the demerit points exceed 12
    if (demPoints>12){
     return("License suspended")
     // Otherwise, show the number of demerit points
    }else {
        return("Points:" + demPoints)
    }
}
}_

