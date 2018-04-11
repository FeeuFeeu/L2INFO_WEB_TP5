$(document).ready(function() {
	
	///* Boutons de quantites plus et moins ################################################## */
	var plus = $('#plus'),
		moins = $('#moins'),
		c_panier = $('#c_panier');
	var nb_article = 1;
	
	/* Lors d'un clic sur le plus
	 * la quantite augmente de 1 */
	plus.click(function() {
		nb_article++;
		c_panier.text(nb_article);
	});
	/* Lors d'un clic sur le moins
	 * la quantite diminue de 1
	 * si elle est superieure a 1 */
	moins.click(function() {
		if(nb_article>1) nb_article--;
		c_panier.text(nb_article);
	});
	
	///* Gestion des miniatures ############################################################## */
	var img_princ = $('#img_princ'),
	mini = $('#miniatures img');
	
	// Chaque miniature a une bordure initialisee de taille 0 grise
	mini.css("border-bottom","0em solid #cccccc");
	// La premiere miniature est l'image principale "de base", elle a une bordure bleue
	$(mini[0]).css("border-bottom","0.5em solid #007bff");

	/* Evenement clic sur miniature 
	 * -> bordure bleue
	 * -> miniature selectionnee devient l'image principale */
	mini.click(function() {
		// la miniature devient la principale
		img_princ.attr('src',$(this).attr('src'));
		// la miniature selectionnee
		// a une bordure bleue
		mini.css("border-bottom-width","0em");
		$(this).css("border-bottom","0.5em solid #007bff");	
	});
	
	
	/* Lorsqu'on passe la souris sur une 
	 * miniature, si celle-ci n'est pas l'image principale
	 * ( == elle n'a pas le meme src),
	 * on lui ajoute une bordure grise */
	mini.mouseenter(function() {
		if($(this).attr("src")!=img_princ.attr("src"))
			$(this).css("border-bottom","0.5em solid #cccccc");
	});
	
	/* Lorsque la souris n'est plus sur la miniature
	 * si celle-ci n'est pas l'image principale,
	 * on lui enleve la bordure grise */
	mini.mouseleave(function() {
		if($(this).attr("src")!=img_princ.attr("src"))
			$(this).css("border-bottom","0em solid #cccccc");		
	});
	
	
	///* Gestion des commentaires ############################################################ */
	
	/* Class commentaire
	 * contenant une date et un texte */
	class Commentaire {
		constructor(date,avis) {
			this.date = date;
			this.avis = avis;
		}
	}
	/* Lors d'un clic sur le bouton de confirmation,
	 * le commentaire saisi s'affiche
	 * dans la console avec la date */
	$('#avis').keypress(function(event) {
		if(event.keyCode==13) {
			var avis = new Commentaire(Date(),$(this).val());
			console.log(avis);
			// on vide le champs du commentaire
			$(this).val("");
		}
	});
});
