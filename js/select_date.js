$(document).ready(function() {
	
	/// * Generation des elements du formulaire d'inscription ################################ */
	// Liste des jours
	for(var jour=1;jour<=31;++jour) {
		var element = '<option value="'+jour+'">'+jour+'</option>';
		element = $(element);
		$('#inputJourNais').append(element);
	}
	
	// Liste des mois
	var liste_mois = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre'];
	for(var mois=1;mois<=12;mois++) {
		var element = '<option value="'+mois+'">'+liste_mois[mois-1]+'</option>';
		element = $(element);
		$('#inputMoisNais').append(element);
	}
	
	// Liste des annees
	for(var annee=1900;annee<=new Date().getFullYear();annee++) {
		var element = '<option value="'+annee+'">'+annee+'</option>';
		element = $(element);
		$('#inputAnNais').append(element);
	}
});
