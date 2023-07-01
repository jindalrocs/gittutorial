//travesing the node

var itemlist = document.querySelector('#items');
//parentNode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemlist.parentNode.parentNode);

//parentElement gives same result as that of parentNode


// childNodes or Children
//console.log(itemlist.childNodes);
//childnodes return spaces or line break as text in node list
console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemlist.firstChild);
//first element child
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello1';

//lastChild
console.log(itemlist.lastChild);
//last element child
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello1';

//next sibling
console.log(itemlist.nextSibling);
//next elementsibling
console.log(itemlist.nextElementSibling);

//preveous sibling 
console.log(itemlist.previousSibling);
//previous element sibling
console.log(itemlist.previousElementSibling);


//create div
var newdiv = document.createElement('div');
newdiv.className = 'hello';

//add id
newdiv.id = 'hello1'

//set attribute
newdiv.setAttribute('title','hello div');


//create text node
var newdivText = document.createTextNode('hello world');

newdiv.appendChild(newdivText);

var container = document.querySelector('header .container');
var h1 =document.querySelector('header h1');



// adding hello world before item one in item lister

//create div
//var newdiv1 = document.createElement('div');
//newdiv1.className = 'hello1';

//add id
//newdiv1.id = 'hello2'

//set attribute
//newdiv1.setAttribute('title','hello div');


//create text node
//var newdivText1 = document.createTextNode('hello world');

//newdiv1.appendChild(newdivText1);

//var container1 = document.querySelector('container .title');
//var h2 =document.querySelector('title li');




console.log(newdiv);
//console.log(newdiv1);
container.insertBefore(newdiv , h1);
//container.insertBefore(newdiv1 , h2);





var newli = document.createElement('li');
newli.className = 'list-group-item';
var newliText = document.createTextNode('hello world2');
newli.appendChild(newliText);
console.log(newli);


itemlist.innerHTML = newli.innerHTML + itemlist.innerHTML;
itemlist.innerHTML = '<li class="list-group-item">hello world1</li>' + itemlist.innerHTML;


