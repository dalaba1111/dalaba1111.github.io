let counts = setInterval(updated,1000);
let upto = 0;
function updated(){
    var count = document.querySelector("#count");
    count.innerHTML = ++upto;
    if(upto===1000){
        clearInterval(counts);
    }
}
count()
