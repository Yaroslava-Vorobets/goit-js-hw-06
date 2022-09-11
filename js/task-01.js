'use strict';
 
const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`)

const items = document.querySelectorAll('.item')

items.forEach((item) => {   
const category = document.querySelector('h2')
console.log(`Category:`, item.firstElementChild.textContent);

const elements = item.querySelectorAll('li');  
console.log(`elements:`, elements.length);
})









 


