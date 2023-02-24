const containerDom = document.querySelector('.container');

for(let i=1; i<=100; i++){
    const boxDom = document.createElement('div');
    boxDom.classList.add('box');
    containerDom.append(boxDom);

    if((i%3 == 0) && (i%5 == 0)){ //se i è sia multiplo di 5 che di 3 
        boxDom.classList.remove('default_box_color');
        boxDom.classList.add('fizzbuzz_box_color');
        boxDom.innerHTML = "fizzbuzz";
    } else if(i%3 == 0){ // se i è multiplo di 3
        boxDom.classList.remove('default_box_color');
        boxDom.classList.add('fizz_box_color');
        boxDom.innerHTML = "fizz";
    } else if(i%5 == 0){ // se i è multiplo di 5
        boxDom.classList.remove('default_box_color');
        boxDom.classList.add('buzz_box_color');
        boxDom.innerHTML = "buzz";
    } else {
        boxDom.classList.add('default_box_color');
        boxDom.append(i);
    }
}

/* Non so se state leggendo il mio codice, ma ho letto adesso che ho svolto l'esercizio
partendo dal bonus pensando fosse l'esercizio stesso. Dunque lo lascio così ed eseguo 
adesso il programma svolto in console per completezza  */


for(let i=1; i<=100; i++){
    if((i%3==0)&&(i%5==0)){
        console.log("fizzbuzz");
    } else if(i%3==0){
        console.log("fizz");
    } else if(i%5==0){
        console.log("buzz");
    } else {
        console.log(i);
    }
}