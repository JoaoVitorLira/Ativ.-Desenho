let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let cor = "#000000";
let desenhando = false;

canvas.addEventListener("mousedown", function (event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
})

canvas.addEventListener("mousemove", function (event) {
    if (desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
        contexto.strokeStyle = cor;
    }
})

canvas.addEventListener("mouseup", function (event) {
    desenhando = false;
})

function selecionarCor1() {
    cor = "#ffff00"
}

function selecionarCor2() {
    cor = "#ffffff"
}

function selecionarCor3() {
    cor = "#ff0000"
}

function selecionarCor4() {
    cor = "#32cd32"
}

function selecionarCor5() {
    cor = "#a52a2a"
}

function selecionarCor6() {
    cor = "#00bfff"
}

function selecionarCor7() {
    cor = "#000000"
}

//Trocar fundo (não foi feito por mim de cabeça)

function preencherComCor() {
    contexto.fillStyle = cor;
    contexto.fillRect(0, 0, canvas.width, canvas.height);
}


