class Form { 
  constructor() {
    this.title = createImg("assets/title.png")
    this.input = createInput("").attribute("placeholder","Enter your name")
    this.b = createButton("PLAY")
    this.g = createElement("h3")
    this.reset  = createImg("assets/reset.png")
  }
  r (){
    this.title.hide()
    this.input.hide()
    this.b.hide()
    this.g.hide()
  }
  //()=>{} Arrow Function
display(){
  this.title.position(120,100)
  this.title.size(1200,200)
  this.input.position(width/2 - 100 , height/2 - 10)
  this.input.style("background-color","transparent")
  this.b.position(width/2-40,height/2+40)
  
  this.reset.position(width-200,50) 
  this.reset.size(50,50)

  this.reset.mousePressed(()=>{
    db.ref("/").set({
      playerCount:0,
      gameState:0,
      players:{}
    }) 
    location.reload()

  })

  this.b.mousePressed(()=>{
    this.input.hide()
    this.b.hide()
    this.g.html("Hello "+this.input.value())
    this.g.position(width/2-100,height/2)
    playerCount = playerCount+1
    player.name=this.input.value()
    player.index = playerCount
    player.addplayer()
    player.uc(playerCount)
    player.gd();
  })
  }
}
