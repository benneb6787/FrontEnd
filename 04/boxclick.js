var a = document.getElementById('score');
var b = document.getElementById('level');
var c = document.getElementById('miss');
var d = document.getElementById('misstotal');
var box = document.getElementById('wrap3');
var lco, rco;
var score = 0, level = 1, miss = 0, misstotal = 10, sec = 1500, change = 0, turn = 0, levelup = 5;

a.innerHTML=score;
b.innerHTML=level;
c.innerHTML=miss;
d.innerHTML=misstotal;

setInterval(function(){
  turn++;
  if(change == 0){        //아무것도 눌리지 않았을 경우 change = 0이 되서 miss를 증가시켜 줌
      miss++;
      c.innerHTML=miss;
  }

  if(score == levelup){   //같은 level에서 miss될 경우 level이 오르지 않게 하기 위해 levelup을 만듦
    level++; misstotal = misstotal - 2; sec = sec - 130; miss = 0; levelup += 5;
    b.innerHTML=level;
    c.innerHTML=miss;
    d.innerHTML=misstotal;
  }

  if(miss == misstotal + 1) {
    alert("GAME OVER");
    reset();
  }

  if(level == 6){         //최대 level은 5까지!
    alert("Congratulation");
    reset();
  }

  lco = Math.floor(Math.random()*200) + 150;
  rco = Math.floor(Math.random()*1500) + 150;
  box.style.backgroundColor = 'red';
  box.style.margin = lco+' '+rco;
  change = 0;
  console.log(turn, miss, score);
}, sec);                  //level이 올라갈 때마다 시간이 줄어들게 하기위해 sec을 만듦

function reset(){         //승리하거나 실패 시 처음부터 다시 하도록 설정
  count = 0; score = 0; level = 1; miss = 0; misstotal = 10; sec = 1500;
}

document.addEventListener('mousedown', function(event) {
  if(event.target.id == "wrap3" && score < (turn - miss + 1)){      //연속적인 클릭을 방지하기 위해 turn을 사용
    box.style.backgroundColor = 'blue';
    score++;
    change = 1;
    a.innerHTML=score;
  }
});
document.addEventListener('mouseup', function(event) {            //마우스를 누르고 땠을 경우 다시 빨간색으로 돌아옴으로 이벤트를 발생시킴
  if(box.style.backgroundColor = 'blue') {box.style.backgroundColor = 'red';}
});
