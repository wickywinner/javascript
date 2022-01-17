let clargs= process.argv;
let n= parseInt(clargs[2]);
arr =[];
for(let i=0;i<n;i++)
{
    let val = parseInt(clargs[i+3]);
    arr.push(val);
}
console.log(arr); //display array
console.log(arr.length)//display array size

// display array content 
for(let j=0;j<arr.length;j++)
{
    console.log(arr[j]);
}