// npm install pdf-lib
let parse = require("minimist");
let args = parse(process.argv);
let fs = require("fs");
let path = require("path");
let pdf = require("pdf-lib");

let teamjson = fs.readFileSync(args.source,"utf-8");
let team = JSON.parse(teamjson);

//making world cup folder in lec7
fs.mkdirSync(args.dest);

// making team wise folder insdie worldcup folder
for(let i=0;i<team.length;i++)
{
    let teamfile = path.join(args.dest,team[i].name);
    fs.mkdirSync(teamfile);

    //Now making  pdf of all matches to show score card details
    for(let j=0;j<team[i].matches.length;j++)
    {
        let scorecardpdf = path.join(teamfile,team[i].matches[j].vs +".pdf");
        fs.writeFileSync(scorecardpdf,"","utf-8");
    }

}