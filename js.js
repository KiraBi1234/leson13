function block1(){
    let elem = document.getElementById("Block1");
    elem.style.fontFamily = "serif"
    elem.style.color = "red"
}

function block2() {
   let box2 = document.getElementById("Block2");
   box2.style.borderRadius = "20px"; 
 }



function block3() {
    document.body.style.background = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}
  
function rnd(arg) {
    return Math.floor(Math.random() * arg);
}

function blink(){
    text.hidden = !text.hidden; 

}


function block4() {
    let  box4 = document.getElementById("Block4");
    box4.style.background= `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`; 
}



function block5(){
    let elem = document.getElementById("Block5");
    elem.style.fontFamily = "serif"
    elem.style.color = "grin"
}


    