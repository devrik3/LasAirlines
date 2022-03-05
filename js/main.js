let passagem = {
				'saida': 'Sao Paulo',
				'destino': 'Curitiba',
				'preco': 'R$ ' + 720,
				'conexao':  false
		      }
if (passagem.conexao === false) {
	let conexao = 'voo direto';
}

let partida = $('#fpartida');
let destino = $('#fdestino');
let form = $('#form-search');

form.change(function(e){
	if (partida.val() === passagem.saida || destino.val() === passagem.destino) {
	//	alert(passagem.saida + ' ' + passagem.destino)
		$('.passagem-search').addClass('search-on-grid');
		e.preventDefault()
	} else{
		$('#erro-passagem').css('display','flex').show().delay(4000).fadeToggle(500)
		$('.passagem-search').removeClass('search-on-grid');
		e.preventDefault()
	}
});
// for(let i = 0;i < 2; i++) {

// }
$url = 'compra-passagem.html'
$('.right-bottom').click(() => {
	window.open("compra-passagem.html", "_blank");
});