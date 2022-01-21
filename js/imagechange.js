var x=document.getElementById("aboutmeimg");
let images=['image/arnab1.jpg','image/arnab2.jpg'];
setInterval(function()
{
let random=Math.floor(Math.random()*2);
x.src=images[random];
},800);