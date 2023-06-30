// const camposDoFormulario = document.querySelectorAll('[required]');

// camposDoFormulario.forEach((campo) => {
//   campo.addEventListener("blur", () => verificaCampo(campo));

//   campo.addEventListener("invalid", evento => evento.preventDefault());
// })

// function verificaCampo(campo) {
//   let mensagem = "";
//   if (campo.value == "") {
//   } else {
//     console.log('Deu bom')
//   }
  
//   tiposDeErro.forEach(erro => {
//     if (campo.validity[erro]) {
//       mensagem = mensagens[campo.name][erro];
//       console.log(mensagem);
//     }
//   })

//   const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');

//   const validadorDeInput = campo.checkValidity();

//   console.log(mensagemErro)
//   console.log(validadorDeInput);

//   if (!validadorDeInput) {
//     mensagemErro.textContent = mensagem;

//   } else {
//     mensagemErro.textContent = "";
//   }
// }

// const tiposDeErro = [
//   'valueMissing',
//   'typeMismatch',
//   'patternMismatch',
//   'tooShort',
//   'customError'
// ]

// const mensagens = {
//   nome: {
//       valueMissing: "O campo de nome não pode estar vazio.",
//       patternMismatch: "Por favor, preencha um nome válido.",
//       tooShort: "Por favor, preencha um nome válido."
//   },
//   email: {
//       valueMissing: "O campo de e-mail não pode estar vazio.",
//       typeMismatch: "Por favor, preencha um email válido.",
//       tooShort: "Por favor, preencha um e-mail válido."
//   },
//   assunto: {
//       valueMissing: "O campo de assunto não pode estar vazio.",
//       patternMismatch: "Por favor, preencha um assunto válido.",
//       tooShort: "O campo de assunto não tem caractéres suficientes."
//   },
//   mensagem: {
//       valueMissing: 'O campo de mensagem não pode estar vazio.',
//       patternMismatch: "Por favor, digite uma mensagem válida.",
//       customError: "A mensagem digitada não existe.",
//       tooShort: "O campo de mensagem não tem caractéres suficientes."
//   }
// }