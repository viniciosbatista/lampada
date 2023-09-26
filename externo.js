let botao = document.getElementById('bt1')
let botao2 = document.getElementById('bt2')
let image = document.getElementById('img')
botao.addEventListener('click',clicou)
botao2.addEventListener('click',clicou2)
function clicou(){
    image.src = 'imagens/apagada.gif'
    document.body.style.backgroundColor = 'black'
}
function clicou2(){
    image.src = 'imagens/acesa.gif'
    document.body.style.backgroundColor = 'rgba(228, 228, 16, 0.678)'
}