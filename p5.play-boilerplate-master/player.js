class Player{
constructor(){
this.index=0;
this.health=100
this.chakra=10;
this.laser1x=0;
this.laser2x=0;
}
getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
     health:this.health,
     chakra:this.chakra,
     laser1x:this.laser1x,
     laser2x:this.laser2x
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    
    })
  }




}