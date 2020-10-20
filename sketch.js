
var form;

function setup(){
    createCanvas(500,500);
    db=firebase.database();
    form=new Form();
   
    

}

function draw(){
    background("white");
    form.display();
}

