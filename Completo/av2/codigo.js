function voga(){
    let vo = ['a', 'e', 'i', 'o', 'u'];
    let str = document.getElementById("texta").value;
    let str1 = str.toString();
    str1 = str1.toLowerCase();
    var k = 0;


    for (i = 0; i < str1.length; i++ ){
        if(vo.indexOf(str1[i]) != -1){
            k++
        }
    }
    alert("o numero de vogais sao "+k);
}
