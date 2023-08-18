"use strict";
let dept = "react";
console.log(dept);
let num = 20;
console.log(num);
let arrVal = [1, 2, 3];
console.log(arrVal);
let arrStr = [1, 2, 3, 4];
console.log(arrStr);
const employee = {
    name: "hari",
    age: 22,
    isMarried: false
};
employee.age = 23;
console.log(employee);
const Home = {
    name: "hari",
    isMarried: false,
    age: 22
};
console.log(Home);
const checkType = {
    name: "hari",
    isMarried: false,
};
console.log(checkType);
let errorCode = [];
errorCode = ["hvy", 2, 3, true];
console.log(errorCode);
let namee;
namee = 22;
console.log(namee);
namee = "harish";
console.log(namee);
namee = true;
console.log(namee);
let arr = [];
arr.push(2);
arr.push("harish");
arr.push(true);
console.log(arr);
let empObj = {
    name: 22,
    age: "harish"
};
empObj.age = 23;
empObj.name = "harish";
console.log(empObj);
let add = (a, b, c) => {
    if (typeof c === "number") {
        return a + b + c;
    }
    return a + b;
};
console.log(add(1, 2));
let personObj = (user) => {
    console.log(`the name is ${user.name} and age is ${user.age}`);
};
personObj({ name: "hari", age: 22 });
let addRest = (a, b, ...c) => {
    const d = c.reduce((x, y) => x + y, 0);
    return a + b + d;
};
console.log(addRest(1, 2, 3, 4, 5, 3, 2));
let arrName = [1, 2, 3];
console.log(arrName);
let arrUnion = [1, "harish", true];
arrUnion[0] = "string";
arrUnion.push(4);
console.log(arrUnion);
let arrTuple = ["hari", 22, false];
console.log(arrTuple);
let arrTuplesNamed = ["vinoth", 23, false];
let [username, age, isMarried] = arrTuplesNamed;
console.log(username);
let arr1 = ["hari", 22];
console.log(arr1[1]);
let nameToUpr = "";
console.log(nameToUpr.toUpperCase());
let func = (a, b, c) => {
    return [a, b, c];
};
console.log(func(1, 2, "djbcjb"));
let genFunc = (a, b, c) => {
    return console.log(`type of a is ${typeof a} and  type of b is ${typeof b} and type of c is ${typeof c}`);
};
console.log(genFunc("hari", 1, true));
const add1 = (x, y) => {
    return x + y;
};
console.log(add1(4, 2));
//# sourceMappingURL=index.js.map