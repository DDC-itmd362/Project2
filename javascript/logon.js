
$(function($) {
  $(document).ready(
    function() {
      $('html').removeClass('nojs')
      $('html').addClass('hasjs')
    }
  );

  $('#input-password').append('<a id="show-password" href="#null">Show Password</a>');
  $('#show-password').on('click', function(e) {
    $('#password').attr('type','text');
    e.preventDefault();
  });

})
