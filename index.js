const testVar = {}

function testFunc() {
  return "hi"
}
superbowlWin = (arrayofobjects) => {
    let result = arrayofobjects.find( arrayofobjects => arrayofobjects.result === "W")
    return !!result ? result.year : undefined
}
