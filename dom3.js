var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var list = document.getElementsByClassName('list-group-item');


console.log(list);

 // Create del button element
 for (let i = 0; i < list.length; i++) {

 //adding edit nutton also
 var editBtn = document.createElement('button');


 // Add classes to del button

 //adding class of edit button
 editBtn.className = 'float-lg-right';


 editBtn.appendChild(document.createTextNode('Edit'));

 // Append button to li
 

 // Append button to li

 
   
 list[i].appendChild(editBtn);

  }

















// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var descr = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(descr));

  // Create del button element
  var deleteBtn = document.createElement('button');

  //adding edit nutton also
  var editBtn = document.createElement('button');


  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //adding class of edit button
  editBtn.className = 'float-lg-right';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  editBtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(description){
    var itemName = description.firstChild.textContent;
    var descrp = description.firstChild.nextSibling.textContent;
    //console.log(item);
    console.log(descrp);
    if(descrp.toLowerCase().indexOf(text)!=-1||itemName.toLowerCase().indexOf(text)!=-1){
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
}