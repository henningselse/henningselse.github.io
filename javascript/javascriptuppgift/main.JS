
document.write("<h1> Du vann! </h1>");

let answer = Math.floor(Math.random() * 20) +1;
let incorrect =true;
while(incorrect){
    let svar = Number(prompt("gissa ett tal mellan 1 och 20"));

    if(svar>20){
        alert("Mellan 1 och 20 sa jag!");
    }

    else if(svar>answer){
        alert("för högt,testa igen");
    
    }
    else if(svar<answer){
        alert("för lågt, testa igen!");
    }
    else if(svar === answer){
        alert("du vann!");
        incorrect =  false;

    }

else{
    alert("du suger");
}
}



