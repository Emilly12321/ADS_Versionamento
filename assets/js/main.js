
let emailInput = document.getElementById('email');
let telefoneInput = document.getElementById('fone');
let comentario = document.getElementById('comentario');
let emailFooter = document.getElementById('emailFooter');
let botaoEnviar = document.getElementById('enviarEmail');

const RegEmail = /^[A-Za-z0-9._-]+@(gmail|outlook|hotmail)\.com(\.br)?$/;


const palavroes = ["merda", "caquinha", "dianho"];

function ValidaForm() {
    const nomeInput = document.getElementById('nome'); // pega o elemento
    const nomeUsuario = nomeInput.value.trim();        // pega o valor limpo

    if (!nomeUsuario) {
        alert("Nome em branco, favor preencher");
        nomeInput.focus();
        return false;
    }

    else if (!emailInput.value.trim()) {
        alert("Email em branco, favor preencher");
        emailInput.focus();
        return false;
    }


    else {

        const RegNome = /^[A-Za-z]{3,}$/;

        if (!RegEmail.test(emailInput.value)) {
            alert("E-mail inválido. Use gmail, outlook ou hotmail.");
            emailInput.focus();
            return false;
        } else if (!RegNome.test(nomeUsuario)) {
            alert("Nome inválido. Use pelo menos 3 letras, sem números ou caracteres especiais.");
            nomeInput.focus();
            return false;

        } else if (!telefoneInput.value.trim()) {
            alert("Telefone em branco, favor preencher");
            telefoneInput.focus();
            return false;
        }

    }
    return true;
}



if (telefoneInput) {
    telefoneInput.addEventListener("input", (e) => {
        let valor = e.target.value.replace(/\D/g, "");

        if (valor.length > 10) {
            valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else {
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        }

        e.target.value = valor;
    });
}

if (comentario) {
    comentario.addEventListener("input", () => {
        const regex = new RegExp(`\\b(${palavroes.join("|")})\\b`, "gi");
        comentario.value = comentario.value.replace(regex, "****");
    });
}

if (emailFooter && botaoEnviar) {

    botaoEnviar.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailFooter.value.trim();
        const RegEmail = /^[A-Za-z0-9._-]+@(gmail|outlook|hotmail)\.com(\.br)?$/;


        if (!RegEmail.test(email)) {
            alert("E-mail inválido. Use gmail, outlook ou hotmail.");
            emailInput.focus();
            return false;
        } else {

            window.location.href = `/assets/pages/contato.html?email=${encodeURIComponent(email)}`;


        }
    });
}

if (emailInput) {
    const params = new URLSearchParams(window.location.search);
    const emailDoFooter = params.get('email');

    if (emailDoFooter) emailInput.value = emailDoFooter;
}

