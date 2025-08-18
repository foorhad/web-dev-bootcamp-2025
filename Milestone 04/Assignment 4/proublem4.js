function  isSame(arr1 , arr2 ) {
          // You have to write your code here
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
