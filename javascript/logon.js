
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
    $('.error').remove();
    var errorMessage = '';
    var logonError = false;
    var passwordError = false;
    if ($('#username').val() != 'VladTheValid') {
      logonError = true;
      errorMessage = 'Invalid Username ';
    }
    if ($('#password').val() != 'abc123') {
      if (logonError) {
        console.log('error here');
        errorMessage = errorMessage.concat('and Password Entered');
      } else {
        passwordError = true;
        errorMessage = "Invalid Password Entered";
      }
    }
    if (logonError  || passwordError) {
      $('#login').prepend('<div class="error">' + errorMessage +'</div>');
    } else {
      window.location.replace('welcome/#0');
    }
    e.preventDefault();
  })
})

