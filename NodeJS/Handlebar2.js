var Handlebars = require('handlebars');
var fs = require("fs");

if(fs.existsSync('HandleBar2.xml')){
   var source = fs.readFileSync('HandleBar2.xml').toString();
  
var data = { 'allEntries' :
  [
    {
    "baseId": "1",
    "feature": {
      1: "parent",
      2: "first entry"
    },
    "contentType": {
      "1": {
        "value": "pure"
      },
      "2": {
        "value": "mix"
      }
    },
    "isActive": true,
    "childProducts": [
      {
        "baseId": "1-1",
        "isActive": true
      },
      {
        "baseId": "1-2",
        "isActive": false
      },
      {
        "baseId": "1-3",
        "isActive": true
      },
      {
        "baseId": "1-4",
        "isActive": true,
        "feature": {
          1: "parent",
          2: "first entry"
        },
        "searchTerms": {
          0: "glue",
          1: "adhesive",
          2: "stick"
        }
      }
    ]
  },
  {
    "baseId": "10",
    "isActive": true,
    "searchTerms": {
      "0": "glue",
      "1": "adhesive",
      "2": "stick"
    },
    "childProducts": [
      {
        "baseId": "10-1",
        "isActive": true,
        "searchTerms": {
          "0": "glue"
        }
      },
      {
        "baseId": "10-2",
        "isActive": false
      },
      {
        "baseId": "10-3",
        "isActive": true
      },
      {
        "baseId": "10-4",
        "isActive": true
      }
    ]
  }
]
}
   
   var template = Handlebars.compile(source);
    
    var result = template(data);
    
    console.log(result);
    fs.writeFileSync("handleBarFile.html",result);
}
else{
    console.log('Error');
}