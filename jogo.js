var rodada = 1;
var matriz_jogo = Array(3);

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

	}

});