const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}
 

refs.input.addEventListener('input', onInputChange);
function onInputFocus (event) {
    console.log('event.currentTarget.value')
}

function onInputChange(event) {
    refs.span.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
         refs.span.textContent = 'Anonymous'
    }
}
console.log(refs.input);



