class character {
  constructor(name, nickName, life, attack) {
    this.name = name;
    this.nickName=nickName;
    this.life =  life;
    this.attack = attack;
  }
}


var user;
var comp;
var wins=0;
var button=0; 
var han= new character("Han Solo","han",285,20);
var luke= new character("luke sky walker","luke",250,15);
var darth= new character("Darth Bader","darth",300,25);
var storm= new character("Storm Trhoper","storm",150, 10);


$(document).ready(function(){

  $("#attack").on("click",function(){
   user.life=user.life-comp.attack;
   comp.life=comp.life-user.attack;
   user.attack=user.attack+8;
   $("#userLife").text(user.life);
   $("#compLife").text(comp.life);
   $("#userAttack").text(user.attack);
   
  if(comp.life<=0){
    wins++
    if (wins!==3){
      $("#"+comp.nickName+"").hide(); 
      $("#compLife").text("");
      $("#compAttack").text("");
      $("#div2").attr("data-active", "0");
      alert("Drag another opponent");
    }else{
      if(!alert('You have Won the turnamet thanks for playing')){
        window.location.reload();
      }
    }

  }else if (user.life<=0){
    if(!alert('You have been defeted')){
      window.location.reload();
    }
  }
    


  });

});


function allowDrop(ev) {
  ev.preventDefault();

}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  var flag = $("#"+ev.target.id+"").attr("data-active");
  if (flag == 0) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $("#"+ev.target.id+"").attr("data-active", "1");
    $("#div"+data+"").hide(); 
    if(ev.target.id==="div1"){
       user=window[data];
       $("#userLife").text(user.life)
       $("#userAttack").text(user.attack);
       button++;
    }else{  
       comp=window[data];
       $("#compLife").text(comp.life)
       $("#compAttack").text(comp.attack);
       button++;
    }
    if(button===2)
      $("#attack").attr("disabled", false);
  }
}
