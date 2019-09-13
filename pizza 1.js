alert('Berkan Kaya');
var amountSmall = prompt('hoeveel kleine pizzas wilt u?');
var amountMedium = prompt('hoeveel medium pizzas wilt u?');
var amountLarge = prompt('hoeveel grote pizzas wilt u?');
var costSmall
var costMedium
var costLarge
var costTotal
document.write(' Small pizzas: ' + amountSmall);
document.write(' Medium pizzas: ' + amountMedium);
document.write(' Large pizzas: '+ amountLarge);
document.write("<br>")
document.write('Small pizzas price: ');
costSmall=amountSmall*6
document.write(costSmall);
document.write("<br>")
document.write('Medium pizzas price: ');
costMedium=amountMedium*8
document.write(amountMedium*8);
document.write("<br>")
document.write('Large pizzas price: ');
costLarge=amountLarge*10
document.write(amountLarge*10);
document.write("<br>");
document.write('Total price: ');
document.write(costTotal=costSmall+costMedium+costLarge);
document.write("<br>");
document.write('Bedankt voor het bestellen!');