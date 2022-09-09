// export{}
alert("Write the function to find maximum between four numbers ");
function maxnumb(firstnumbjadu, Secondnumbjadu, Thirdnumbjadu, Fourthnumbjadu) {
    var maximum;
    if (!Thirdnumbjadu && !Fourthnumbjadu) {
        if (firstnumbjadu > Secondnumbjadu) {
            maximum = firstnumbjadu;
        }
        else {
            maximum = Secondnumbjadu;
        }
    }
    else if (!Thirdnumbjadu) {
        if (firstnumbjadu > Secondnumbjadu) {
            maximum = firstnumbjadu;
        }
        else {
            maximum = Secondnumbjadu;
        }
    }
    else if (!Fourthnumbjadu) {
        if (firstnumbjadu > Secondnumbjadu) {
            maximum = firstnumbjadu;
        }
        else {
            maximum = Secondnumbjadu;
        }
    }
    else {
        if (firstnumbjadu > Secondnumbjadu && firstnumbjadu > Thirdnumbjadu && firstnumbjadu > Fourthnumbjadu) {
            maximum = firstnumbjadu;
        }
        else if (Secondnumbjadu > firstnumbjadu && Secondnumbjadu > Thirdnumbjadu && Secondnumbjadu > Fourthnumbjadu) {
            maximum = Secondnumbjadu;
        }
        else if (Thirdnumbjadu > firstnumbjadu && Thirdnumbjadu > Secondnumbjadu && Thirdnumbjadu > Fourthnumbjadu) {
            maximum = Thirdnumbjadu;
        }
        else {
            maximum = Fourthnumbjadu;
        }
    }
    return maximum;
}
var firstnumb = prompt("Enter the first digit");
var firstnumbjadu = Number(firstnumb);
var secondnumb = prompt("Enter the second digit");
var Secondnumbjadu = Number(secondnumb);
var thirdnumb = prompt("Enter the third digit");
var Thirdnumbjadu = Number(thirdnumb);
var fourthnumb = prompt("Enter the fourth digit");
var Fourthnumbjadu = Number(fourthnumb);
var result = maxnumb(firstnumbjadu, Secondnumbjadu, Thirdnumbjadu, Fourthnumbjadu);
console.log("The maximum number among your inputed numbers", firstnumbjadu, ",", Secondnumbjadu, ",", Thirdnumbjadu, ",", Fourthnumbjadu, "is", result);
