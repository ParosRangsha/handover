let main = document.querySelector(".main")
let totalShow = document.querySelector("#totalQty")
let totalQty = 0
let list = document.querySelector("ol")
let pass;
let reportTarget = 1;
dispos = dispos.concat(october24)


// input three buttons//
let btnCheck = document.querySelector("#btnCheck")
let barbe = document.querySelector("#increase")
let kombe = document.querySelector("#decrease")

btnCheck.addEventListener("click",()=>{
    check()
})
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
//input three button stop here//


function check(){
    if(reportTarget === 1){
        totalQty = 0;
        list.innerHTML = ""
        let inpTxt = document.querySelector("#inpDispo")
        let productIdToFind = Number(inpTxt.value);
        let filteredDispos = dispos.filter(d => d.DS === productIdToFind);
        if(filteredDispos.length === 0){
            main.style.border ="5px solid red"
            list.innerHTML = "No data found!"
            totalShow.innerHTML =""

        }else{
            main.style.border ="5px solid yellow"
            for(i=0;i<filteredDispos.length;i++){
                list.innerHTML += `<li><span>${filteredDispos[i].DT}</span><span>${filteredDispos[i].SR}</span><span>${filteredDispos[i].ER}</span><span>${filteredDispos[i].TR}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].RM}</span><span>x</span></li>`
                totalQty += Number(filteredDispos[i].QT)
                totalShow.innerHTML ="Total: " + totalQty +  filteredDispos[i].RM
            }
        }
        
    }else if(reportTarget == 2){
        totalQty = 0;
        list.innerHTML = ""
        let inpTxt = document.querySelector("#inpDispo")
        let productIdToFind = Number(inpTxt.value);
        let filteredDispos = locationHold.filter(d => d.DS === productIdToFind);
        
        if(filteredDispos.length === 0){
            main.style.border ="5px solid red"
            list.innerHTML = "No data found!"
            totalShow.innerHTML =""
        }else{
            main.style.border ="5px solid yellow"
            for(i=0;i<filteredDispos.length;i++){
                list.innerHTML += `<li><span>${filteredDispos[i].DT}</span><span>${filteredDispos[i].RL}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].UN}</span><span>${filteredDispos[i].LC}</span><span>${filteredDispos[i].FL}</span><span>${filteredDispos[i].RM}</span></li>`
                totalQty += Number(filteredDispos[i].QT) 
                totalShow.innerHTML ="Total: " + totalQty +  filteredDispos[i].UN
            }
        }
    }else if(reportTarget == 3){
        totalQty = 0;
        list.innerHTML = ""
        let inpTxt = document.querySelector("#inpDispo")
        let productIdToFind = Number(inpTxt.value);
        let filteredDispos = shadeHold.filter(d => d.DS === productIdToFind);
        
        if(filteredDispos.length === 0){
            main.style.border ="5px solid red"
            list.innerHTML = "No data found!"
            totalShow.innerHTML =""
        }else{
            main.style.border ="5px solid yellow"
            for(i=0;i<filteredDispos.length;i++){
                list.innerHTML += `<li><span>${filteredDispos[i].DT}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].LT}</span><span>${filteredDispos[i].FL}</span><span>${filteredDispos[i].DL}</span><span>${filteredDispos[i].RM}</span><span>x</span></li>`
                totalQty += Number(filteredDispos[i].QT)
                totalShow.innerHTML = "Total: " + totalQty
            }
        }
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






let btnHandOver = document.querySelector("#btnHandOver")
btnHandOver.addEventListener("click",()=>{
    document.querySelector("#maindHead").innerHTML = "Hand Over Report"
    reportTarget = 1
    list.innerHTML = ""
    document.querySelector("#headA").innerHTML = "Date"
    document.querySelector("#headB").innerHTML = "Start Roll"
    document.querySelector("#headC").innerHTML = "End Roll"
    document.querySelector("#headD").innerHTML = "Total Roll"
    document.querySelector("#headE").innerHTML = "QTY"
    document.querySelector("#headF").innerHTML = "Unit"
    document.querySelector("#headG").innerHTML = "Remark"
    check()
})
let btnLocationHold = document.querySelector("#btnLocationHold")
btnLocationHold.addEventListener("click",()=>{
    document.querySelector("#maindHead").innerHTML = "Location Hold Report"
    reportTarget = 2
    list.innerHTML = ""
    document.querySelector("#headA").innerHTML = "Date"
    document.querySelector("#headB").innerHTML = "Roll"
    document.querySelector("#headC").innerHTML = "QTY"
    document.querySelector("#headD").innerHTML = "Unit"
    document.querySelector("#headE").innerHTML = "Location"
    document.querySelector("#headF").innerHTML = "File"
    document.querySelector("#headG").innerHTML = "Remark"
    check()
})
let btnShadeHold = document.querySelector("#btnShadeHold")
btnShadeHold.addEventListener("click",()=>{
    document.querySelector("#maindHead").innerHTML = "Shade Hold Report"
    reportTarget = 3
    list.innerHTML = ""
    document.querySelector("#headA").innerHTML = "Date"
    document.querySelector("#headB").innerHTML = "QTY"
    document.querySelector("#headC").innerHTML = "Lot"
    document.querySelector("#headD").innerHTML = "File"
    document.querySelector("#headE").innerHTML = "Delay"
    document.querySelector("#headF").innerHTML = "Status"
    document.querySelector("#headG").innerHTML = "Remark"
    check()
})