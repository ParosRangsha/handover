
let btnCheck = document.querySelector("#btnCheck")
let list = document.querySelector("ol")










btnCheck.addEventListener("click",()=>{
    list.innerHTML = ""
    let inpTxt = document.querySelector("#inpDispo")
    let productIdToFind = Number(inpTxt.value);
    let filteredDispos = dispos.filter(d => d.DS === productIdToFind);
    
    for(i=0;i<filteredDispos.length;i++){
        list.innerHTML += `<li><a href="#">${filteredDispos[i].DS}</a> <a href="#">${filteredDispos[i].SR}</a> <a href="#">${filteredDispos[i].ER}</a>  <a href="#">${filteredDispos[i].TR}</a> <a href="#"> ${filteredDispos[i].QT}</a> <a href="#">${filteredDispos[i].RM}</a> <a href="#">${filteredDispos[i].DT}</a> </li>`
    }
})