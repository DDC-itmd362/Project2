// Give up the $ sign
// $.noConflict();

$(function($) {
  $(document).ready(
    function() {
      $('html').removeClass('nojs')
      $('html').addClass('hasjs')
    }
  );


  $('#input-password').append('<a id="show-password" href="#null">Show Password</a>');
  $('#show-password').on('mousedown', function(e) {
    $('#password').attr('type','text');
    e.preventDefault();
  });
  $('#show-password').on('mouseup', function(e) {
    $('#password').attr('type','password');
    e.preventDefault();
  });


})
