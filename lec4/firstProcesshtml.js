//npm install jsdom

let parse = require("minimist");
let args= parse(process.argv);
let fs= require("fs");
let jsdom = require("jsdom");//It load html and prepare DOM(Document Object Module) for programmer.
const { div } = require("prelude-ls");

fs.readFile(args.source,"utf-8",function(err,data){
    let dom = new jsdom.JSDOM(data);
    let document = dom.window.document;
    let needed_doc = document.querySelectorAll("div.match-info > div.description");
    //we will get all the div's of class description whose parent class is match-info
    for(let i=0;i<needed_doc.length;i++)
    {
        console.log(needed_doc[i].textContent);
    }
    })
    //