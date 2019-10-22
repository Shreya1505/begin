var async = require("async");
var fs = require("fs");
var http = require('http');
var request = require('request');
var AdmZip = require('adm-zip');

var urlArr = [
      'http://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg',
      'http://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg',
      'http://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg',
      'http://canhotopazelite.info/wp-content/uploads/2018/08/office-bay-decoration-themes-with-office-bay-decoration-themes-elegant-yet-fun-office-bay-decoration-14.jpg',
      'http://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg',
      'http://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg',
      'http://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg',
      'http://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg'
      ];

var count=0;
var zip = new AdmZip();
 
async.forEach(Object.keys(urlArr), function (item, callback){ 
    var filename = urlArr[item];
    console.log(filename);
    
    var file = fs.createWriteStream("images/file"+item+".jpg");
    request = http.get(filename, function(response) {
      response.pipe(file);
    });
    zip.addLocalFile("images/file"+item+".jpg");
    count++;
    console.log(count);
    if(count%3 === 0){
        zip.writeZip("images/files"+item+".zip");
    }
    // tell async that that particular element of the iterator is done
    callback(); 
}, function(err) {
    console.log('iterating done');
});  