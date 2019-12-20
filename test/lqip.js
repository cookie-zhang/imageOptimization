const lqip = require('lqip');
const file='./alphatest.png'
lqip.base64(file).then(res=>{
    console.log(res)
})

lqip.palette(file).then(res=>{
    console.log(res)
})