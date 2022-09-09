// export{}
alert("Write the function to find maximum between four numbers ")
function maxnumb(firstnumbjadu:number,Secondnumbjadu:number,Thirdnumbjadu?:number,Fourthnumbjadu?:number): number {
    var maximum :number;
    if(!Thirdnumbjadu && !Fourthnumbjadu){
        if(firstnumbjadu>Secondnumbjadu){
            maximum = firstnumbjadu;
        }else{
            maximum = Secondnumbjadu;
        }
    }else if(!Thirdnumbjadu){
        if(firstnumbjadu>Secondnumbjadu){
            maximum = firstnumbjadu;
        }else{
            maximum = Secondnumbjadu;
        }
    }else if(!Fourthnumbjadu){
        if(firstnumbjadu>Secondnumbjadu){
            maximum = firstnumbjadu;
        }else{
            maximum = Secondnumbjadu;
        }
    }else{
        if(firstnumbjadu>Secondnumbjadu && firstnumbjadu>Thirdnumbjadu && firstnumbjadu>Fourthnumbjadu ){
            maximum = firstnumbjadu;
        }else if(Secondnumbjadu>firstnumbjadu && Secondnumbjadu>Thirdnumbjadu && Secondnumbjadu>Fourthnumbjadu ){
            maximum = Secondnumbjadu;
        }else if(Thirdnumbjadu>firstnumbjadu && Thirdnumbjadu>Secondnumbjadu && Thirdnumbjadu>Fourthnumbjadu ){
            maximum = Thirdnumbjadu;
        }else{
            maximum=Fourthnumbjadu;
        } 
    }
    
    return maximum;
}
var firstnumb:string | null = prompt("Enter the first digit");
var firstnumbjadu:number = Number (firstnumb);
var secondnumb:string | null = prompt("Enter the second digit");
var Secondnumbjadu:number = Number(secondnumb);
var thirdnumb:string | null = prompt("Enter the third digit");
var Thirdnumbjadu:number = Number(thirdnumb);
var fourthnumb:string | null = prompt("Enter the fourth digit");
var Fourthnumbjadu:number = Number(fourthnumb);
var result:number=maxnumb(firstnumbjadu,Secondnumbjadu,Thirdnumbjadu,Fourthnumbjadu);
console.log("The maximum number among your inputed numbers",firstnumbjadu,",",Secondnumbjadu,",",Thirdnumbjadu,",",Fourthnumbjadu,"is",result);
