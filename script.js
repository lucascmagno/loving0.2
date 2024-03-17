function fuja() {
    var botao = document.getElementById('nao');

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - botao.offsetWidth;
    var maxY = alturaJanela - botao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botao.style.left = aleatorioX + 'px';
    botao.style.top = aleatorioY + 'px';
}