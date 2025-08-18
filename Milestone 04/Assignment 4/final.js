function totalFine(fare){
    if(typeof fare==='string' || fare < 1 ){
        return 'Invalid'
    }
        
    else{
        const fine = fare + fare *(20/100) + 30;
        return fine
    }
}

function onlyCharacter(str) {
  if (typeof str === "string") {
    let str2 = "";
    for (let i of str) {
      if (i == " ") continue;
      else str2 += i.toUpperCase();
    }
    return str2;
  } else return "Invalid";
}

function bestTeam(player1, player2) {
  if (player1 === undefined || player2 === undefined) return "Invalid";

  let ans1 = player1.foul + player1.cardR + player1.cardY;
  let ans2 = player2.foul + player2.cardR + player2.cardY;

  if (ans1 < ans2) return player1.name;
  else if (ans2 < ans1) return player2.name;
  else return "Tie";
}

function  isSame(arr1 , arr2 ) {
      
          if(!Array.isArray(arr1) || !Array.isArray(arr2))return false;
          if(arr1.length === arr2.length){
                for(let i=0;i<arr1.length;i++){
                    if(typeof arr1[i] != typeof arr2[i])return false
                    if(arr1[i]!=arr2[i])return false
                }
                return true
            }
          else return false
}

function  resultReport(marks) {
   
        if(!Array.isArray(marks))return 'Invalid';
        let ob = {finalScore : 0, pass : 0, fail : 0}
        if(marks.length===0)return ob;
        let resultMarks = 0;
        for(let i=0;i<marks.length;i++){
            if(marks[i]>=40){
                ob.pass++;
                resultMarks += marks[i]
            }
            else {
            resultMarks += marks[i]    
            ob.fail++;
            }
        }
        let ans = resultMarks / marks.length
        ans = Math.round(ans) 
        ob.finalScore=ans;
      
        return ob; 
}


