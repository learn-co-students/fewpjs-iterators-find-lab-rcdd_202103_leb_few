const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (arr) => {
  const winGame = arr.find(obj => obj.result === "W")
  if(!!winGame) {
    return winGame.year
  } else {
    return undefined
  }
}  
