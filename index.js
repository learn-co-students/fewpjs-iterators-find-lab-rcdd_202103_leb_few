const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let res = array.find(e => e.result === "W");
  let year;
  (res === undefined) ? year = res: year = res.year;
  return year;
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
console.log(superbowlWin(record))
