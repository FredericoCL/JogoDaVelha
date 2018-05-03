var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready(function(){

	//Função para iniciar o jogo quando clicado o botão iniciar
	$('#btn_iniciar_jogo').click(function(){

		//Função para validar preenchimento dos nomes dos jogadores
		if ($('#entrada_nome_jogador_1').val() == '') {
			alert('Nome do Jogador 1 não foi preenchido');
			return false;
		}

		if ($('#entrada_nome_jogador_2').val() == '') {
			alert('Nome do Jogador 2 não foi preenchido');
			return false;
		}

		//Função para exibir os nomes dos jogadores em seus respectivos locais
		$('#nome_jogador_1').html($('#entrada_nome_jogador_1').val());
		$('#nome_jogador_2').html($('#entrada_nome_jogador_2').val());

		//Função para habilitar e desabilitar "telas" Página Inicial e Palco do Jogo - Controla visualização
		$('#pagina_inicial').hide();
		$('#palco_jogo').show();

	});

	$('.jogada').click(function(){
		var id_campo_clicado = this.id;
		jogada(id_campo_clicado);
	});

	function jogada(id){
		var icone = '';
		var ponto = 0;

		if((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = -1;
		} else {
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		}

		rodada++;

		$('#'+id).css('background-image', icone);

		var linha_coluna = id.split('-');

		//Preenchimento da Matriz com os Pontos do Jogador A (-1) e Jogador B(1)
		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;

		verifica_combinacao();

	}

	function verifica_combinacao(){

		//Verifica na Horizontal
		var pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matriz_jogo['a'][i];
		}
		ganhador(pontos);

		pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matriz_jogo['b'][i];
		}
		ganhador(pontos);

		pontos = 0;
		for (var i = 1; i <= 3; i++) {
			pontos = pontos + matriz_jogo['c'][i];
		}
		ganhador(pontos);

	}

	function ganhador(pontos){
		if (pontos == -3) {
			alert('Jogador 1 é o Vencedor');
		} else if(pontos == 3) {
			alert('Jogador 2 é o Vencedor');
		}
	}

});