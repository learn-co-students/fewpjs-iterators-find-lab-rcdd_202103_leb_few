const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let winObj = array.find(function(obj){
    return obj.result === "W";
  })
  if(winObj){
    return winObj.year
  } else{
    return undefined;
  }
}
