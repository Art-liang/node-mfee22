let name = "小梁";

console.log(`Hello Node from ${name}`);

console.log ("start");
SetTimeout(function () {
    console.log("Timeout");
}, 1000);
console.log("end");