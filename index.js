const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record) {
    let winner = record.find(winner => winner.result === "W");
     return winner ? winner.year : undefined
}
