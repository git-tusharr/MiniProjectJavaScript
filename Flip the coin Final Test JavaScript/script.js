let Total=0;
let Heads=0;
let Tails=0;

let headImg=document.querySelector("#headImg")
let tailsImg=document.querySelector("#tailsImg")


let totalFlips=document.querySelector("#total")
let totalHeads=document.querySelector("#totalHeads")
let totalTails=document.querySelector("#totalTails")


headImg.style.display="block";
tailsImg.style.display="none";


let flipCoin=()=>{
    let random=Math.floor(Math.random()*2)+1;

    if (random==1) {
        headImg.style.display="block";
        tailsImg.style.display="none";
        Heads++;
    }
    else{
        tailsImg.style.display="block";
        headImg.style.display="none";
        Tails++;
    }

    Total++;

    totalFlips.innerHTML=Total;
    totalHeads.innerHTML=Heads;
    totalTails.innerHTML=Tails;


}