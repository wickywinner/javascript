//It perform task Asynchronously that is call back function do
//means task1 is performed parallely with task 2 task1 is related to disk
//where as task 2 is related to CPU

//task1:-Read a file (disk)
//task2:-write a file (Disk)
//task3:-calculate squre of primes(CPU)
//task4:-calculate prime (CPU)
//cmd :- node lackofcallback.js --source=f1.txt --dest=f2.txt


function IsPrime(x)
{
    let flag=true;
    for(let div =2;div<x;div++)
    {
        if(x%div==0)
        { 
            flag=false;
            break
        }
    }
    return flag;
}

let parse = require("minimist");
let args= parse(process.argv);
let fs= require("fs");
let t1 = Date.now();
console.log("starting time of task 1  "+ t1%10000) // it is in milisecond
fs.readFile(args.source,function(data)
{
    let t2 = Date.now()
    console.log("finishing time of task 1  "+ t2%10000)
    console.log(t2-t1)
})


let t3 = Date.now();
console.log("starting time of task 2  "+ t3%10000) // it is in milisecond
let arr =[];
let n= args.n
for(let i=0;i<=n;i++)
{
    let isprime = IsPrime(i);
    if(isprime==true)
    {
        arr.push[i]
    }
}
let t4 = Date.now()
console.log("finishing time of task 2  "+ t4%10000)
console.log(t4-t3)
console.log(t4-t1)

/*
output :-
PS C:\Users\wicky winner\Desktop\dev\lec3> node .\callback.js --source= f1.txt  --n=100000
starting time of task 1  7816
starting time of task 2  7822
finishing time of task 2  9325
1503
1509
finishing time of task 1  9327
1511
*/


