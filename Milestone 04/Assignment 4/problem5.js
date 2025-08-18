function  resultReport(marks) {
          // You have to write your code here
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
// console.log(resultReport([]))

