$(document).ready(function() {

 /* NAV MENU BTN
* -------------------------------------------------- */
  $('.navbar .menu__btn').click(function(e) {
    $(this).toggleClass('open');
    e.stopPropagation();

    if($(this).hasClass('open')){
      $('.navbar .nav__menu').addClass('nav__open');
      $('body').addClass('overlay');
    } else {
      $('.navbar .nav__menu').removeClass('nav__open');
      $('body').removeClass('overlay');
    }
  })

  $('.navbar .nav__menu a').click(function() {
    $('.navbar .menu__btn').removeClass('open');
    $('.navbar .nav__menu').removeClass('nav__open');
    $('body').removeClass('overlay');
  });

  $(document).on("click", function(e) {
    if ($(e.target).is(".nav__menu ") === false) {
      $(".nav__menu ").removeClass("nav__open");
      $('body').removeClass('overlay');
      $('.navbar .menu__btn').removeClass('open');
    }
  });

  /* MATCH HEIGHT
* -------------------------------------------------- */
  const eventtsInfo = $('.events__list .events__info');

  const matchHeight = (elemSelector) => {
    let maxHeight = 0;
    elemSelector.each(function(){
      const thisHeight = $(this).height();
      if (thisHeight > maxHeight) maxHeight = thisHeight;
  });
  elemSelector.css("height", maxHeight);  
  }

  matchHeight(eventtsInfo);

})

  /* SLICK JS
* -------------------------------------------------- */



$( window ).resize(function() {
  matchHeight(eventtsInfo);
});