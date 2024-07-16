function getDiference(W, L){
    let diference = W-L
    return diference
}

function getRank(W, L){
    let diff = getDiference(W, L)
    let rank = ""
    if(diff<=10){
        rank="iron"
        return rank
    }
    else if(diff>10 && diff<=20){
        rank="copper"
        return rank
    }
    else if(diff>20 && diff<=50){
        rank="silver"
        return rank
    }
    else if(diff>50 && diff<=80){
        rank="gold"
        return rank    
    }
    else if(diff>80 && diff<=90){
        rank="diamon"
        return rank    
    }
    else if(diff>90 && diff<=100){
        rank="legendary"
        return rank    
    }
    else{
        rank="imortal"    
        return rank
    }
}
console.log("The hero has a victory balance of "+getDiference(35, 4)+", being in the ranking"+getRank(35, 4))