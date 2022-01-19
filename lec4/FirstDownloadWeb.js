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
).cath(function(error){
    console.log(err)
})
