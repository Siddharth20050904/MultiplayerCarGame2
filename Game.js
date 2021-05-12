class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      //player.getCount();
      var playerCountRef = database.ref('playerCount').once("value");
      if(playerCountRef.exist()){
        playerCount = playerCountRef.val();
        player.getCount(); 
      }
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
  }
}
