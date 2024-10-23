
let btnCheck = document.querySelector("#btnCheck")
let list = document.querySelector("ol")
btnCheck.addEventListener("click",()=>{
    list.innerHTML = ""
    let inpTxt = document.querySelector("#inpDispo")
    let productIdToFind = Number(inpTxt.value);
    let filteredDispos = dispos.filter(d => d.DS === productIdToFind);
    
    for(i=0;i<filteredDispos.length;i++){
        list.innerHTML += `<li><span>${filteredDispos[i].DS}</span><span>${filteredDispos[i].SR}</span><span>${filteredDispos[i].ER}</span><span>${filteredDispos[i].TR}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].RM}</span><span>${filteredDispos[i].DT}</span></li>`
    }
})
let clickDownload = document.querySelector("#fileExcel")
clickDownload.addEventListener("click",()=>{
    let inpTxtDownload = document.querySelector("#inpDispo")
    let excelDownload = document.querySelector("#excel")
    if(inpTxtDownload.value == "asdf"){
        excelDownload.style.display= "inline-block"
    }else{
        excelDownload.style.display= "none"
    }
})