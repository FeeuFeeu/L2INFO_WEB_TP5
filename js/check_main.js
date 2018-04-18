$(document).ready(function() {

  // Utils
  // fonctions qui changent la couleur si erreur par exemple
  var Feedback = {
    validate: function(element) {
      $(element).each(function(idx, el) {
        el.removeClass('is-invalid');
        el.addClass('is-valid');
      });
    },
    error: function(element) {
      $(element).each(function(idx, el) {
        el.removeClass('is-valid');
        el.addClass('is-invalid');
      });
    },
    invalidate: function(element) {
      $(element).each(function(idx, el) {
        el.removeClass('is-invalid');
        el.removeClass('is-valid');
      });
    },
    
    // Applique le pourcentage
    // à la barre de progression
    progress: function() {
		var pourcentage = (($('.is-valid').length)/$('input').length);
		pourcentage*=$('#formProgress').parent().width();
		$('#formProgress').animate({'width':pourcentage+"px"});
	}
  };
	
	// on listes les differents inputs
  var Fields = {
    inputNom: $('#inputNom'),
    inputPrenom: $('#inputPrenom'),
    inputEmail: $('#inputEmail'),
    inputJourNais: $('#inputJourNais'),
    inputMoisNais: $('#inputMoisNais'),
    inputAnNais: $('#inputAnNais'),
    inputMotPasse: $('#inputMotPasse'),
    inputConfMotPasse: $('#inputConfMotPasse'),
    // TODO: autres champs...
  };

	// associe une fonction de verifie a chaque field
  var Checker = {
    inputNom: { fun: checkName, data: [Fields.inputNom]},
    inputPrenom: { fun: checkName, data: [Fields.inputPrenom]},
    inputEmail: { fun: checkMail, data: [Fields.inputEmail]},
    inputJourNais: { fun: checkDate, data: [Fields.inputJourNais,Fields.inputMoisNais,Fields.inputAnNais]},
    inputMoisNais: { fun: checkDate, data: [Fields.inputJourNais,Fields.inputMoisNais,Fields.inputAnNais]},
    inputAnNais: { fun: checkDate, data: [Fields.inputJourNais,Fields.inputMoisNais,Fields.inputAnNais]},
    inputMotPasse: { fun: checkPasswords, data: [Fields.inputMotPasse, Fields.inputConfMotPasse]},
    inputConfMotPasse: { fun: checkPasswords, data: [Fields.inputMotPasse, Fields.inputConfMotPasse]},
    // TODO: autres checkers...
  };

  // Listeners
  // lance une fonction de verification sur tous les champs
  $.each(Fields, function(index, element) {
    element.change(function() {
      var checker = Checker[index];
      var data = $(checker.data).map((idx, el) => el.val());
      if (checker.fun.apply(this, data)) {
        Feedback.validate(checker.data);
      } else {
        Feedback.invalidate(checker.data);
      }
      Feedback.progress();
    });
  });

  // Submit form
  // fonction empechant l'envoi du formulaire
  $('#sign').submit(function(event) {
    event.preventDefault();
    console.log('TODO: verifier si tout est OK !');
    // TODO: envoyer si tout est OK
  });
  
  
  
	/// ** Affichage de la force du mot de passe a chaque appui sur le clavier *//
	Fields.inputMotPasse.keyup( function() {
		var retour = checkPasswdStrength($(this).val());
		$('#forceMotPasse').removeClass($('#forceMotPasse').attr('class'));
		$('#texteForceMotPasse').removeClass($('#texteForceMotPasse').attr('class'));
		if(retour==0) {
			$('#forceMotPasse').css('width','40%');
			$('#forceMotPasse').addClass('progress-bar bg-danger');
			$('#texteForceMotPasse').addClass('text-danger');
			$('#texteForceMotPasse').text("Mot de passe invalide.");
		}
		else if(retour==1) {
			$('#forceMotPasse').css('width','70%');
			$('#forceMotPasse').addClass('progress-bar bg-warning');
			$('#texteForceMotPasse').addClass('text-warning');
			$('#texteForceMotPasse').text("Force du mot de passe faible.");
		}
		else {
			$('#forceMotPasse').css('width','100%');
			$('#forceMotPasse').addClass('progress-bar bg-success');
			$('#texteForceMotPasse').addClass('text-success');
			$('#texteForceMotPasse').text("Force du mot de passe excellente.");
		}
	});
	
	/// ** Affichage des champs invalides avant l'envoi du formulaire d'inscription *//
	$('#boutonInscription').click( function() {
		// Recuperation des champs non validés
		// Sauf la checkbox et le bouton d'envoi
		champs_non_valides = $('#sign').find(':input').not('.is-valid').not('.form-check-input').not('.btn');
		if(champs_non_valides.length>0)
			Feedback.error([champs_non_valides]);
		// Si tous les champs sont valides,
		// On vérifie la checkbox
		else if($('#confInscr').not(':checked'))
			Feedback.error([$('#confInscr')]);
	});
});
