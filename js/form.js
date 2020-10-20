class Form {
    constructor(){
      this.title=createElement('h2');
      this.input=createInput("Name:");
      this.submit=createButton('sumbit my name');

    }
    display(){
      this.title.html("Multiplayer Car Racing Game");
      this.title.position(400,100);
      this.input.position(500,300);
      this.submit.position(500,350);
      this.submit.mousePressed(()=>{
          this.input.hide();
          this.submit.hide();
          var name=this.input.value();
          console.log(name);
      })

    }
}