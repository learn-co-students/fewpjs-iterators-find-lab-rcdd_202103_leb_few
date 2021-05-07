const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
    let winner = record.find(w => w.result === "W");
     return winner ? winner.year : undefined
}
