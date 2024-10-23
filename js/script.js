let totalShow = document.querySelector("#totalQty")
let totalQty = 0
let btnCheck = document.querySelector("#btnCheck")
let list = document.querySelector("ol")
let pass;
btnCheck.addEventListener("click",()=>{
    check()
})


function check(){
    list.innerHTML = ""
    let inpTxt = document.querySelector("#inpDispo")
    let productIdToFind = Number(inpTxt.value);
    let filteredDispos = dispos.filter(d => d.DS === productIdToFind);
    
    for(i=0;i<filteredDispos.length;i++){
        list.innerHTML += `<li><span>${filteredDispos[i].DS}</span><span>${filteredDispos[i].SR}</span><span>${filteredDispos[i].ER}</span><span>${filteredDispos[i].TR}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].RM}</span><span>${filteredDispos[i].DT}</span></li>`
        totalQty += Number(filteredDispos[i].QT)
        totalShow.innerHTML ="Total: " + totalQty + filteredDispos[i].RM
    }
}
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




let inpPass = document.querySelector("#inpPass")
let btnPass = document.querySelector("#btnPass")
let user = document.querySelector(".user")
let passKey = document.querySelector(".passkey")

btnPass.addEventListener("click",()=>{
    if(inpPass.value === "421"){
        user.style.display = "block"
        passKey.style.display = "none"
        pass = 421
    }else{
        alert("Wrong password")
    }
})



let count = 10
let warn = document.querySelector("#warn")
setInterval(()=>{
    if(pass === 421){
       
    }else{
        count--
        if(count>=0){
            warn.innerHTML = `Your remaining times is ${count} seconds`
        }
        if(count === 0){
            window.close()
            warn.innerHTML = "You have no more time"
            passKey.style.display = "none"

        }
    }
},1000)




let countClose = 300
setInterval(()=>{
    if(countClose === 0){
        window.close()
        user.style.display = "none"
        passKey.style.display = "none"
    }else{
        countClose--
    }
},1000)

let headA = document.querySelector("#headA")
let headB = document.querySelector("#headB")
let headC = document.querySelector("#headC")
let headD = document.querySelector("#headD")
let headE = document.querySelector("#headE")
let headF = document.querySelector("#headF")
let headG = document.querySelector("#headG")
let reportSelect = document.querySelector("#reportSelect")


let barbe = document.querySelector("#increase")
let kombe = document.querySelector("#decrease")
barbe.addEventListener("click",()=>{
    let txt = document.querySelector("#inpDispo")
    let myDatas = Number(txt.value)
    myDatas += 1
    txt.value = myDatas
    check()

})
kombe.addEventListener("click",()=>{
    let txt = document.querySelector("#inpDispo")
    let myDatas = Number(txt.value)
    myDatas -= 1
    txt.value = myDatas
    check()

})