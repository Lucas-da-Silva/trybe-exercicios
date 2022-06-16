const enviar = document.querySelector('#button-enviar');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');

enviar.addEventListener('click', (event) => {
    // event.preventDefault();
    if (name.value.length < 10 || name.value.length > 40 || email.value.length < 10 || email.value.length > 50 || textarea.value.length > 500) {
        window.alert('Dados Inválidos')
    } else  {
        window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
})
