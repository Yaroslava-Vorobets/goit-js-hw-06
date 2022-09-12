
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(textRef.style)

textRef.style.fontSize =` ${inputRef.value}px`

const handletext = (event) => {
textRef.style.fontSize =` ${event.target.value}px`
}

inputRef.addEventListener('input', handletext)