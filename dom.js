console.log(document.title);
document.title = 123;

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
var mainHeader = document.getElementById('addItem');

console.log(headerTitle.innerText);
console.log(headerTitle.textContent);

header.style.borderBottom = 'solid 3px #000'
mainHeader.style.fontWeight ='bold';
mainHeader.style.color = 'green';
