
    $(document).ready(function () {
      $(window).scroll(function () {
        if (scrollY > 100) {
          $('header').addClass('top-0');
          $('header').addClass('sticky');
          $('header').addClass('bg-white');
          $('header').addClass('ani');
          $('.menu-one').addClass('text-black');
          $('.menu-two').addClass('text-black');
          $('.m-icon').addClass('text-black');
         s
        }
        else {
          $('header').removeClass('sticky');
          $('header').removeClass('top-0');
          $('header').removeClass('bg-white');
          $('header').removeClass('text-black');
          $('header').removeClass('ani1');
          $('.menu-one').removeClass('text-black');
          $('.menu-two').removeClass('text-black');

        }
      });

    });
  