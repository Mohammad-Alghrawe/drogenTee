console.log("JS...");

var mydata = JSON.parse(drogenTee);
console.log(mydata[0].name);
console.log(mydata[0].age);
console.log(mydata[1].name);
console.log(mydata[1].age);

let l = Object.keys(mydata).length;
console.log("JSON file length is :" + " " + l);
for (let i = 0; i < l; i++) {
  console.log(l);
}
