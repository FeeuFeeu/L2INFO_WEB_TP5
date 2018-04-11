$(document).ready(function() {

  // Utils
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
    }
  };

  var Fields = {
    name1: $('#name1'),
    // TODO: autres champs...
  };

  var Checker = {
    name1: { fun: checkName, data: [Fields.name1]},
    // TODO: autres checkers...
  };

  // Listeners
  $.each(Fields, function(index, element) {
    element.change(function() {
      var checker = Checker[index];
      var data = $(checker.data).map((idx, el) => el.val());
      if (checker.fun.apply(this, data)) {
        Feedback.validate(checker.data);
      } else {
        Feedback.invalidate(checker.data);
      }
    });
  });

  // Submit form
  $('#sign').submit(function(event) {
    event.preventDefault();
    console.log('TODO: verifier si tout est OK !');
    // TODO: envoyer si tout est OK
  });
});
