
let btn = document.querySelector("#btn");

let h1 = document.querySelector("#heading");

let para = document.querySelector("#para");

btn.addEventListener("click", function() {

    h1.innerText = "Hello Archana  Rao!";

    para.innerText = "Button successfully clicked!";

    h1.style.color = "green";

    document.body.style.backgroundColor = "lightyellow";

});
