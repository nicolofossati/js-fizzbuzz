const containerDom = document.querySelector('.container');

for(let i=1; i<=100; i++){
    const boxDom = document.createElement('div');
    boxDom.classList.add('box');
    boxDom.classList.add('default_box_color');
    boxDom.append(i); 
    containerDom.append(boxDom);
}