let position = 180;

function carregarimg() {
    document.getElementById("imagem").innerHTML = "<img src='assets/imgs/images (84).jpeg' width='250'>";
}

function handleover() {
    if (position > 150) {
        position -= Math.random() * 50 + 50;
    } else {
        position += Math.random() * 50 + 50;
    }
    document.querySelector('.nao').style.marginLeft = `${position}px`;
}
