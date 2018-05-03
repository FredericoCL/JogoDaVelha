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


	})
});