#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "Azul Mounir.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);