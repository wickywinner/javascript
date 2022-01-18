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
console.log("starting time of task   "+ t1%10000) // it is in milisecond
let stext = fs.readFileSync(args.source,"utf-8");
let t2 = Date.now()
console.log("finishing time of task  "+ t2%10000)
console.log(t2-t1)

let t3 = Date.now();
console.log("starting time of task   "+ t3%10000) // it is in milisecond
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
console.log("finishing time of task  "+ t4%10000)
console.log(t4-t3)
console.log(t4-t1)

