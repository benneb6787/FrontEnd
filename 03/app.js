// var log = document.getElementById('log');
// //debugger                      //멈춰주는 명령어
// console.log(log)
// log.innerHTML = '안녕';         //동적(원래 hello world가 있는 상태인데 빠르게 안녕으로 바뀜)


// var log = document.getElementById('log');
// console.log(log)
// var a = document.querySelectorAll('#log a');
// console.log(a);                                //이 경우는 어떤 배열을 갖고 있는지 출력
// var a = document.querySelectorAll('#log a');   //이런 메소드를 사용할 때에는 배열을 이용
// console.log(a[0], a[1]);



// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);

// log.innerHTML += '<div style="color:red">hello</div>';   //위에 한 부분과 같은것


// window.onload=function(){          //lond앞에 on이 붙여야 실행이 가능(예전에 썼던 방식)
//     alert("load");                 //2개가 실행되면 한개는 묻힘 밑에는 정상적으로 작동
// };

// window.addEventListener('load', function(){     //이것은 순서대로 실행됨
//     alert("load1");
// });
// window.addEventListener('load', function(){
//     alert("load2");
// });


// var log = document.getElementById('log');
//
// function printLog(event){
//   console.log('log!!!')
//   //debugger;
// }
// log.addEventListener('click', printLog) //현재 출력된 요소를 클릭하면 console창에 출력됨


document.addEventListener("DOMContentLoaded", function(event) {
  var divs = document.querySelectorAll('#wrap div');
  // console.log(divs);                 //제대로 된 주소를 갖고왔는지 확인

  function changeBg(event){
    console.log('changeBg');

    // divs[1].style.backgroundColor = 'blue';
    // console.log(event.currentTarget);        //현재의 누른 곳을 알려주는 커맨드
    event.currentTarget.style.backgroundColor = 'blue';       //색바꾸기

  }
  for(var i=0; i < divs.length; i++ ) {
    divs[i].addEventListener('click', changeBg)
  }
});
