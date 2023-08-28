/* Valida quais são os campos obrigatórios */
function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {
        
        event.preventDefault();

        if(this.value == "") {

            document.querySelector('.mensagem').innerHTML = 'Verifique o preenchimento dos campos em vermelho';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        
        } else {
        
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}

/* Validando campo de email */
function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

/* Validando campo de telefone (Estou forçando o usuário a informar o Telefone, como: (00)9 0000-0000 ou (00)0000-0000) */
function validaTelefone(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const telefoneValido = '^\\([0-9]{2}\\)(([0-9]{4}-[0-9]{4})|(9 [0-9]{4}-[0-9]{4}))|()$';
        if(this.value.match(telefoneValido)) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

/* Validando campo de CEP (Estou forçando o usuário a informar o CEP, como: 00000-000) */
function validaCep(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let cepValido = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;
        //const cepValido = '^[0-9]{5}-[0-9]{3}$|()';
        if(this.value.match(cepValido)) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

/* Validando campo de UF (Estado) */
function validaUf(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const ufValido = /^[a-zA-Z]/;
        
        if(this.value.match(ufValido)) {
            
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');

        } else {

            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposEmail = document.querySelectorAll('input.email');
let camposCep = document.querySelectorAll('input.cep');
let camposTelefone = document.querySelectorAll('input.telefone');
let camposUf = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios) {
    validaCampo(emFoco)
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for( let emFoco of camposCep) {
    validaCep(emFoco);
}

for( let emFoco of camposTelefone) {
    validaTelefone(emFoco);
}

for( let emFoco of camposUf) {
    validaUf(emFoco);
}