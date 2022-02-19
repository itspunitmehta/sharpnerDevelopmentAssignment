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

//GetElementByClass

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Blackberry';
items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'red';
}

//getElementByTag
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Redmi';
// li[2].style.backgroundColor = 'red';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
//     li[i].style.color = 'green';
// }
