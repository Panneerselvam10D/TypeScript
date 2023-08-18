let dept = "react"
// dept = 20
console.log(dept);

let num: number = 20
console.log(num);

let arrVal = [1, 2, 3]
// arrVal.push("ekj")
console.log(arrVal)
  

let arrStr: readonly number[] = [1, 2, 3, 4];
// arrStr.push(23)

console.log(arrStr)

const employee = {
  name: "hari",
  age: 22,
  isMarried : false
}
employee.age=23
console.log(employee)

const Home: {
  name: string,
  age: number,
  isMarried :boolean
} = {
  name: "hari",
  isMarried: false,
  age: 22
}

console.log(Home);

type typeName={  name: string,
  age?: number,
  isMarried: boolean
}
const checkType: typeName = {
  name: "hari",
  isMarried: false,

}
  
console.log(checkType);


let errorCode:(string | number | boolean)[] = []
errorCode = ["hvy",2,3 ,true]
console.log(errorCode)


let namee: any;
namee = 22
console.log(namee)
namee = "harish"
console.log(namee);
namee = true;
console.log(namee);

let arr: any[] = [] 
arr.push(2)
arr.push("harish")
arr.push(true)
console.log(arr);

let empObj: { name:any,age:any} = {
  name: 22,
  age: "harish"
  
}
empObj.age = 23
empObj.name ="harish"
console.log(empObj);

//union and optional types

type Num = String | number 

let add = (a:number, b:number, c?:Num)=> {
  if (typeof c === "number") {
    return a + b + c
  }
  return a+b
}
console.log(add(1, 2));

//typealias object as params

type User = {
  name:string,age:number
}

let personObj = (user:User) => {
  console.log(`the name is ${user.name} and age is ${user.age}`);
  
}

personObj({name:"hari",age:22})

//rest params

let addRest = (a:number, b:number,...c:number[])  => {
  const d =c.reduce((x,y)=>x+y,0);
  return a + b + d
 
  
}
console.log(addRest(1, 2, 3, 4, 5, 3, 2));

//array

let arrName = [1,2,3]
console.log(arrName);

let arrUnion = [1, "harish", true]
arrUnion[0] = "string"
arrUnion.push(4)
console.log(arrUnion);

//tupel - typed array is known as tuple

let arrTuple: readonly[string, number, boolean] = ["hari", 22, false]

console.log(arrTuple);

//named tuples
let arrTuplesNamed :readonly[username :string, age:number, isMarried:boolean] = ["vinoth",23,false]

//accesing named tuples
let[username,age,isMarried]= arrTuplesNamed
console.log(username);



let arr1: readonly (number | string)[] = ["hari", 22]

console.log(arr1[1]);


let nameToUpr: (string | number) = ""
console.log(nameToUpr.toUpperCase())

//generics

let func = (a:any, b:any, c:any) => {
  return [a, b, c]
}
console.log(func(1, 2, "djbcjb"));

//generic 

let genFunc = <T,U,V>(a: T, b: U, c: V) => {
  return console.log(`type of a is ${typeof a} and  type of b is ${typeof b} and type of c is ${typeof c}`);
  
}


// console.log(genFunc<string,string,string>("hari","kjhfih","true"));
console.log(genFunc("hari", 1, true));

//generics in interface

interface Maths<T>{
  (
  x: T,
  y: T
  ):T
}

const add1: Maths<number> = (x,y) => {
  return x+y
}

console.log(add1(4,2));
