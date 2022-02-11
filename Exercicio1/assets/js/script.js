let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome precisa ter mais que três caracteres!'
        nomeOk = false
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length > 300) {
        txtAssunto.innerHTML = 'Digite no máximo 300 caracteres'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Mensagem enviada!')
    } else {
        alert('Verifique as informações e preencha corretamente!')
    }
}

function mapaZoom() {
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}