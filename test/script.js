let slide = document.getElementsByClassName('card');
let index = 0

setInterval(
    ()=>
{
    const element = slide[index];
    
    element.style.marginLeft = '-' + 20 +'%'
    index++
    
},500)

