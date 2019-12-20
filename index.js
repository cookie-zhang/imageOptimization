// var pngquant = require('jdf-png-native');
var pngquant = require('node-pngquant-native');
var fs = require('fs');
fs.readFile('./jd.png',function(err,buffer){
    console.log(buffer)
    if(err) throw err;
    var resBuffer = pngquant.option({}).compress(buffer);
    fs.writeFile('./out.png', resBuffer,{
        flags:'wb'
    },function(err){})
})
