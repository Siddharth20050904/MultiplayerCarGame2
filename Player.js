class Player{
    constructor(){

    }
    getCount(){
        var playerCount = database.ref('playerCount');
        playerCount.on("value", (data)=>{
            playerCount = data.val();
        })
    
    }
    updateCount(count){
        database.ref('/').update({
            'playerCount' : count
        })
    }
}