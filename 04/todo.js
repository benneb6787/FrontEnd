var list = document.getElementById('todolist');
var content = document.getElementById('todoString');

content.addEventListener('keyup', function(event){
  if(event.keyCode == 13) {     //enter가 눌렸을 때
    var str = content.value;
    content.value='';
    list.innerHTML += ' \
      <li> \
        <button class = "delete" id = "del">×</button>\
        <input type="checkbox" class="toggle-checked">\
        <span class="text"> '+ str +' </span>\
      </li>';
  }
});

list.addEventListener('click', function(event){
  if(event.target.className == 'delete'){
    event.target.parentElement.remove();
  }
});
