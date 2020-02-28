var btn = $("#top-button");
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
});
btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
  $(".navbar-nav--custom li")
    .siblings("li")
    .removeClass("active");
});

/* ----------- */

var navbarheight = 5;
if (window.innerWidth < 992) {
  navbarheight = 90;
} else {
  navbarheight = 5;
}
window.onresize = function() {
  if (window.innerWidth < 992) {
    navbarheight = 90;
  } else {
    navbarheight = 5;
  }
};
$(document).on("click", "a.scroll", function(e) {
  e.preventDefault();
  console.log(navbarheight);
  var id = $(this).attr("href"),
    topSpace = $(".lesson-header").scrollTop();
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - topSpace - navbarheight
    },
    1000
  );
});
/* ------ */

$(document).ready(function() {
  $(".navbar-nav--custom li").click(function() {
    $(this)
      .siblings("li")
      .removeClass("active");
    $(this).addClass("active");
  });
});
