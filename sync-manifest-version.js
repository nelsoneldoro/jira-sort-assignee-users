var fs = require("fs");
var manifestJson = require("./extension/manifest.json");

manifestJson.version = process.argv[2];
const manifestJsonString = JSON.stringify(manifestJson, null, 2);

fs.writeFile("./extension/manifest.json", manifestJsonString, "utf8", () =>
  console.log("New Manifest version updated!", manifestJsonString)
);
