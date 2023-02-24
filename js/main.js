const containerDom = document.querySelector('.container');

for(let i=1; i<=100; i++){
    const boxDom = document.createElement('div');
    boxDom.classList.add('box');
    boxDom.classList.add('default_box_color');
    boxDom.append(i); 
    containerDom.append(boxDom);

    if((i%3 == 0) && (i%5 == 0)){
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
    }
}