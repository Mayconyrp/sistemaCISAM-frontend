//teste para setar datas, caso dê erro nas datas
/*document.getElementById('dataNasc').value = '2000-01-01';
document.getElementById('dataMenstruacao').value = '2022-05-01';
*/
function enviarDados() {
    const dataNascInput = document.getElementById('dataNasc');
    const dataNasc = moment(dataNascInput.value).format('YYYY-MM-DD');

    const dataMenstruacaoInput = document.getElementById('dataMenstruacao');
    const dataMenstruacao = moment(dataMenstruacaoInput.value).format('YYYY-MM-DD');

    axios.post('http://localhost:4040/createPacientes', {
        termoLGPD: document.getElementById('termoLGPD').value,
        prontuario: document.getElementById('prontuario').value,
        nome: document.getElementById('nome').value,
        nomeMae: document.getElementById('nomeMae').value,
        nomeSocial: document.getElementById('nomeSocial').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        telefone: document.getElementById('telefone').value,
        dataNasc: dataNasc,
        idade: document.getElementById('idade').value,
        sexo: document.getElementById('sexo').value,
        email: document.getElementById('email').value,
        uf: document.getElementById('uf').value,
        cidade: document.getElementById('cidade').value,
        cep: document.getElementById('cep').value,
        logradouro: document.getElementById('logradouro').value,
        numero: document.getElementById('numero').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value,
        especialidade: document.getElementById('especialidade').value,
        dataMenstruacao: dataMenstruacao,
        perguntaMenstruacao: document.getElementById('perguntaMenstruacao').value
    }).then(function (response) {
            console.log(response);
            alert('Dados enviados com sucesso!');
        })
        .catch(function (error) {
            console.log(error);
        });
}
