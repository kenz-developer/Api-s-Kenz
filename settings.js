const fs = require("fs");

global.creator = "Alzzoffc";
global.apikey = ["apikenz", "kenz", "kenzapi"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
