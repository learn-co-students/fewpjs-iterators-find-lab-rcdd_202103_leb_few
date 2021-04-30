




function superbowlWin(record) {


   let result=record.find(o => o.result === 'W');
   if (Boolean(result)===true){
    let y=result.year;
     return y;
   }

  }
