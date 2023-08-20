let input = document.querySelector('.input');
let button= document.querySelectorAll('button');

button.forEach(Element =>{
    Element.addEventListener('click',tar =>{
        if(Element.textContent === 'c')
            input.innerText = ''; 

        else if(Element.textContent === '=')
            input.innerText = eval(input.innerText); 

        else if(Element.textContent === '<')
            input.innerText = input.innerText.slice(0,-1);
       
        else{
        input.innerText += Element.textContent;
        input.scrollLeft = input.scrollWidth;}
    })
})







