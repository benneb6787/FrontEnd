var memo = document.getElementById('memo');
var new_note = document.getElementById('new_note');
var note_store = document.getElementById('note_store');
var note_download = document.getElementById('note_download');
var note_about = document.getElementById('note_about');
var fullscreen = document.getElementById('fullscreen');
var about = document.getElementById('about');

memo.value = window.localStorage[memo];   //최초 진입 시 lacalstorage에 저장된 내용이 있다면 표시

new_note.addEventListener('click', function(event) {
  var check = window.confirm("정말로 삭제하시겠습니까?");  //삭제할 지에 대한 여부
  if(check == true){
     memo.value = null;
   }
});

note_store.addEventListener('click', function(event) {
  localStorage.setItem(memo, memo.value);   //localstorage에 저장
});

note_download.addEventListener('click', function(event) {
  var filesaver = require("file-saver");
  var blob = new Blob([memo.value], {type: "text/plain;charset=utf-8"});
  filesaver.saveAs(blob, 'memo.txt');
});

note_about.addEventListener('click', function(event) {
  about.innerHTML = "<p align = center>메모장입니다<br> 마음껏 입력하세요</p>";
});

fullscreen.addEventListener('click', function(event) {
  if(!memo.fullscreenElemnt){
    memo.documentElement.requestFullscreen();
  }
  else{
    if(memo.fullscreenElement){
      memo.exitFullscreen();
    }
  }
});
