(function ($) {
  $('#hamburgerMenu').click(function (event) {
    event.preventDefault()
    $('#menu').toggleClass('menu-visible')
  })
})($)

// Modal images
(function ($) {
  $('img').click(function (event) {
    const imageTarget = $(event.target);
    $('.modal').addClass('modal-show');
     $('.modal-image').attr('src', imageTarget.attr('data-url'));
      //  $('.modal-image').attr('src', imageTarget.attr('src'));
  });

  $('.close-btn').click(function () {
        $('.modal').removeClass('modal-show');
  })
})($);
