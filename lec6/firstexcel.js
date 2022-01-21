//npm install excel4node
 let parse = require("minimist");
 let args = parse(process.argv);
 let fs= require("fs");
 let excel = require("excel4node");
const { cellComment } = require("excel4node/distribution/lib/types");

 let teamjson = fs.readFileSync(args.source,"utf-8");
 let team = JSON.parse(teamjson);
 let wb = new excel.Workbook();
 for(let i=0;i<team.length;i++)
 {
    let sheet = wb.addWorksheet(team[i].name);
    sheet.cell(1,1).string("Rank");
    sheet.cell(1,2).number(team[i].rank);
    sheet.cell(2,1).string("Vs");
    sheet.cell(2,2).string("Result");
    for(let j=0;j<team[i].matches.length;j++)
    {
        sheet.cell(j+3,1).string(team[i].matches[j].vs);
        sheet.cell(j+3,2).string(team[i].matches[j].result);
    }

 }
 wb.write(args.dest)