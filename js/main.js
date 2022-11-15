function randomNumber(min , max){
    let random = Math.floor(Math.random() * ((max + 1) - min) )+ min;
    return random;
}
setTimeout(function(){
    outputHtml.innerHTML='';
},30000)

setTimeout(function(){
    let count = 0;
    for(let i=0 ; i < 5 ;i++){
       let userNumber = parseInt(prompt('inserisci numeri che hai visto'))
       console.log(userNumber)
       userList.push(userNumber);
       if(numbers.includes(userNumber)){
        count++;
        correctNum.push(userNumber);
    }
    }
    if(count!==0){
        alert('hai indovinato la bellezza di....'+count+' numeri !')
        alert('ecco i numeri che hai indovinato...'+correctNum)
    }else{
        alert('non hai indovinato nessun numero , ritenta')
    }
},31000)

const outputHtml = document.getElementById('output');
let numbers=[];
let userList = [];
let correctNum = []
while(numbers.length < 5 ){
    let number = randomNumber(1 , 100);
    if (!numbers.includes(number)){
        numbers.push(number);
    }
}
outputHtml.innerHTML = `Simon say : ${numbers}`;
console.log(correctNum)
console.log(numbers)