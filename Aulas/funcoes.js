/*function parimpar(n) {
    if(n %2 == 0){
        return "Par";
    } else {
        return "Impar";
    }
    
}

console.log(parimpar(22));


function somar(n1=0, n2=0){
    return n1 + n2;
}



console.log(somar(2, 4))

let v = function (x) {
    return x*2;
}

console.log(v(22))


function fatorial(n) {
    var fat = 1;

    for(let c = n; c > 1; c-- ){
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5));
*/

 //RECURSIVIDADE
 
 function fatorial1(n){
    if(n == 1){
        return 1;
    }else{
        return n * fatorial1(n-1);
    }

 }

 console.log(fatorial1(5));