// console.log(document.title);
// document.title = 123;

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var mainHeader = document.getElementById('addItem');

// console.log(headerTitle.innerText);
// console.log(headerTitle.textContent);

// header.style.borderBottom = 'solid 3px #000'
// mainHeader.style.fontWeight ='bold';
// mainHeader.style.color = 'green';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Blackberry';
items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';
}
