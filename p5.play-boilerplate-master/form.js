class Form{
constructor(){
this.button=createButton("START");
this.title = createElement("h1");
this.greeting=createElement("h2")
this.reset = createButton("reset")
this.instructions = createDiv()
this.button2 = createButton("PLAY")

}
hide(){
    this.greeting.hide()
    this.button2.hide()
}
display(){
    this.button2.hide();
this.button.position(windowWidth/2,200)
this.button.mousePressed(()=>{
    this.button.hide();
    this.button2.show();
  

this.button2.position(windowWidth/2,200)
this.instructions.html("fight your opponent");
this.instructions.position(windowWidth/2,400);

   



})
this.button2.mousePressed(()=>{
    this.instructions.hide();
    this.button2.hide();
    
   
    playerCount+=1;
    player.index = playerCount;
   console.log(playerCount)
    player.updateCount(playerCount);
if (player.index===1){
player.name = "NARUTO"
}
else if(player.index===2){
    player.name = "SASUKE"
}
    player.update();
    this.greeting.html("Hello " + player.name)
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    })
    
this.reset.position(windowWidth-50,50)
this.reset.mousePressed(()=>{
database.ref("/").update({
    playerCount:0,
    gamestate:0,
    players:null
})





})




}


}