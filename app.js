    let listaDeNumerosSorteados = [];
    let numeroLimite = 100;
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas =  1;

    //Função com parâmetro
    function ExibirTextonaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        //colocar voz no site;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }

    function exibirMensagemInicial(){
        ExibirTextonaTela('h1', 'Jogo do número secreto');
        ExibirTextonaTela('p', 'Escolha um número de 1 a 100');
    }
    

    //Função sem parâmetro
        function verificarChute() {
            let chute = document.querySelector('input').value;
            
            if (chute == numeroSecreto) {
                ExibirTextonaTela('h1', 'Boa, Acertouuu!');
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
                ExibirTextonaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                
                if (chute > numeroSecreto) {
                    ExibirTextonaTela('p', 'O número secreto é menor');
                } else {
                    ExibirTextonaTela('p', 'O número secreto é maior');
                }

                tentativas++;
                limparCampo();
            }
        }

    //Função com retorno 
    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
            listaDeNumerosSorteados = [];
        }

        if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
            return numeroEscolhido;
        }
    }

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    }
    
    exibirMensagemInicial();