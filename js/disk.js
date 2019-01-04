class Disk {
  constructor (posX, posY){

    this._posX = posX;
    this._posY = posY;
    this._radius = this.generateRandRadius();
    this._color = this.generateRandColor();

  }

  drawDisk(context){
    context.beginPath();
    context.arc(this._posX, this._posY, this._radius, 0, Math.PI*2);
    context.fillStyle = this._color;
    context.fill();
    context.closePath();
  }

  generateRandRadius(){
    let randRadius = RandNumbers.generateRandDigit(5, canvasWidth/2-canvasBorderWidth/2);
    return randRadius;
  }
  generateRandColor(){
    let color = 'rgba(';
    for(let i=0; i<3;i++){
      let currentElementInrgba = RandNumbers.generateRandDigit(0, 255);
      color += currentElementInrgba;
      color += (i<2? ",":this.generateRandOpacity());//pour ajouter des virgules après chaque element et la valeur d'opacité après  le dernier
    }
    showTests( "defined rgba value is " + color);
    return color;
  }
  generateRandOpacity(){
    let opacity = ", ";
    // opacity += 0.5;
    opacity += RandNumbers.generateRandFloat(0.01, 0.7, 2);
    opacity += ")";
    return opacity;
  }

}
function createNewDisk(context, posX, posY){
  // let tailleBalle = DiskRandomValueGenerator.generateRandRadius();
  // let color =
  for(let i=0;i<50;i++){
    let newDisk = new Disk(posX, posY);
    // showTests(newDisk._posX, "created new disk");
    newDisk.drawDisk(context);
  }
}
