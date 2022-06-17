// JSON stand for Javascript Object Notation.

let Userbiodata = {
   name : "Learn Programming",
   age : 18,
   Education : "FSC"
}

console.log(Userbiodata);


// stringify
// parse

let ConverJSintoStr = JSON.stringify(Userbiodata);
console.log(ConverJSintoStr);
ConverJSintoStr = ConverJSintoStr.replace("FSC" , "MBBS");
console.log(ConverJSintoStr);
let ConvertJSintoObj = JSON.parse(ConverJSintoStr);
console.log(ConvertJSintoObj)