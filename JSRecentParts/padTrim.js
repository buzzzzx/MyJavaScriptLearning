// padding & trimming

var str = "Halo";

str.padStart(3);  // "Halo"
str.padStart(4); // "Halo"
str.padStart(8); // "    Halo"
str.padStart(8, "#"); // "####Halo"
str.padStart(8, "123456"); // "1234Halo"
str.padStart(8, "ab"); // "ababHalo"

str.padEnd(8, "ab"); // "Haloabab"


str = "   some stuff  \t\t"

str.trim();  // "some stuff"
str.trimStart(); // "some stuff  		"
str.trimEnd(); // "   some stuff"