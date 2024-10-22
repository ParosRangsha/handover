let productIdToFind = String(112077);
let filteredDispos = dispos.filter(d => d.DS === productIdToFind);
let list = document.querySelector("ul")
list.style.width= "350px"
for(i=0;i<filteredDispos.length;i++){
    list.innerHTML += `<li><a href="#">${filteredDispos[i].DS}</a> <a href="#">${filteredDispos[i].SR}</a> <a href="#">${filteredDispos[i].ER}</a>  <a href="#">${filteredDispos[i].TR}</a> <a href="#"> ${filteredDispos[i].QT}</a> <a href="#">${filteredDispos[i].RM}</a> </li>`
}
let li= document.querySelector("li")
li.style.width= "100%"
li.style.display= "flex"
li.style.justifyContent= "space-between "