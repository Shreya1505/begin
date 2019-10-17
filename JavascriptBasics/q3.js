function MetadataParser(_channel,_name){
  this._channel = _channel;
  this._name = _name;
}

var m1 = new MetadataParser("A","shoe");
var m2 = new MetadataParser("B","apparel");
var m3 = new MetadataParser("C","electronics");
var m4 = new MetadataParser("A","electronics");



Object.defineProperty(MetadataParser.prototype, "channel", {
  set : function (val) {this._channel = val;},
  get : function () {return this._channel;}
});
Object.defineProperty(MetadataParser.prototype, "name", {
  set : function (val) {this._name = val;},
  get : function () {return this._name;}
});

function groupObjectsBy(jsonObjArr,sortBasedOn){
  var len = jsonObjArr.length;
  if(sortBasedOn == "channel"){
    jsonObjArr = jsonObjArr.sort(function(a, b){
      var nameA=a.channel.toLowerCase(), nameB=b.channel.toLowerCase();
      if (nameA < nameB)
          return -1 
      if (nameA > nameB)
          return 1
      return 0
    })
  }
  if(sortBasedOn == "name"){
    jsonObjArr = jsonObjArr.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
      if (nameA < nameB) 
          return -1 
      if (nameA > nameB)
          return 1
      return 0 
    })
  }
  console.log(jsonObjArr);
}


var jsonObjArr=[
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  },
  {
    "channel": "A",
    "name": "electronics"
  }
]

var sortBasedOn = "channel";
groupObjectsBy(jsonObjArr,sortBasedOn);
//console.log(m1.name);
 