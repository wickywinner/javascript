//Node :- It is RTE(run timr enviroment of java script ) 
//npm:- it is (Node Package Manager ) it is use to install libraries of javascript
//command :- npm install libraries name/module name;
let parser = require("minimist")
let args = parser(process.argv);
let name = args.name;
let age = args.age;
console.log(name);
console.log(age);
