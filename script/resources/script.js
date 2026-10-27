// let body = document.querySelector("body");
// let div = document.querySelector("div");
// body.removeChild(div);

// let body = document.querySelector("body");
// let h1 = document.querySelector("h1");
// body.removeChild(h1);

//let h1 = document.querySelector("#trocarCor");

// comando para mudar a cor da letra
// h1.style.color = "pink";

// mudar a cor do fundo
//h1.style.background = "pink";

// tamanho da cor do fundo 
//h1.style.height = "20px"

// let body = document.querySelector("body");
// body.style.background = "pink";


// var h1 = document.querySelector("h1");
// var paragrafo = document.querySelector("p");

// paragrafo.innerText = h1.innerText;


// let cor = prompt("Escolha uma cor:");

// if (cor == "red" || cor == "blue" || cor == "yellow") {
    // document.body.style.backgroundColor = cor;
    // alert("Cor primária escolhida");
// } else {
    // document.body.style.backgroundColor = cor;
    // alert("Cor secundária escolhida");
// }

let h1 = document.querySelector("h1");
let button = document.querySelector("button");

button.addEventListener("click", function(){
    console.log("cliquei")
    document.body.style.background = "pink";
    h1.style.color = "lightyellow";
});










































