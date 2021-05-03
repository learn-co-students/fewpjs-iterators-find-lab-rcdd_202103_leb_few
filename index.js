const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]
function superbowlWin(arr){
let y = arr.find(s => s.result === "W" )
return y? y.year : undefined;
}
superbowlWin(record);
