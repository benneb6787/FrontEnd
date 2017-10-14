console.log('aa');

var btn = document.getElementById('btn');

btn.addEventListener('click', load);

function load(){
  console.log('load');
   var request = new XMLHttpRequest();
   request.open('GET', "app.json", true);

   request.onreadystatechange = function(){
     if(request.readyState==4){
       if(request.status==200){
         console.log(JSON.parse(request.responseText));
       }
     }
     //console(request.readyState);
   }
   request.send();
}
