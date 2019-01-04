
  /*==============================================*/
  /* =============== LES VARIABLES GLOBAUX =============== */
  /*==============================================*/
var canvasBorderWidth = 10;
var canvasWidth = window.innerHeight/1.25;
var canvasHeight = window.innerHeight/1.25;
let posX = canvasWidth/2;
let posY = canvasHeight/2;
let canvas = null;
let context = null;
//les variables d'addEventListener
let btnStart = null;
let btnAccelerate = null;
let btnStop = null;
let btnClear = null;
let btnSlower = null;
let diskCycleIntervals = [];
let turnSpeed = 1500;


$( document ).ready(function() {
  /*==============================================*/
  /* =============== LES VARIABLES =============== */
  /*==============================================*/

  // Les variables de canvas
  let canvas = document.getElementById("myCanvas");
  if(!canvas)
  {
      alert("Impossible de récupérer le canvas");
      return;
  }

  context = canvas.getContext("2d");
  if(!context)
  {
      alert("Impossible de récupérer le context");
      return;
  }
  context.canvas.width  = canvasWidth;
  context.canvas.height = canvasHeight;
  canvas.style.border = canvasBorderWidth + 'px solid teal';

  //définition des valeurs d'offset du canvas
  var canvasPosition = canvas.getBoundingClientRect();
  var canvasOffsetX = canvasPosition.x;
  var canvasOffsetY = canvasPosition.y;

  //les variables d'addEventListener
  btnStart = $('.btn-primary');
  btnStop = $('.btn-danger');
  btnAccelerate = $('.btn-warning');
  btnClear = $('.btn-success');
  btnSlower = $('.btn-info');

  /*==============================================*/
  /* =============== CODE PRINCIPAL =============== */
  /*==============================================*/

  btnStart.show();
  btnStart.click(clickOnBtnStart);
  btnStop.click(clickOnBtnStop);
  btnAccelerate.click(clickOnBtnAccelerate);
  btnSlower.click(clickOnBtnSlower);
  btnClear.click(clickOnBtnClear);
});
