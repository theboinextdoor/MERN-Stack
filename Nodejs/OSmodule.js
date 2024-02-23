const os = require('os');

//? Types of your Operating System:-
console.log("Type of your OS System is: ", os.type());

//? Types of your Platform :- 
console.log("Platform : ", os.platform());

//? CPU Architecture
console.log("CPU Architecture : ", os.arch());

//? CPU Details :-
console.log("CPU Details : ", os.cpus());

//? Total Memory
console.log("Total Memory inside your PC in bytes: ", os.totalmem());

//? Free Memory
console.log("Free Memory inside your PC in bytes: ", os.freemem());

//? Up Time 
console.log("Since when your PC last shut down: ", os.uptime());

