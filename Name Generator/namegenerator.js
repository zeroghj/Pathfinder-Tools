//look up category of name
//access json
//get one at random
//return it
function findName(){
var beforerace = document.getElementById("race").selectedIndex;
var optionrace = document.getElementById("race").options;
var race = optionrace[beforerace].text;
var sex = document.forms[0];
var txt="";
    for (i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            txt = sex[i].value;
        }
    }
sex = txt;
var importance = document.getElementById("importance").selectedIndex +1;
switch (race){
 case "Human":
	getName(human,race,sex,importance);
	break;
 case "Elf":
	getName(elf,race,sex,importance);
	break;
 case "Orc":
	getName(orc,race,sex,importance);
	break;
 case "Halfling":
	getName(halfling,race,sex,importance);
	break;
 case "Dwarf":
	getName(dwarf,race,sex,importance);
	break;
case "Gnome":
	getName(gnome,race,sex,importance);
	break;
case "Aasimar":
	getName(human,race,sex,importance);
	break;
case "Catfolk":
	getName(catfolk,race,sex,importance);
	break;
case "Dhampir":
	getName(human,race,sex,importance);
	break;
case "Drow":
	getName(drow,race,sex,importance);
	break;
case "Fetchling":
	getName(fetchling,race,sex,importance);
	break;
case "Goblin":
	getName(goblin,race,sex,importance);
	break;
case "Hobgoblin":
	getName(hobgoblin,race,sex,importance);
	break;
case "Ifrit":
	getName(human,race,sex,importance);
	break;
case "Kobold":
	getName(kobold,race,sex,importance);
	break;
case "Oread":
	getName(human,race,sex,importance);
	break;
case "Ratfolk":
	getName(ratfolk,race,sex,importance);
	break;
case "Sylph":
	getName(human,race,sex,importance);
	break;
case "Tengu":
	getName(tengu,race,sex,importance);
	break;
case "Tiefling":
	getName(tiefling,race,sex,importance);
	break;
case "Undine":
	getName(human,race,sex,importance);
	break;
case "Duergar":
	getName(duergar,race,sex,importance);
	break;
case "Gillmen":
	getName(gillmen,race,sex,importance);
	break;
case "Grippli":
	getName(grippli,race,sex,importance);
	break;
case "Kitsune":
	getName(kitsune,race,sex,importance);
	break;
case "Merfolk":
	getName(merfolk,race,sex,importance);
	break;
case "Nagaji":
	getName(nagaji,race,sex,importance);
	break;
case "Samsaran":
	getName(samsaran,race,sex,importance);
	break;
case "Strix":
	getName(strix,race,sex,importance);
	break;
case "Suli":
	getName(suli,race,sex,importance);
	break;
case "Svirfneblin":
	getName(svirfneblin,race,sex,importance);
	break;
case "Vanara":
	getName(vanara,race,sex,importance);
	break;
case "Vishkanya":
	getName(vishkanya,race,sex,importance);
	break;
case "Wayang":
	getName(wayang,race,sex,importance);
	break;
case "Naga":
	getName(naga,race,sex,importance);
	break;
case "Centaur":
	getName(centaur,race,sex,importance);
	break;
default:
	getName(human,race,sex,importance);
	break;

}
}

function getName(json,race,sex,importance){
var name = JSON.parse(json);
var firstname;
var lastname;
if (sex=="male"){
var item = name.firstM[Math.floor(Math.random()*name.firstM.length)];
document.getElementById("fName").value = item.Name;
}else if (sex=="female"){
var item = name.firstF[Math.floor(Math.random()*name.firstF.length)];
document.getElementById("fName").value = item.Name;
}else{
var item = name.firstU[Math.floor(Math.random()*name.firstU.length)];
document.getElementById("fName").value = item.Name;
}
if (importance>8){
var item = name.last10[Math.floor(Math.random()*name.last10.length)];
document.getElementById("lName").value = item.Name;
}else if(importance>5){
var item = name.last8[Math.floor(Math.random()*name.last8.length)];
document.getElementById("lName").value = item.Name;
}else if(importance>2){
var item = name.last5[Math.floor(Math.random()*name.last5.length)];
document.getElementById("lName").value = item.Name;
}else{
var item = name.last1[Math.floor(Math.random()*name.last1.length)];
document.getElementById("lName").value = item.Name;
}
}