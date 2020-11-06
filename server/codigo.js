function subtrair(){
    let var1 = document.getElementById("num1");
    let var2 = document.getElementById("num2");
    
    let n1 = Number(var1.value);
    let n2 = Number(var2.value);

    let sub = n1-n2;

    alert("A subtracao eh "+sub);
}
function dividir(){
    let var1 = document.getElementById("num1");
    let var2 = document.getElementById("num2");

    let n1 = Number(var1.value);
    let n2 = Number(var2.value);

    let div = n1/n2;

    alert("a divisao eh "+div);
}
function multiplicar(){
    let var1 = document.getElementById("num1");
    let var2 = document.getElementById("num2");

    let n1 = Number(var1.value);
    let n2 = Number(var2.value);

    let mult = n1*n2;

    alert("a multiplicao dah "+mult);
}
function confere(){
    let var1 = document.getElementById("num");

    let n1 = Number(var1.value);

    let conf = n1%2;

    if(n1 == 2){
        alert("o numero eh primo");
    }
    else{

        for(var i=2; i<n1; i++){
            conf = n1%i;

            if(conf == 0){
                alert("o numero nao eh primo");
                return;
            }
        }
        alert("o numero eh primo");
    }
}