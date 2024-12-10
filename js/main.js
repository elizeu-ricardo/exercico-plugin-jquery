$(document).ready(function() {

    
        $('#carousel-imagens').slick({
            autoplay: true,
            arrows: false,
            dots:true
        })
    


$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
        
    },
    messages: {
        nome: 'Insira o seu nome por favor',
        email: 'Insira o seu e-mail por favor',
        telefone: 'Insira o seu telefone por favor',
        endereco: 'Insira o seu endereço por favor',
        cep: 'Insira o seu cep por favor',
    },
    submitHandler: function (form) {

        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
        
    },
    invalidHandler: function (e, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
        let campoInvalido = validator.numberOfInvalids();
        if (campoInvalido) {
                alert(`Existem ${campoInvalido} campos em branco.`)
        }
    }
})

})