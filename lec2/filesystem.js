let parser = require("minimist");
let args = parser(process.argv);

let fs = require("fs");
let source_text = fs.readFileSync(args.source,"utf-8");
let word = source_text.split(" ");
for(let i=0;i<word.length;i++)
{
    word[i]=word[i].toUpperCase();

}
word= word.join(" ")
console.log(word);
dest=word;
fs.writeFileSync(args.dest,dest,"utf-8");