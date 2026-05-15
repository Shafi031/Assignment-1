//1

const Numbers : number[] =[1, 2, 3, 4, 5, 6];

function filterEvenNumbers(elements:number[]):number[]{
    return elements.filter(n=> n%2===0);
}
filterEvenNumbers(Numbers)

// 2

const word:string ="typescript"

function reverseString(letter:string):string{
    const char = letter.split("");
    const reverse = char.reverse();
    const add=reverse.join("")

    return add;
}
reverseString(word);

// 3

type StringOrNumber = string | number

const checkType = (t:StringOrNumber) =>{
    if(typeof t==="string"){
        return "String"
    }
    else{
        return"Number";
    }
}

checkType("Hello")
checkType(42)

//  4

type user ={id:number,name:string,age:number}
const user = { id: 1, name: "John Doe", age: 21 }

const getProperty = <T>(userInfo:T,key:keyof T)=>{
    return userInfo[key];
    
}

getProperty(user,"name");


// 5

interface Book {
    title:string;
    author:string;
    publishedYear:number;
}

const toggleReadStatus =(book:Book)=>{
   return {
        ...book,
        isRead:true
   }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// 6

class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){    
        this.name=name;
        this.age=age;
    }

    
}

class Student extends Person{
    grade:string;

    constructor(name:string,age:number,grade:string){
        super(name,age);
        this.grade=grade;
    }

   getDetails (){
    return`Name: ${this.name}, Age: ${this.age}, Grade:${this.grade}`;
   }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// 7

const array1:number[]=[1, 2, 3, 4, 5]
const array2:number[]=[3, 4, 5, 6, 7]

const getIntersection =(array1:number[],array2:number[])=>{
return array1.filter(n=>array2.includes(n))
}

getIntersection(array1,array2)