var list = document.getElementById('list')
var str = '';
var pagesize = 10;     //보여줄 페이지 수
var page = 1;          //현재 페이지
var url = 'http://1boon.kakao.com/ch/trending.json?pagesize='+pagesize+'&page=';    //초기 ui
getJSON(url, trend);

function trend(result){         //트렌드가 눌렸을 경우 발생하는 ui
  if(clickcheck == 1)str = '';
  list.innerHTML = str;
  for(var i=0; i < pagesize; i++){
    str += '<h3>'+result.data[i].title+'</h3>'
    str += '<img src='+result.data[i].img+' width="150"><br>'
    str += '<h4><a href="http://1boon.kakao.com/'+result.data[i].path+'">바로보기!!</a><h4>'
    str += '<h4>조회수 : '+result.data[i].totalView+'</h4> <br><br>'
  }
  list.innerHTML = str;
}


function iss(result){           //이슈가 눌렸을 경우 발생하는 ui
  if(clickcheck == 1)str = '';
  list.innerHTML = str;
  for(var i=0; i < pagesize; i++){
    str += '<h3>'+result.data[i].title+'</h3>'
    str += '<img src='+result.data[i].img+' width="150"><br>'
    str += '<h4><a href="http://1boon.kakao.com/'+result.data[i].path+'">바로보기!!</a><h4>'
    str += '<h4>조회수 : '+result.data[i].totalView+'</h4> <br><br>'
  }
  list.innerHTML = str;
}


function ent(result){           //엔터가 눌렸을 경우 발생하는 ui
  if(clickcheck == 1)str = '';
  list.innerHTML = str;
  for(var i=0; i < pagesize; i++){
    str += '<h3>'+result.data[i].title+'</h3>'
    str += '<img src='+result.data[i].img+' width="150"><br>'
    str += '<h4><a href="http://1boon.kakao.com/'+result.data[i].path+'">바로보기!!</a><h4>'
    str += '<h4>조회수 : '+result.data[i].totalView+'</h4> <br><br>'
  }
  list.innerHTML = str;
}
