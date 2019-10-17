function MetadataParser(_version,_channel,_keyField){
  this._version = _version;
  this._channel = _channel;
  this._keyField = _keyField;
}

var m1 = new MetadataParser(1,"Ch1","Key1");
var m2 = new MetadataParser(2,"Ch2","Key2");
var m3 = new MetadataParser(3,"Ch3","Key3");
var m4 = new MetadataParser(4,"Ch4","Key4");

function getKeyFields(jsonArr){
  var len = jsonArr.length;
  var keyArr=[];
  for(var i=0;i<len;i++){
    var ch = jsonArr[i].Channel;
    var keyF = getKeyField(ch);
    keyArr.push(keyF);
  }
}

function getKeyField(ch){
  if(ch == 'Ch1'){
    return m1.keyField;
  }
  else if(ch == 'Ch2'){
    return m2.keyField;
  }
  else if(ch == 'Ch3'){
    return m3.keyField;
  }
}

Object.defineProperty(MetadataParser.prototype, "version", {
  set : function (val) {this._version = val;},
  get : function () {return this._version;}
});
Object.defineProperty(MetadataParser.prototype, "channel", {
  set : function (val) {this._channel = val;},
  get : function () {return this._channel;}
});
Object.defineProperty(MetadataParser.prototype, "keyField", {
  set : function (val) {this._keyField = val;},
  get : function () {return this._keyField;}
});

//console.log(m1.keyField);
var jsonArr = [{'Channel':m1.channel},
  {'Channel':m2.channel},
  {'Channel':m3.channel}];
  
getKeyFields(jsonArr);  