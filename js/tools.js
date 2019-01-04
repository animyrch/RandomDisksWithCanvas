class RandNumbers{
  static generateRandDigit(min, max){
    let randNumber = Math.floor(Math.random() * max) + min;
    return randNumber;
  }
  static generateRandFloat(min, max, digitsAfterDot){
    let randFloat = (Math.random() * (min - max) + max).toFixed(digitsAfterDot);
    return randFloat;
  }
}

/* TESTS */
//variables
var testNumber = 1;
//functions
function showTests(testElement, string = testNumber){
  // console.log("test - "+string+": "+testElement);
  // testNumber++;
}
