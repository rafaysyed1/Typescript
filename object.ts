// // 1. Write a TypeScript program to list the properties of a TypeScript object

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };    

// console.log("Student Name:",student.name, ", Student Class:",student.sclass,", Roll No:",student.rollno)    

// // 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// interface student {
//     name:string
//     sclass:string
//     rollno?:number
// }

// var student:student = 
// {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12,
// }

// console.log("Before deletion: " ,"Student Name:",student.name, ", Student Class:",student.sclass,", Roll No:",student.rollno) 

// delete student["rollno"]

// console.log("After deletion: " ,"Student Name:",student.name, ", Student Class:",student.sclass,", Roll No:",student.rollno) 


// // 3. Write a TypeScript program to get the length of a TypeScript object.   
// Sample object :

// interface student {
//     name:string
//     sclass:string
//     rollno?:number
// }

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var lengthOfObject = Object.keys(student).length

// console.log(`The length of the object "Student" is '${lengthOfObject}'`)

// // 4. Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// for (let index = 0; index < library.length; index++) {
//     var titleOfBooks = library[index].title
//     var authorOfBooks = library[index].author
//     var readingStatusOfBooks = library[index].readingStatus
//     console.log(`Book Name: ${titleOfBooks}, Author Name: ${authorOfBooks} and Reading Status: ${readingStatusOfBooks}`) 
// }

// // 5. Write a TypeScript program to get the volume of a Cylinder with four decimal places using object classes.   
// // Volume of a cylinder : V = πr2h
// // where r is the radius and h is the height of the cylinder.

// interface cylinderVolume{
//     h:number
//     r:number
// }

// var volumeOfCylinder:cylinderVolume ={
//     h:5,
//     r:2,
// }
// console.log(`Volume of cylinder is "${Math.PI*Math.pow(volumeOfCylinder.r, 2)*volumeOfCylinder.h}" with the help of formula: V = πr2h`)

// // 10. Write a TypeScript program to sort an array of TypeScript objects.   

// interface libraryItems {
//     title: string,
//     author: string,
//     libraryID: number
// }

// var library: Array<libraryItems> = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];


//    library.sort((a:libraryItems, b:libraryItems) => (a.libraryID > b.libraryID) ? 1 : -1)
//    console.log(library)