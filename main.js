let menu = document.querySelector('.menu')
let row = document.querySelector('.row')
const getProducts = (category) => {
  fetch(`https://dummyjson.com/products/${category === "all" ? "" : "category/" + category}`)
    .then((res) => res.json())
    .then((res) => {
      res.products.forEach((item) => {
        // let images = "";
        // item.images.forEach((img) => {
        //   images += `<img src="${img}" class="card__image" alt="">`;
        // }); 

        // ${images} - вывод скриншотов, разместить в любом месте внутри дива
        row.innerHTML += `
          <div class="card">
          <img class="card__img" src="${item.thumbnail}" alt="">
            <h2 class="card__title">${item.title}</h2>
            <p class="card__subtitle">${item.description}</p>
            <p class="card__category">Категория:${item.category}</p>
            <p class="card__price">Цена: ${item.price}</p>
            <p class="card__rating">Рейтинг: ${item.rating}</p> 
            <p class="card__stock">Голосов: ${item.stock}</p>
            </div>
          </div>
        `;
      });
    });
}
getProducts('all')
const getCategories = () => {
    fetch('https://dummyjson.com/products/categories')
.then((res) => res.json())
.then((res) => { res.forEach((item) => {
    menu.innerHTML += `<li class='menu-item'>${item}</li>`
})
let menuItems = document.querySelectorAll('.menu-item')
Array.from(menuItems).forEach((item) => {
    item.addEventListener('click', () => {
        row.innerHTML = ""
        if(item.textContent === 'All') {
          getProducts('all')
          } else {
          getProducts(item.textContent)
          }
      })
    })
  })
}
getCategories()
getCategories()