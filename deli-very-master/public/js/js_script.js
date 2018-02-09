function MenuItem(name, kCal, lactose, gluten, img) {
	this.name = name;
	this.kCal = kCal;
	this.gluten = gluten;
	this.lactose = lactose;
	this.img = img;
}

var burger0 = new MenuItem('The Fire Burger', '750 kCal', 'Contains lactose', 'Contains gluten','http://bk-apac-prd.s3.amazonaws.com/sites/burgerkingindia.in/files/VegWhopper-Thumb_0_0.png');
var burger1 = new MenuItem('Fried Turkey Burger', '600 kCal', 'Contains lactose', '', 'http://bk-emea-prd.s3.amazonaws.com/sites/burgerking.co.uk/files/BK_Angus_Burger_300x270px.png');
var burger2 = new MenuItem('A Double w/Cheese', '1800 kCal', 'Contains lactose', 'Contains gluten', 'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BUR2423D_Kings-Collection_PRODUCT_300x270_02%5B1%5D.png');
var burgers = [burger0, burger1, burger2];
var menu = document.getElementById("menu");

for (var burger of burgers)
{
	var box = document.createElement('div');
	var name = document.createTextNode(burger.name);
	var br = document.createElement('br');
	var img = document.createElement('img');
	var title = document.createTextNode(burger.name);
	var kCal = document.createTextNode(burger.kCal);
	var gluten = document.createTextNode(burger.gluten);
	var lactose = document.createTextNode(burger.lactose);
	var ul = document.createElement('ul');
	var li0 = document.createElement('li');
	var li1 = document.createElement('li');
	var li2 = document.createElement('li');
    var button = document.createElement('input');

	box.setAttribute('class','grid-item');
    button.setAttribute('type', 'checkbox');
    button.setAttribute('name', burger.name);
    button.setAttribute('class', 'checkbox');
	menu.appendChild(box);
    
	box.appendChild(title);
	img.setAttribute('src', burger.img);
	img.setAttribute('class', 'bold');
	box.appendChild(img);
	box.appendChild(ul);
	ul.appendChild(li0);
	ul.appendChild(li1);
	ul.appendChild(li2);
	li0.appendChild(kCal);
	li1.appendChild(gluten);
	li2.appendChild(lactose);
    box.appendChild(button);
}


function readvalues(){
var name = document.getElementById('fullname').value;
var email = document.getElementById('email').value;
//var street = document.getElementById('street').value;
//var house = document.getElementById('number').value;
var payment = document.getElementById('recipient').value;
//return [name,email,street,house,payment];
return [name,email,payment];
}


function displayvalues()
{
var displayvalues = new readvalues();
var box = document.getElementById('whitebackground');
for(var value of displayvalues)
{
var name = document.createTextNode(value);
var br = document.createElement('br');
box.appendChild(name);
box.appendChild(br);
}      
    var burgernames = document.getElementsByClassName('checkbox');
for(var title of burgernames)
{
    if(title.checked)
{
    var name = document.createTextNode(title.name);
    var br = document.createElement('br');
    box.appendChild(name);
    box.appendChild(br);
}
}
}

document.getElementById("orderButton").addEventListener("click", displayvalues);

function displayOrder(){

}