const categoriesRef = document.querySelector('#categories');
const categoryRef = document.querySelectorAll('.item');

const numberOfCategories = (categories) => {
    console.log('Number of categories: ', categories.children.length);
    console.log('');
}

const itemsLog = (item) => {
    item.forEach(category => {
        console.log('Category: ', category.firstElementChild.textContent);
        console.log('Elements : ', category.lastElementChild.children.length);
        console.log('');
    })
}

numberOfCategories(categoriesRef);
itemsLog(categoryRef);