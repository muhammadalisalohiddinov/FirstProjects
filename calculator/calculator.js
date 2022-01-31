let display = document.getElementById('inputField');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click', (number) =>{
        switch(number.target.innerText){
            case 'C':
                display.value = ''
                break;
            case '=':
                display.value = eval(display.value);
                break;
            default:
                display.value += number.target.innerText;
        }
    })
})