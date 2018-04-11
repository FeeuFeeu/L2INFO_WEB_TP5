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
    // A FINIR
    progress: function(_fields) {
		$('#formProgress').css('width','10%');
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
  nb_champs_valides = 0;
  $.each(Fields, function(index, element) {
    element.change(function() {
      var checker = Checker[index];
      var data = $(checker.data).map((idx, el) => el.val());
      if (checker.fun.apply(this, data)) {
        Feedback.validate(checker.data);
      } else {
        Feedback.invalidate(checker.data);
      }
      Feedback.progress(Fields);
    });
  });

  // Submit form
  // fonction empechant l'envoi du formulaire
  $('#sign').submit(function(event) {
    event.preventDefault();
    console.log('TODO: verifier si tout est OK !');
    // TODO: envoyer si tout est OK
  });
});
