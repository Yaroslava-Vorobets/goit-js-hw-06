const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulList = document.querySelector('.gallery')

const listItems = images.map(({ url, alt }) => {
  return `<li"><img class="animals" src="${url} " alt="${alt}"></li>`
});

let markup = listItems.join('')
console.log(markup)

ulList.insertAdjacentHTML('beforeend', markup)




// const ulList = document.querySelector('.gallery')

// const listItems = images.map(({ url, alt }) => {
// const liRef = document.createElement('li');
// const imageEl = document.createElement('img');
// imageEl.src = url
//   imageEl.alt = alt
//   imageEl.classList.add("animals")
  
// liRef.append(imageEl)
// ulList.append(liRef)
//   return liRef
// })

// ulList.append(...listItems)
// console.log(ulList)