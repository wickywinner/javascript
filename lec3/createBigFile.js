let parse = require("minimist");
let args= parse(process.argv);
let fs = require("fs");
let arr =[];
for(let i=0;i<=50000000;i++)
{
    arr.push(i);
}
str = arr.join("\n");
fs.writeFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");

//cmd :- node .\createBigFile.js --dest =bigfile.txt