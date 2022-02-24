var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//adding item
function addItem(e){
    e.preventDefault();

    //get input value

    var newItem = document.getElementById('item').value;

//creat new element
var li = document.createElement('li');
//add class
li.className = 'list-group-item';
//add text node
li.appendChild(document.createTextNode(newItem));

//delete button
var deleteBtn = document.createElement('button'); 

//class
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//text node
deleteBtn.appendChild(document.createTextNode('X'));

var editBtn = document.createElement('button');

editBtn.className = 'float-right';


editBtn.appendChild(document.createTextNode('Edit'));

li.appendChild(editBtn);

//append button
li.appendChild(deleteBtn);
//append li to list
itemList.appendChild(li);
}

//remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?? You Want To Remove the Item?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
}

//filter item function
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

}