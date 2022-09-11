const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liElem = document.createElement('li');
liElem.classList.add("item");
liElem.textContent =  `${ingredients[0]}`,
  console.log(liElem);
  
const newlistElements = []

ingredients.map((ingredient) => {
liElem.classList.add("item");
liElem.textContent =  `${ingredients[0]}`,
  console.log(ingredient);
  return newlistElements.push(liElem)
})

//  const markup =  ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
//   console.log(markup);

 
