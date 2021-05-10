const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record) {
    let winner = record.find(w => w.result === "W");
     if (winner){
       return winner.year;
     } else return undefined;
}
