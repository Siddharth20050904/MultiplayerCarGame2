class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement('h2');
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);

    button.mousePressed(()=>{

      this.input.hide();
      this.button.hide();

       player.name = this.input.value();
       playerCount +=1;
       player.updateCount(playerCount); 
       
     // playerCount+=1;
      //player.update(name)
      //player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(130, 160);
    });

  }
}
