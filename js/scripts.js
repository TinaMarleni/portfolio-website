(function ($){
$('#hamburgerMenu').click(function(event){
  event.preventDefault();
$('#menu').toggleClass('menu-visible');
});
})($);
