//체스 판 만들기
var str = '';
var wrap = document.getElementById('wrap');   //chess.html에 있던 wrap의 주소를 갖고와서 넣음

for(var i=0; i<4; i++){
  for(var j=0; j<4; j++){
    var className = '';
    if((i+j)%2) className="white";
    else className="black";
    str += '<div class =' + className +'></div>';
  }
}
wrap.innerHTML = str;       //html을 추가할 수 있는 명령어(innerTEXT라고 문자를 추가해 주는 명령어도 존재)

// 이벤트 수행시켜주기
document.addEventListener("DOMContentLoaded", function(event) {
  var divs = document.querySelectorAll('#wrap div');               //class를 정의할 때에는 .을 이용하고 id를 이용할 때에는 #을 이용 그 자체를 이용하는 거면 그냥 사용
  var precolor, preadress;

  function changeBg(event){
    if (preadress != null) {                                       //모든 경우를 실행시켜줌으로 backgroundColor에는 애초에 null이 들어가 있는데 그러지 않은 부분을 본래 배경색으로 고침
       preadress.style.backgroundColor = precolor;
     }
     //console.log(event.currentTarget.style.backgroundColor);   //이부분할때 값이 안뜨는데... 아마 본래 지정값으로 되서 그게 적히지 않은 고정값으로 인식하는 듯 싶다
     preadress = event.target;                                   //event가 실행된 곳이 적힘 event.currentTarget으로 하면 값이 안들어가있음
     precolor = event.currentTarget.style.backgroundColor;
     event.currentTarget.style.backgroundColor = 'red';          //색을 바꿔줌
  }
  for(var i=0; i < divs.length; i++) {
    divs[i].addEventListener('click', changeBg);
  }
});
