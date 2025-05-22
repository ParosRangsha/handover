let inpTxt = document.querySelector("#inpDispo")
let main = document.querySelector(".main")
let totalShow = document.querySelector("#totalQty")
let totalQty = 0
let list = document.querySelector("ol")
let pass;
let reportTarget = 1;
dispos = dispos.concat(Jan25toRunning)


let btnHandOver = document.querySelector("#btnHandOver")
let btnLocationHold = document.querySelector("#btnLocationHold")
let btnShadeHold = document.querySelector("#btnShadeHold")
let btnReceive = document.querySelector("#btnStoreReceive")
let btnExcess = document.querySelector("#btnExcess")

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
inpTxt.addEventListener("keydown",()=>{
    check()
})
//input three button stop here//


function check(){
    if(reportTarget === 1){
        totalQty = 0;
        list.innerHTML = ""
        inpTxt = document.querySelector("#inpDispo")
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
        inpTxt = document.querySelector("#inpDispo")
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
        inpTxt = document.querySelector("#inpDispo")
        let productIdToFind = Number(inpTxt.value);
        let filteredDispos = shadeHold.filter(d => d.DS === productIdToFind);
        
        if(filteredDispos.length === 0){
            main.style.border ="5px solid red"
            list.innerHTML = "No data found!"
            totalShow.innerHTML =""
        }else{
            main.style.border ="5px solid yellow"
            for(i=0;i<filteredDispos.length;i++){
                list.innerHTML += `<li><span>${filteredDispos[i].DT}</span><span>${filteredDispos[i].BU}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].LT}</span><span>${filteredDispos[i].FL}</span><span>${filteredDispos[i].DL}D</span><span>${filteredDispos[i].RM}</span></li>`
                totalQty += Number(filteredDispos[i].QT)
                totalShow.innerHTML = "Total: " + totalQty
            }
        }
    }else if(reportTarget == 4){
        totalQty = 0;
        list.innerHTML = ""
        inpTxt = document.querySelector("#inpDispo")
        let productIdToFind = Number(inpTxt.value);
        let filteredDispos = fabricReceive.filter(d => d.DS === productIdToFind);
        
        if(filteredDispos.length === 0){
            main.style.border ="5px solid red"
            list.innerHTML = "No data found!"
            totalShow.innerHTML =""
        }else{
            main.style.border ="5px solid yellow"
            for(i=0;i<filteredDispos.length;i++){
                list.innerHTML += `<li><span>${filteredDispos[i].DS}</span><span>${filteredDispos[i].BY}</span><span>${filteredDispos[i].OQ}</span><span>${filteredDispos[i].RQ}</span><span>${filteredDispos[i].NQ}</span><span>${filteredDispos[i].UQ}</span></li>`
                totalQty += Number(filteredDispos[i].QT)
                totalShow.innerHTML = "Total: " + totalQty
            }
        }
        
    }else if(reportTarget == 5){
        totalQty = 0;
        list.innerHTML = ""
        inpTxt = document.querySelector("#inpDispo")
        let productIdToFind = inpTxt.value;
        let filteredDispos = excess.filter(d => d.DS === productIdToFind);
        
        
        
        if(filteredDispos.length === 0){
            main.style.border ="5px solid red"
            list.innerHTML = "No data found!"
            totalShow.innerHTML =""
        }else{
            main.style.border ="5px solid yellow"
            for(i=0;i<filteredDispos.length;i++){
                console.log(filteredDispos[i])
                list.innerHTML += `<li><span>${filteredDispos[i].DT}</span><span>${filteredDispos[i].DS}</span><span>${filteredDispos[i].RL}</span><span>${filteredDispos[i].QT}</span><span>${filteredDispos[i].RM}</span></li>`
                totalQty += Number(filteredDispos[i].QT)
                totalShow.innerHTML = "Total: " + totalQty
            }
        }
    }
}




let inpPass = document.querySelector("#inpPass")
let btnPass = document.querySelector("#btnPass")
let user = document.querySelector(".user")
let passKey = document.querySelector(".passkey")

btnPass.addEventListener("click",()=>{
    if(inpPass.value === "finals"){
        user.style.display = "block"
        passKey.style.display = "none"
        btnHandOver.style.display = "block"
        btnLocationHold.style.display = "block"
        btnShadeHold.style.display = "block"
        btnReceive.style.display = "block"
        btnExcess.style.display = "block"
        pass = "finals"
    }else{
        alert("Wrong password")
    }
})
inpPass.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(inpPass.value === "finals"){
            user.style.display = "block"
            passKey.style.display = "none"
            btnHandOver.style.display = "block"
            btnLocationHold.style.display = "block"
            btnShadeHold.style.display = "block"
            btnReceive.style.display = "block"
            btnExcess.style.display = "block"
            pass = "finals"
        }else{
            alert("Wrong password")
        }
    }
});


let count = 20
let warn = document.querySelector("#warn")
setInterval(()=>{
    if(pass === "finals"){
       
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




let countClose = 1800
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

    btnHandOver.style.backgroundColor= "red"
    btnHandOver.style.color = "white"

    btnLocationHold.style.backgroundColor= "white"
    btnLocationHold.style.color = "black"

    btnShadeHold.style.backgroundColor= "white"
    btnShadeHold.style.color = "black"

    btnReceive.style.backgroundColor= "white"
    btnReceive.style.color = "black"

    btnExcess.style.backgroundColor= "white"
    btnExcess.style.color = "black"

    check()
})

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
    btnHandOver.style.backgroundColor= "white"
    btnHandOver.style.color = "black"

    btnLocationHold.style.backgroundColor= "red"
    btnLocationHold.style.color = "white"

    btnShadeHold.style.backgroundColor= "white"
    btnShadeHold.style.color = "black"

    btnReceive.style.backgroundColor= "white"
    btnReceive.style.color = "black"

    btnExcess.style.backgroundColor= "white"
    btnExcess.style.color = "black"
    check()
})

btnShadeHold.addEventListener("click",()=>{
    document.querySelector("#maindHead").innerHTML = "Shade Hold Report"
    reportTarget = 3
    list.innerHTML = ""
    document.querySelector("#headA").innerHTML = "Date"
    document.querySelector("#headB").innerHTML = "Buyer"
    document.querySelector("#headC").innerHTML = "QTY"
    document.querySelector("#headD").innerHTML = "Lot"
    document.querySelector("#headE").innerHTML = "File"
    document.querySelector("#headF").innerHTML = "Delay"
    document.querySelector("#headG").innerHTML = "Remark"
    btnHandOver.style.backgroundColor= "white"
    btnHandOver.style.color = "black"

    btnLocationHold.style.backgroundColor= "white"
    btnLocationHold.style.color = "black"

    btnShadeHold.style.backgroundColor= "red"
    btnShadeHold.style.color = "white"

    btnReceive.style.backgroundColor= "white"
    btnReceive.style.color = "black"

    btnExcess.style.backgroundColor= "white"
    btnExcess.style.color = "black"
    check()
})
btnReceive.addEventListener("click",()=>{
    document.querySelector("#maindHead").innerHTML = "Store Fabric Receive Report"
    reportTarget = 4
    list.innerHTML = ""
    document.querySelector("#headA").innerHTML = "Dispo"
    document.querySelector("#headB").innerHTML = "Buyer"
    document.querySelector("#headC").innerHTML = "Order QTY"
    document.querySelector("#headD").innerHTML = "Receive QTy"
    document.querySelector("#headE").innerHTML = "Need QTQ"
    document.querySelector("#headF").innerHTML = "Over QTY"
    document.querySelector("#headG").innerHTML = ""
    btnHandOver.style.backgroundColor= "white"
    btnHandOver.style.color = "black"

    btnLocationHold.style.backgroundColor= "white"
    btnLocationHold.style.color = "black"

    btnShadeHold.style.backgroundColor= "white"
    btnShadeHold.style.color = "black"

    btnReceive.style.backgroundColor= "red"
    btnReceive.style.color = "white"

    btnExcess.style.backgroundColor= "white"
    btnExcess.style.color = "black"
    check()
})
btnExcess.addEventListener("click",()=>{
    document.querySelector("#maindHead").innerHTML = "Fabric Excess Report"
    reportTarget = 5
    list.innerHTML = ""
    document.querySelector("#headA").innerHTML = "Date"
    document.querySelector("#headB").innerHTML = "Dispo"
    document.querySelector("#headC").innerHTML = "Roll"
    document.querySelector("#headD").innerHTML = "QTY"
    document.querySelector("#headE").innerHTML = "Remark"
    document.querySelector("#headF").innerHTML = ""
    document.querySelector("#headG").innerHTML = ""
    btnHandOver.style.backgroundColor= "white"
    btnHandOver.style.color = "black"

    btnLocationHold.style.backgroundColor= "white"
    btnLocationHold.style.color = "black"

    btnShadeHold.style.backgroundColor= "white"
    btnShadeHold.style.color = "black"

    btnReceive.style.backgroundColor= "white"
    btnReceive.style.color = "black"

    btnExcess.style.backgroundColor= "red"
    btnExcess.style.color = "white"
    check()
})

