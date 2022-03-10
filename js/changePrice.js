let buttons = document.querySelectorAll(".btn-add-to-cart");
let backUp = document.querySelectorAll(".btn-add-to-cart");
let prices = document.getElementsByClassName("item-price");

cnt1 = 0;

let values = [];

for (let val of buttons) {
    values[cnt] = val.innerHTML;
    cnt++;
}

if (window.innerWidth <= 320) {
    var cnt = 0;
    for (let btn of buttons) {
        btn.innerHTML = prices[cnt].innerHTML;
        cnt++;
    }
}
window.addEventListener("resize", function(){  
    console.log(backUp);
    var backcnt = 0;
    if (window.innerWidth <= 320) {
        for (let btn of buttons) {
            // console.log(btn.innerHTML);
            btn.innerHTML = prices[backcnt].innerHTML;
            cnt++;
        }
    }
    else {
        backcnt = 0;
        if (window.innerWidth > 320) {
            console.log("back");
            console.log(backUp);
            for (let btn of buttons) {
               // console.log(btn);
              //  console.log(backUp[backcnt].innerHTML);
                btn.innerHTML= values[backcnt].innerHTML;
                backcnt++;
            }
        }
    }
}, false);