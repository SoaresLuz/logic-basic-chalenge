let heros = [
["Louis", 500],
["Rose", 1800],
["Feldon", 4500], 
["Gladius", 6700], 
["Mad John", 7250], 
["Linda", 8800],
["Arthur", 9300], 
["MC Marcinho", 15400]]


for(let i=0; i<8; i++){
    if(heros[i][1]<=1000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in iron rank")
    }
    else if(heros[i][1]>1000 && heros[i][1]<=2000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in bronze rank")
    }
    else if(heros[i][1]>2000 && heros[i][1]<=5000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in silve rank")
    }
    else if(heros[i][1]>5000 && heros[i][1]<=7000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in gold rank")
    }
    else if(heros[i][1]>7000 && heros[i][1]<=8000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in platinum rank")
    }
    else if(heros[i][1]>8000 && heros[i][1]<=9000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in ascending rank")
    }
    else if(heros[i][1]>9000 && heros[i][1]<=10000){
        console.log("The hero who goes by the title "+heros[i][0]+" is in imortal rank")
    }
    else{
        console.log("The hero who goes by the title "+heros[i][0]+"is in radiant rank")
    }
    
}