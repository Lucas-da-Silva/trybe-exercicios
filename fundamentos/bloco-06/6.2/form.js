const enviar = document.querySelector('#button-enviar');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');

// enviar.addEventListener('click', (event) => {
//     // event.preventDefault();
//     if (name.value.length < 10 || name.value.length > 40 || email.value.length < 10 || email.value.length > 50 || textarea.value.length > 500) {
//         window.alert('Dados Inválidos')
//     } else  {
//         window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
//     }
// })

// Utilizando a bliblioteca JustValidate
const validation = new JustValidate('#form');
enviar.addEventListener('click', () => {
    validation
    .addField('#name', [
    {
        rule: 'minLength',
        value: 10,
    },
    {
        rule: 'maxLength',
        value: 40,
    },
    ])
    .addField('#email', [
        {
            rule: 'minLength',
            value: 10,
        },
        {
            rule: 'maxLength',
            value: 40,
        }, 
        {
            rule: 'required',
            errorMessage: 'Email is required',
        },
        {
            rule: 'email',
            errorMessage: 'Email is invalid!',
          },      
    ])
    .addField('#textarea', [
        {
            rule: 'maxlength',
            value: 500,
        },
    ])
})

