
"use strict";
// alert("Hello World");
//console.log("Hello World");
//debugger;


// var x= {
	// key1: "value1",
	// key2: "value2",
	// "key3": "value3"
	// };

// x.key1 = "new value1";
// x["key2"] = "new value2";
// console.log(typeof x);	
	
	
	// var x = ["element1", "element2", "element3", 25, {}, [], null];
// console.log(x[3]);	
// x[3] = 56;
// console.log(x[3]);	
// console.log(typeof x);	
// console.log(Array.isArray(x));

var x = ["element1", "element2", "element3", 25, {}, [], null];
console.log(x[3]);	
x[3] = 56;
console.log(x[3]);	
console.log(typeof x);	
x.test = 123;
console.log(x.test);

console.log(Array.isArray(x));

// var x = function () {};
// x.key1 = "test";
// console.log(x.key1);
// console.log(typeof x);

var x = ["123"];
console.log(x); // ["123"]
var y = x;
console.log(y); // ["123"]
y[0] = 345;
console.log(y); // [345];
console.log(x); // [345];