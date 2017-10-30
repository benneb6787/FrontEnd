var menu = document.getElementById('menu');
var list = document.getElementById('list');
var btn = document.getElementById('more');
var init = menu.querySelectorAll('li');
var loading = document.getElementById('loading');
var url = '';
var now = 1;          //menu가 눌러진 부분을 알기위한 변수
var clickcheck = 1;   //새로운 메뉴가 눌릴 경우를 위한 변수

menu.addEventListener('click', function(event){     //menu부르는 부분
  page = 1;
  clickcheck = 1;
  for(var i=0; i < init.length; i++){
    init[i].className = '';
  }
  event.target.className = 'active';    //눌러진 부분의 classname이 active가 되게

  if(event.target.id == 'trending'){
    url ='http://1boon.kakao.com/ch/trending.json?pagesize='+pagesize+'&page='+page;
    getJSON(url, trend);
    now = 1;
  }
  if(event.target.id == 'issue'){
    url = 'http://1boon.kakao.com/ch/issue.json?pagesize='+pagesize+'&page='+page;
    getJSON(url, iss);
    now = 2;
  }
  if(event.target.id == 'enter'){
    url = 'http://1boon.kakao.com/ch/enter.json?pagesize='+pagesize+'&page='+page;
    getJSON(url, ent);
    now = 3;
  }
});

btn.addEventListener('click', function(event){      //더보기 버튼 누르는 부분
  clickcheck = 2;
  if(now == 1){
    page++;
    url = 'http://1boon.kakao.com/ch/trending.json?pagesize='+pagesize+'&page='+page;
    getJSON(url, trend);
  }
  if(now == 2){
    page++;
    url = 'http://1boon.kakao.com/ch/issue.json?pagesize='+pagesize+'&page='+page;
    getJSON(url, iss);
  }
  if(now == 3){
    page++;
    url = 'http://1boon.kakao.com/ch/enter.json?pagesize='+pagesize+'&page='+page;
    getJSON(url, ent);
  }
});

window.addEventListener('load', function(event){      //로딩 마크업부분은.... 어떻게 하는지 모르겠음...
  console.log("삽입완료");
})
