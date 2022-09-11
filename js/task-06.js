
const inputRef = document.querySelector('#validation-input')

const inputBlur = (event) => {
const { dataset, value } = event.target;
const requiredLength = Number(dataset.length);   

  if (requiredLength === value.length) {
    changeClass('valid', 'invalid', event.target);
  } else {
    changeClass('invalid', 'valid', event.target);
  }
};

function changeClass(add, remove, elem) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}

inputRef.addEventListener('blur', inputBlur)
console.log(inputBlur)