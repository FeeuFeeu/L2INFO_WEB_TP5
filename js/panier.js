window.onload = function() {
	calcul_prix();
	function calcul_prix() {
		// Calcul du total du panier
		var prix = $('.prix_produit'),
			qtt = $('.qtt_produit'),
			total = 0;
		for(var i=0;i<prix.length;i++)
			total += parseFloat($(prix[i]).text())*parseInt($(qtt[i]).text());
		$('#prix_panier').text(total.toFixed(2));
		
		// calcul de la TVA
		var montant_tva = total*((parseInt($('#tva_taux').text()))/100);
		$('#tva_total').text(montant_tva.toFixed(2));
		
		// Total panier + TVA
		$('#total_panier').text((montant_tva+total).toFixed(2));
	}
	
	$('.sup_produit').click(function() {
		console.log('sup');
		console.log(this);
		console.log($(this).parent().parent().parent());
		$(this).parent().parent().parent().parent().remove();
		calcul_prix();
	});

}
