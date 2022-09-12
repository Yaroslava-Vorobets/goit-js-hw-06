const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomanos",
  "Herbs",
  "Condiments",
];


const list = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
const liElem = document.createElement('li');
liElem.classList.add("item");
liElem.textContent = `${ingredient}`;
    
  return liElem
})

 list.append(...elements); 
 
 console.log(elements)
