
let btn = document.querySelector("#btn");

let h1 = document.querySelector("#heading");

let para = document.querySelector("#para");

btn.addEventListener("click", function() {

    h1.innerText = "Hello Archana  Rao!";

    para.innerText = "Successfully clicked!";

    h1.style.color = "red";

    document.body.style.backgroundColor = "lightyellow";

});
