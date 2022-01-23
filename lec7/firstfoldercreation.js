let parse = require("minimist");
 let args = parse(process.argv);
 let fs= require("fs");
 let path = require("path");//donot use "/" beacause it is different for different os so better to use path libraryAA

 let teamjson = fs.readFileSync(args.source,"utf-8");
 let team = JSON.parse(teamjson);
 for(let i=0;i<team.length;i++)
 {
    //  fs.mkdirSync(args.dest +"/" + team[i].name) >>> here we make folder with use od "/"
    // another way with path library
    let foldername = path.join(args.dest,team[i].name);
    fs.mkdirSync(foldername);
 }