var a = document.getElementById('score');
var b = document.getElementById('level');
var c = document.getElementById('miss');
var d = document.getElementById('misstotal');
var box = document.getElementById('wrap3');
a.innerHTML=1;
b.innerHTML=2;
c.innerHTML=3;
d.innerHTML=4;

var lco, rco;
var str ='';
setInterval(function(){
  lco = Math.floor(Math.random()*700) + 150;
  rco = Math.floor(Math.random()*700) + 150;

  box.innerHTML += '<div id="wrap3" style="margin-left: "'+lco+'"px; margin-top: "'+rco+'"px"></div>';

  console.log(lco,rco);
}, 1000);


var str='';
document.addEventListener('click', function(event) {
  if(event.target.id == 'box'){
    console.log('ss');
    box.remove();
  }
});
