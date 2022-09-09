//Progarm # 1
alert("1. Write a ts program to find maximum between two numbers.");
var numb1 = prompt("Enter the value of First number");
var numb2 = prompt("Enter the value of Second number");
var numb3 = Number(numb1);
var numb4 = Number(numb2);
if (numb3 > numb4) {
    console.log("Number", numb3, "is greater than", numb4);
}
else if (numb4 > numb3) {
    console.log("Number", numb4, "is greater than", numb3);
}
else {
    console.log("Your numbers", numb3, "and", numb4, "are equal");
}
//Program # 2
alert("2. Write a ts program to find maximum between three numbers.");
var number1 = prompt("Enter the value of first number");
var number2 = prompt("Enter the value of Second number");
var number3 = prompt("Enter the value of Third number");
var jawan1 = Number(number1);
var jawan2 = Number(number2);
var jawan3 = Number(number3);
if (jawan1 > jawan2 && jawan1 > jawan3) {
    console.log(jawan1, "is greater than", jawan2, "and", jawan3);
}
else if (jawan2 > jawan1 && jawan2 > jawan3) {
    console.log(jawan2, "is greater than", jawan1, "and", jawan3);
}
else {
    console.log(jawan3, "is greater than", jawan1, "and", jawan2);
}
//Progarm # 3
alert("Write a ts program to check whether a number is negative, positive or zero.");
var bandaban = prompt("Apni marzi ka number likho or jadu dekho");
var bandabanyar = Number(bandaban);
if (bandabanyar < 0) {
    console.log(bandabanyar, "is a negative number");
}
else if (bandabanyar > 0) {
    console.log(bandabanyar, "is a positive number");
}
else {
    console.log(bandabanyar, "is ZERO");
}
//Program # 4
alert("4. Write a ts program to check whether a number is divisible by 5 and 11 or not.");
var painumberday = prompt("Hanji number likh");
var paibandabanja = Number(painumberday);
if (paibandabanja % 5 == 0 && paibandabanja % 11 == 0) {
    console.log(painumberday, "is divisble by 5 and 11");
}
else {
    console.log(painumberday, "is not  divisble by 5 and 11");
}
//Program # 5
alert("5. Write a ts program to check whether a number is even or odd.");
var aikhornumb = prompt("Chal vai ch number day");
var chdanumb = Number(aikhornumb);
if (chdanumb % 2 == 0) {
    console.log(chdanumb, "is an even number");
}
else {
    console.log(chdanumb, "is an odd number");
}
//Program # 6
alert("Write a ts program to check whether a year is leap year or not.");
var year = prompt("Chal vai year likh koi vi");
var year1 = Number(year);
if (year1 % 4 == 0) {
    console.log(year1, "is a leap year");
}
else {
    console.log(year1, "is not  a leap year");
}
//Progarm # 7
alert("7. Write a ts program to check whether a character is alphabet or not.");
var hmm = prompt("Chal vi koi charcater likh dawo");
var hmm2 = String(hmm);
if (hmm2 >= 'a' && hmm2 <= 'z' || hmm2 >= 'A' && hmm2 <= 'Z') {
    console.log(hmm2, "Your inputed character is an alphabet");
}
else {
    console.log(hmm2, "Your inputed character is not  an alphabet");
}
//Progarm # 8
alert("Write a ts program to input any alphabet and check whether it is vowel or consonant.");
var umerbandaban = prompt("Write an alphabet ranging from A-Z");
var umerbhai = String(umerbandaban);
if (umerbhai == 'a' || umerbhai == 'e' || umerbhai == 'i' || umerbhai == 'o' || umerbhai == 'u' || umerbhai == 'A' || umerbhai == 'E' || umerbhai == 'I' || umerbhai == 'O' || umerbhai == 'U') {
    console.log("Umer vich jo", umerbhai, " payi  si value o vowel ay");
}
else {
    console.log("Umer vich", umerbhai, " jo payi  si value o consonants ay");
}
//Program # 9
alert("9. Write a ts program to input any character and check whether it is alphabet, digit or special character.");
var aikcharcterpao = prompt("Write a charcter of your own choice");
var tabdeeli = aikcharcterpao;
if (tabdeeli >= 'a' && tabdeeli <= 'z' || tabdeeli >= 'A' && tabdeeli <= 'Z') {
    console.log("Your inputed", tabdeeli, "is an alphabet");
}
else if (tabdeeli >= 0 && tabdeeli <= 9999) {
    console.log("Your inputed", tabdeeli, "is a digit");
}
else {
    console.log("Your inputed", tabdeeli, "is a Special Character");
}
//Program # 10 
alert("Write a ts program to check whether a character is uppercase or lowercase alphabet.");
var Character = prompt("Input any Charcter apni marzi da");
var tabdeeli2 = String(Character);
if (tabdeeli2 >= "a" && tabdeeli2 <= "z") {
    console.log("Your inputed", tabdeeli2, "is in lower case");
}
else {
    console.log("Your inputed", tabdeeli2, "is in UPPER case");
}
//Program # 11
alert("11. Write a ts program to input week number and print week day.");
var numberdaybhai = prompt("Input the week number or dekhna phir usi week kay din ayeingay(jadu)");
var jadustart = Number(numberdaybhai);
switch (jadustart) {
    case 1:
        console.log("Week # 1");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
        break;
    case 2:
        console.log("Week # 2");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
        break;
    case 3:
        console.log("Week # 3");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
        break;
    case 4:
        console.log("Week # 4");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
        break;
    case 5:
        console.log("Week # 5");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
        break;
    case 6:
        console.log("Week # 6");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
        break;
    default:
        console.log("Week # 7");
        console.log("Day1");
        console.log("Day2");
        console.log("Day3");
        console.log("Day4");
        console.log("Day5");
        console.log("Day6");
        console.log("Day7");
}
console.log("Han vai dekh lya jadu");
//Program # 12
alert("12. Write a ts program to input month number and print number of days in that month.");
var monthlikh = prompt("Input the month number of your own choice");
var monthtransform = Number(monthlikh);
switch (monthtransform) {
    case 1:
        console.log("This Month number", monthtransform, "is Januray contains 31 days");
        break;
    case 2:
        console.log("This Month number", monthtransform, "is Feburary contains 28 or 29 days");
        break;
    case 3:
        console.log("This Month number", monthtransform, "is March contains 31 days");
        break;
    case 4:
        console.log("This Month number", monthtransform, "is April contains 30 days");
        break;
    case 5:
        console.log("This Month number", monthtransform, "is Maycontains 31 days");
        break;
    case 6:
        console.log("This Month number", monthtransform, "is June contains 30 days");
        break;
    case 7:
        console.log("This Month number is July", monthtransform, "contains 31 days");
        break;
    case 8:
        console.log("This Month number", monthtransform, " is August contains 31 days");
        break;
    case 9:
        console.log("This Month number", monthtransform, "is September contains 31 days");
        break;
    case 10:
        console.log("This Month number", monthtransform, "is Octobercontains 31 days");
        break;
    case 11:
        console.log("This Month number", monthtransform, "is Novemeber contains 30 days");
        break;
    case 12:
        console.log("This Month number", monthtransform, "is December contains 31 days");
        break;
}
//Program # 14
alert("14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.");
var pehlaAngle = prompt("Write the first angle in degree of triangle");
var FirstAngle = Number(pehlaAngle);
var dosraAngle = prompt("Write the second angle in degree of the triangle");
var SecondAngle = Number(dosraAngle);
var tesraAngle = prompt("Write the third angle in degrees of the triangle");
var ThirdAngle = Number(tesraAngle);
if (FirstAngle == 60 && SecondAngle == 60 && ThirdAngle == 60) {
    console.log("Your triangle with", FirstAngle, "&", SecondAngle, "and", ThirdAngle, " is Valid !");
}
else {
    console.log("Your triangle with", FirstAngle, "&", SecondAngle, "and", ThirdAngle, " is not  Valid !");
}
//Program # 15
alert("15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.");
var pehliSide = prompt("Input the first side of the Triangle");
var FirstSide = Number(pehliSide);
var dosriSide = prompt("Input the Second side of the Triangle");
var SecondSide = Number(dosriSide);
var tesriSide = prompt("Input the Third side of the Triangle");
var ThirdSide = Number(tesriSide);
if (FirstSide == SecondSide && SecondSide == ThirdSide && ThirdSide == FirstSide) {
    console.log(" First side = ", FirstSide, " Second side = ", SecondSide, " and Third Side = ", ThirdSide, " So this triangle is Valid");
}
else {
    console.log(" First side = ", FirstSide, " Second side = ", SecondSide, " and Third Side = ", ThirdSide, " So this triangle is not Valid");
}
//Progarm # 16
alert("16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.");
var pehlaAngleday = prompt("Write the first angle of the triangle");
var FirstAngleday = Number(pehlaAngleday);
var dosraAngleday = prompt("Write the second angle of the triangle");
var SecondAngleday = Number(dosraAngleday);
var tesraAngleday = prompt("Write the third angle of the triangle");
var ThirdAngleday = Number(tesraAngleday);
if (FirstAngleday == 45 || FirstAngleday == 90 && SecondAngleday == 45 || SecondAngleday == 90 && ThirdAngleday == 90 || ThirdAngleday == 45) {
    console.log("Triangle is Isosles because it has following angles", FirstAngleday, SecondAngleday, ThirdAngleday);
}
else if (FirstAngleday == 60 && SecondAngleday == 60 && ThirdAngleday == 60) {
    console.log("Triangle is Equlateral because it has following angles", FirstAngleday, SecondAngleday, ThirdAngleday);
}
else if (FirstAngleday != SecondAngleday && SecondAngleday != ThirdAngleday && ThirdAngleday != FirstAngleday) {
    console.log("Triangle is Sclane because it has following angles", FirstAngleday, SecondAngleday, ThirdAngleday);
}
else {
    console.log("O pai ki angles payie kuch tay banda kary lehaz ay koi angle nay?", FirstAngleday, SecondAngleday, ThirdAngleday);
}
//Progarm # 18
alert("18. Write a ts program to calculate profit or loss.");
var bolobuyprice = prompt("Write the buying price of your Goods");
var buyingprice = Number(bolobuyprice);
var bolosellprice = prompt("Write the selling price of your Goods");
var sellingprice = Number(bolosellprice);
if (sellingprice > buyingprice) {
    console.log("Congratulations you have earned a good profit as your buying price is", buyingprice, "and selling price is", sellingprice);
}
else if (buyingprice > sellingprice) {
    console.log("Alas! you are in loss as your buying price is", buyingprice, "and selling price is", sellingprice);
}
else {
    console.log("Pai tusi bus kam kita na loss na profit HAhahahahah", buyingprice, "and selling price is", sellingprice);
}
//Progarm # 19
alert("19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:Percentage >= 90% : Grade APercentage >= 80% : Grade BPercentage >= 70% : Grade CPercentage >= 60% : Grade DPercentage >= 40% : Grade EPercentage < 40% : Grade F");
var firstsubj = prompt("Write the marks of the Physics Subject");
var phynumber = Number(firstsubj);
var secondsubj = prompt("Write the marks of the Chemistry Subject");
var chemnumber = Number(secondsubj);
var thirdsubj = prompt("Write the marks of the Biology Subject");
var bionumber = Number(thirdsubj);
var fourthsubj = prompt("Write the marks of the Mathematics Subject");
var mathnumber = Number(fourthsubj);
var fifthsubj = prompt("Write the marks of the Computer Subject");
var compnumber = Number(fifthsubj);
var sum = phynumber + chemnumber + bionumber + mathnumber + compnumber;
var percentage = (sum / 300) * 100;
if (percentage >= 90) {
    console.log("Congrats you got A grade because you have percentage", percentage, "%");
}
else if (percentage >= 80) {
    console.log("Congrats you got B grade because you have percentage", percentage, "%");
}
else if (percentage >= 70) {
    console.log("Mehnat kar bachya tera grade C ha  ! because you have percentage", percentage, "%");
}
else if (percentage >= 60) {
    console.log("Mood kharab kita D lay kay  because you have percentage", percentage, "%");
}
else if (percentage >= 50) {
    console.log("Parhai da takaluf hi kita wese!tay grade tera E hega because you have percentage", percentage, "%");
}
else if (percentage >= 40) {
    console.log("Mera putter Chutti kar pai q kay F a gya because you have percentage", percentage, "%");
}
else {
    console.log("Tera Allah hi hafiz hega pai  because you have percentage", percentage, "%");
}
//Program # 20
alert("20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:Basic Salary <= 10000 : HRA = 20%, DA = 80%Basic Salary <= 20000 : HRA = 25%, DA = 90%Basic Salary > 20000 : HRA = 30%, DA = 95%");
var sallerybatao = prompt("Apni sallery das pai fer tenun bonus daiye");
var sallery = Number(sallerybatao);
if (sallery <= 10000) {
    var HRA = (sallery / 10000) * 20;
    var DA = (sallery / 10000) * 80;
    var gross_sallery = sallery + HRA + DA;
    console.log("Your gross sallery is", gross_sallery);
}
else if (sallery <= 20000) {
    var HRA = (sallery / 20000) * 25;
    var DA = (sallery / 20000) * 90;
    var gross_sallery = sallery + HRA + DA;
    console.log("Your gross sallery is", gross_sallery);
}
else if (sallery > 20000) {
    var HRA = (sallery / 20000) * 30;
    var DA = (sallery / 20000) * 95;
    var gross_sallery = sallery + HRA + DA;
    console.log("Your gross sallery is", gross_sallery);
}
else {
    console.log("ja pai apna kam kar");
}
//Progarm # 21
// alert("21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:For first 50 units Rs. 0.50/unitFor next 100 units Rs. 0.75/unitFor next 100 units Rs. 1.20/unitFor unit above 250 Rs. 1.50/unitAn additional surcharge of 20% is added to the bill");
// var unitsdas:string | null = prompt("Bhaiaya Units btai bill bejhein");
// var jadu:number = Number(unitsdas);
// if(jadu<=50){
//     var cost:number = jadu*0.50;
//     console.log("Your Bill is ",jadu," rupees ");
// }else if(jadu>50 && jadu<=150){
// }
