let clickOnBtnStart = () => {

  manageButtons('start');
  diskCycleIntervalButons = setInterval(function (){createNewDisk(context, posX, posY);}, turnSpeed);
  diskCycleIntervals.push(diskCycleIntervalButons);
};
let clickOnBtnAccelerate = () => {
  turnSpeed *= 0.5;
  clickOnBtnStop();
  clickOnBtnStart();
  console.log(turnSpeed);
}
let clickOnBtnSlower = () => {
  turnSpeed *= 2;
  clickOnBtnStop();
  clickOnBtnStart();
  console.log(turnSpeed);
}
let clickOnBtnStop = () => {
  manageButtons('stop');
  diskCycleIntervalsLength = diskCycleIntervals.length;
  for(let i = 0; i<diskCycleIntervalsLength;i++){
    clearInterval(diskCycleIntervals[i]);
  }
};
let clickOnBtnClear = () => {
  location.reload();
};

let manageButtons = (clickedButton) => {

  switch (clickedButton) {
    case "start":
      btnStart.hide();
      btnStop.show();
      btnAccelerate.show();
      btnSlower.show();
      btnClear.hide();
      break;
    case "stop":
      btnStop.hide();
      btnClear.show();
      btnAccelerate.hide();
      btnSlower.hide();
      btnStart.show();
      break;
    default:

  }

}
