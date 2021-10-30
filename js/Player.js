class Player {
  constructor() {
    this.name=null
    this.index=null
    this.positionX=0
    this.positionY=0
    this.rank = 0
    this.s = 0
  }
  addplayer(){
    if(this.index===1){
      this.positionX=width/2-150
    }else{
      this.positionX=width/2+150
    }
    db.ref("players/player"+this.index).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY,
      rank:this.rank,
      score:this.s ,
    })
  }
  //reading playerCount values from the database
  gc (){
    db.ref("playerCount").on("value",data=>{
      playerCount=data.val()
    })
  }
  //write the playerCount value to the database
  uc(count){
    db.ref("/").update({
      playerCount:count
    })
  }

  gd (){
    db.ref("players/player"+this.index).on("value",data=>{
      var ps = data.val()
      this.positionX = ps.positionX
      this.positionY = ps.positionY

    })
  }
  //write the playerCount value to the database
  ud(){
    db.ref("players/player"+this.index).update({
      positionX:this.positionX,
      positionY:this.positionY,
      rank:this.rank,
      score:this.s
    })
  }


  //collects all the players information at a time
  static gpi (){
    db.ref("players").on("value",data=>{
      players = data.val()
    })
  }

}
