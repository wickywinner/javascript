//npm install axios

let parse = require("minimist");
let args = parse(process.argv);
let fs = require("fs");
let axios = require("axios");


let dwnld_promise = axios.get(args.url);
dwnld_promise.then(function(response)
{
    let html = response.data;
    console.log(html);
    fs.writeFileSync(args.dest,html,"utf-8")
}
).catch(function(err){
    console.log(err)  
})

//cmd :- node .\FirstDownloadWeb.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest="download.html"