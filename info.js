var MusicNote = document.getElementById("MusicNote");
var VideoGames = document.getElementById("VideoGames");
var BikeRiding = document.getElementById("BikeRiding");

var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");

MusicNote.addEventListener("click", function(){
    info1.innerHTML = "Because its a stress reliever";
    info2.innerHTML = "I get to express my feelings";
    info3.innerHTML = "Music has been one of my big passion since i was a little kid.";
});
                       
VideoGames.addEventListener("click", function(){
    info1.innerHTML = "It is a very interesting game.";
    info2.innerHTML = "It makes my mind work and think about tactics to win.";
    info3.innerHTML = "I like to play the game so I can unlock things by doing challenges";
});
    
   
BikeRiding.addEventListener("click", function(){
    info1.innerHTML = "I like to roam around the city on my bike";
    info2.innerHTML = "I like to listen to music while i ride.";
    info3.innerHTML = "I can costumize my bike to my own liking.";
});