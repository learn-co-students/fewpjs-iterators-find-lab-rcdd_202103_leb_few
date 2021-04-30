/*const testVar = {}

function testFunc() {
  return "hi"
}*/

function superbowlWin(record) {
  const yearWon = record.find(({ result }) => result === "W");
  if (yearWon) {
    return yearWon.year
  } else {
    return undefined
  }
}
