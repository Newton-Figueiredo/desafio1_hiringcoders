function receberCadastro() {
    var recebeNome = document.getElementById('nome');
    var recebeEmail = document.getElementById('e-mail');

    var dadosStorage = JSON.parse(localStorage.getItem('listaDeEmails'));

    if (dadosStorage == null){
        localStorage.setItem('listaDeEmails','[]');
        dadosStorage = [];
    }

    var receber = {
        'cliente': recebeNome.value,
        'email': recebeEmail.value
    };

    dadosStorage.push(receber)
    localStorage.setItem('listaDeEmails',JSON.stringify(dadosStorage));

    alert('Cadastro feito com Sucesso !')

    recebeNome.value = '';
    recebeEmail.value = '';
}