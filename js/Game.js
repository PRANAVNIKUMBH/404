class Game {
  constructor() {
    this.l = createElement("h2")
    this.l1 = createElement("h2")
    this.l2 = createElement("h2") 
  }

  gs (){
    db.ref("gameState").on("value",data=>{
      gameState=data.val()
    })
  }
  //write the gameState value to the database
  us(count){
    db.ref("/").update({
      gameState:count
    })
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.gc()
    car1 = createSprite(width/2-150,height-150)
    car1.addImage(c1) 
    car1.scale=0.07
    
    car2 = createSprite(width/2+150,height-150)
    car2.addImage(c2) 
    car2.scale=0.07

    cars = [car1,car2]

    fg = new Group()
    cg = new Group()
    og = new Group()

    this.adds(fg,10 , f , 0.02)
    this.adds(cg,10 , c , 0.09)
    this.adds(og,10 , o , 0.04)
  }

  adds(g,num,img,s){
    for(var i = 0; i < num ; i++){
      var ob = createSprite(random(width/2-150,width/2+150),random(-height*4.5,height-100))
      ob.addImage (img)
      ob.scale = s
      g.add(ob)
    }
  }
  

  play(){
    form.r()
    Player.gpi()
    this.l.html("Leader Board")
    this.l.position(width/3-60,40)
    this.l1.position(width/3-60,40*2)
    this.l2.position(width/3-60,40*3)
    
    if(players!==undefined){
     background("red")
     image(t,0,-height*5,width,height*6) 
     this.ra()
     var index = 0 
     for (var i in players){
       index = index+1
       var x = players[i].positionX;
       var y = height - players[i].positionY;

       cars[index - 1].position.x = x;
       cars[index - 1].position.y = y;
       if (index===player.index){
         camera.position.y = cars[index - 1].position.y
       }
     }
     if (keyIsDown(UP_ARROW)) {
      player.positionY =player.positionY+ 10;
      player.ud();
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.positionY =player.positionY-  10;
      player.ud();
    }

    if (keyIsDown(LEFT_ARROW)&&player.positionX>width/3-50) {
      player.positionX =player.positionX-  5;
      player.ud();
    }

    if (keyIsDown(RIGHT_ARROW)&&player.positionX<width/2+250) {
      player.positionX =player.positionX+  5;
      player.ud();
    }
     drawSprites()
    }
  }

  ra(){
    var leader1,leader2
    var player = Object.values(players)
    leader1 = player[0].rank+"   "+player[0].name+"   "+player[0].s
    leader2 = player[1].rank+"   "+player[1].name+"   "+player[1].s
    this.l1.html(leader1)
    this.l2.html(leader2)
  }

}
