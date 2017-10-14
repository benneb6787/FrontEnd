var startdate = 20170801;
var enddate = 20171013;
var url = 'http://movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate='+startdate+'&endDate='+enddate+'&pageSize=10&pageNo=';

var info = document.getElementById('info')
var str = '';

getJSON(url, done);

function done(result){
  console.log(result);

  for(var i=0; i < result.data.length; i++){
    str += '<h4><'+startdate + '~'+ enddate+'></h4>';
    str += '<h2>'+result.data[i].rank.ranking+'. '+result.data[i].titleKo+'</h2>';
    str += '<img src='+result.data[i].photo.fullname+' width="100">';
    str += '<h4>점유율 : <font color = "blue">'+result.data[i].rank.marketShare+'</font></h4>';
    str += '<h4>평점 : <font color = red>'+result.data[i].moviePoint.inspectPointAvg+'</font></h4>';
    str += '-------------------------------------------------------------------------------------------';
  }

  info.innerHTML = str;
}
