var numofbuttons=document.querySelectorAll("button").length;
for(i=0;i<numofbuttons;i++){
    document.querySelectorAll("#buttons")[i].addEventListener("click",function(){
        var buttonclicked=this.innerHTML;
        makeSound(buttonclicked);
        buttonAnimation(buttonclicked);
    });

}
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
    buttonAnimation(event.key);
  
  });
function makeSound(key) {

    switch (key) {
      case "k":
        var cat = new Audio("sounds/kitty.wav");
        cat.play();
        break;
      case "s":{
        var sheep=new Audio("sounds/sheep.wav");
        sheep.play();
        break;
      }
      case "d":
        var dog=new Audio("sounds/dog.wav");
        dog.play();
        break;
      
      case "h":
        var horse=new Audio("sounds/horse.wav");
        horse.play();
        break;
      
      case "c":{
        var cow=new Audio("sounds/cow.wav");
        cow.play();
        break;
      }
    }
}
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);


}


      
 

