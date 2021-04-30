const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}

]
// function superbowlWin(record){
//   record.find()
// }const inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];
function superbowlWin(record) {


const result = record.find( ( record) => record.result=== 'W');
if(result){
  return result.year;
}else{
  return undefined;
}
}
