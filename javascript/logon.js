
$(function($) {
  $(document).ready(
    function() {
      $('html').removeClass('nojs')
      $('html').addClass('hasjs')
    }
  );

  $('#input-password').append('<a id="show-password" href="#null">Show Password</a>');
  $('#show-password').on('mousedown touchstart', function(e) {
    $('#password').attr('type', 'text');
    e.preventDefault();
  });
  $('#show-password').on('mouseup touchend', function(e) {
    $('#password').attr('type', 'password');
    e.preventDefault();

  });

  $('#login').on('submit', function(e) {
    if ($('#username').val() === "VladTheValid") {
      window.location.replace('welcome/#0');
    } else {
      $('#login').prepend('<div class="error"> Incorrect User name or Password </div>');
    }
    e.preventDefault();
  })
})
