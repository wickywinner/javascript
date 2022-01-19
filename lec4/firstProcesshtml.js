//npm install jsdom

let parse = require("minimist");
let args= parse(process.argv);
let fs= require("fs");
let jsdom = require("jsdom");//It load html and prepare DOM(Document Object Module) for programmer.

fs.readFile(args.source,"utf-8",function(err,data){
    let JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(data);
    let document = dom.window.document;

})