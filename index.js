const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"},
  {year: "2013", result: "L"},
  {year: "2012", result: "W"},
  {year: "2015", result: "N/A"} ]

function superbowlWin (record){
  let result = record.find((rec)=> rec.result === 'W');
  if (result){
    return result.year;
  }else {
    return undefined;
  }
}
