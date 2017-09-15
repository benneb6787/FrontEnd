//입력받아 그 합을 구하자
var sum = 0;

while(true){
  var who = prompt("더할 숫자를 입력해주세요!");
  if(who == null) break;

  sum += parseInt(who, 10);
}
alert("숫자의 총합은: " + sum);
