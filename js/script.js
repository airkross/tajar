// появление навбара
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() - 10);
	});
});
