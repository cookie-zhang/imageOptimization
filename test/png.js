// var pngquant = require('jdf-png-native');
// var pngquant = require('node-pngquant-native')
// var fs = require('fs');
// fs.readFile('./jd.png',function(err,buffer){
//     console.log(buffer)
    // if(err) throw err;
    // var resBuffer = pngquant.compress(buffer);
    // console.log(resBuffer)
    // fs.writeFile('./out.png', resBuffer,{
    //     flags:'wb'
    // },function(err){})
// })
var C = require('node-pngquant-native');

fs.readFile('./alphatest.png', function (err, data) {
  if (err) throw err;
  var buffer = C.option({
    params: '-v --iebug'
  }).compress(data);
  fs.writeFile('./alphatest_out.png', buffer, {
      flags: 'wb'
  }, function(err){});
});
