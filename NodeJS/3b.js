var request = require("request");
var fs = require("fs");

var s = request('http://www.google.com/');
//Since streams inherit from EventEmitter, so we are able to call the method 'on' on s to subscribe to some of the events

//As we keep getting data in s, this event is called
s.pipe(fs.createWriteStream('3b.html'));

s.on('end',function(chunk){
   console.log('--> Done -->'); 
});