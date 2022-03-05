AOS.init();
var finput = $('#fcodigo');
var flabelInput = $('#text-codigo')
$(document).ready(function() {

  $('#Ftipo').change(function() {

    valor = $("#Ftipo").val();
    if ($('#Ftipo').val() == 'Código da reserva') {
    	finput.attr('placeholder','Digite o código');
    	flabelInput.html('CÓDIGO DA RESERVA');

    	// alert(valor);
    } else {}
    if ($('#Ftipo').val() == 'CPF') {
    	finput.attr('placeholder','Digite o CPF');
    	flabelInput.html('CPF');
    	// alert(valor);
    } else {}
    if ($('#Ftipo').val() == 'Número Smiles') {
    	finput.attr('placeholder','Digite o Número Smiles');

    	flabelInput.html('NÚMERO SMILES');

    	// alert(valor);
    } else {}
  });
});

$('#checkin').click(() => {
	$('.checkin').toggleClass('checkin-on');
})