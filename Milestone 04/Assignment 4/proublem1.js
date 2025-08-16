function totalFine(fare){
    if(typeof fare==='string' || fare < 1 ){
        return 'invalid'
    }
        
    else{
        const fine = fare + fare *(20/100) + 30;
        return fine
    }
}
// console.log(totalFine("Gorib tai ticket katinai"))


