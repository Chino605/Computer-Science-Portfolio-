 var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

item1.addEventListener("click", function(){
    info1.innerHTML = "Because its a stress reliever";
    info2.innerHTML = "I get to express my feelings";
    info3.innerHTML = "";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "It is a very interesting game.";
    info2.innerHTML = "It makes my mind work and think about tactics to win.";
});
    
item3.addEventListener("click", function(){
    info1.innerHTML = "";
    info2.innerHTML = "";
});