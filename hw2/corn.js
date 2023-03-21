let counts = setInterval(updated,1000);
let upto = 0;
function updated(){
    let count = document.querySelector("#count");
    ++upto;
    count.innerHTML= upto.toString();
    if(upto===1000){
        clearInterval(counts);
    }
}
updated();
