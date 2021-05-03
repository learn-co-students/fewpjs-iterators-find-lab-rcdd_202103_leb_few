const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superbowls){
  let win = superbowls.find(superbowl => superbowl.result === "W")
// console.log(win);
  return win ? win.year : undefined;
}