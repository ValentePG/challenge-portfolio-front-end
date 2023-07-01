const camposDoFormulario = document.querySelectorAll('[required]');
const spanErro = document.querySelectorAll('.formulario__mensagem-erro')

spanErro.forEach(span => {
  span.style.display = 'none'
})

camposDoFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  
  campo.addEventListener("invalid", evento => evento.preventDefault());
})

function verificaCampo(campo) {
  let mensagem = "";
  
  tiposDeErro.forEach(erro => {
    if (campo.validity[erro]) {
      mensagem = mensagens[campo.name][erro];
      console.log(mensagem);
    }
  })
  
  const mensagemErro = campo.parentNode.querySelector('.formulario__mensagem-erro');
  const validadorDeInput = campo.checkValidity();
  
  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "block";
    
  } else {
    mensagemErro.textContent = "";
    mensagemErro.style.display = "none"
  }
}

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
]

const mensagens = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
  },
  assunto: {
    valueMissing: "O campo de assunto não pode estar vazio.",
  },
  mensagem: {
      valueMissing: 'O campo de mensagem não pode estar vazio.',
      customError: "A mensagem digitada não existe."
    }
  }
  
// export default function verificaEmail(){
// const email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
// }
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const listaRespostas = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "assunto": e.target.elements["assunto"].value,
    "mensagem": e.target.elements["mensagem"].value,
  }

  
  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
  
  alert('mensagem enviada');
})