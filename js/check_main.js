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
		var pourcentage = (($('.is-valid').length)/$('input').length)*100;
		$('#formProgress').css('width',pourcentage+"%");
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
		if(retour==0) {
			$('#forceMotPasse').css('width','40%');
			$('#forceMotPasse').removeClass($('#forceMotPasse').attr('class'));
			$('#forceMotPasse').addClass('progress-bar bg-danger');
			$('#texteForceMotPasse').removeClass($('#texteForceMotPasse').attr('class'));
			$('#texteForceMotPasse').addClass('text-danger');
			$('#texteForceMotPasse').text("Mot de passe invalide.");
		}
		else if(retour==1) {
			$('#forceMotPasse').css('width','70%');
			$('#forceMotPasse').removeClass($('#forceMotPasse').attr('class'));
			$('#forceMotPasse').addClass('progress-bar bg-warning');
			$('#texteForceMotPasse').removeClass($('#texteForceMotPasse').attr('class'));
			$('#texteForceMotPasse').addClass('text-warning');
			$('#texteForceMotPasse').text("Force du mot de passe faible.");
		}
		else {
			$('#forceMotPasse').css('width','100%');
			$('#forceMotPasse').removeClass($('#forceMotPasse').attr('class'));
			$('#forceMotPasse').addClass('progress-bar bg-success');
			$('#texteForceMotPasse').removeClass($('#texteForceMotPasse').attr('class'));
			$('#texteForceMotPasse').addClass('text-success');
			$('#texteForceMotPasse').text("Force du mot de passe excellente.");
		}
	});
	
	
	$('#boutonInscription').click( function() {
		$('input').each( function() {
			if(this.attr('class')=='is-invalid')
				this.
		});
	});
});
