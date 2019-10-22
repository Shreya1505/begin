var parser = require('xml2json');
var fs = require("fs");

var fileNamesArr = ["xml2json1.xml","xml2json2.xml","xml2json4.xml"];
var len = fileNamesArr.length;

for(var i=0;i<len;i++){
    convertXMLToJSON(fileNamesArr[i]);
}


function convertXMLToJSON(fileName){
    if(!fs.existsSync(fileName)){
        console.log('File Not Found!');
    }
    
    else{
        var xml = fs.readFileSync(fileName).toString()
        console.log("input -> %s", xml)
         
        // xml to json
        var json = parser.toJson(xml);
        console.log("to json -> %s", json);
    }
}