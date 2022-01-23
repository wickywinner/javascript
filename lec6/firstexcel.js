//npm install excel4node
 let parse = require("minimist");
 let args = parse(process.argv);
 let fs= require("fs");
 let excel = require("excel4node");

 let teamjson = fs.readFileSync(args.source,"utf-8");
 let team = JSON.parse(teamjson);
 let wb = new excel.Workbook();
 let hs= wb.createStyle({
     font:{
         bold:true,
         underline:true,
         size:16,
         color:"red"
     },
     fill:{
         type:"pattern",
         patternType:"solid",
         fgColor:"yellow"
     }
 })
 for(let i=0;i<team.length;i++)
 {
    let sheet = wb.addWorksheet(team[i].name);
    sheet.cell(1,1).string("Rank").style(hs);
    sheet.cell(1,2).number(team[i].rank);
    sheet.cell(2,1).string("Vs").style(hs);
    sheet.cell(2,2).string("Result").style(hs);
    for(let j=0;j<team[i].matches.length;j++)
    {
        sheet.cell(j+3,1).string(team[i].matches[j].vs);
        sheet.cell(j+3,2).string(team[i].matches[j].result);
    }

 }
 wb.write(args.dest)