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