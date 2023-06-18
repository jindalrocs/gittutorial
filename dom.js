//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.all);
//document.all[10].textContent = 'hello';
//console.log(document.forms);

//get element by ID
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'good bye';
//headerTitle.innerHTML ='<h3>hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
var header =document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

//////GET ELEMENTS BY CLASS

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent ='hello 2';

let i=0;
for( i=0; i<4;i++)
{
    items[i].style.fontWeight = 'bold';
}
items[2].style.backgroundColor ='green';

//items[4]= 'Bold';
var additem = document.getElementsByClassName('title');
console.log(additem);
additem[0].style.fontWeight = 'bold';
additem[0].style.color = "green";


console.log(items[1]);