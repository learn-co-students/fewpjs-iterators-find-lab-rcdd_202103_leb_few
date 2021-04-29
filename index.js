const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
      let result=record.find(o=>o.result==="W");
      if(Boolean(result)===true)
      return result.year;

      //return undefined;

}
