(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 0);
	};
  function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}

  //  window.addEventListener('load', function() {
  //   var myModal = new bootstrap.Modal(document.getElementById('p-torino'))
  //    setTimeout(function(){
  //     myModal.show();
  //    }, 200);
  // })

	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
		var backToTo = document.querySelector(".scroll-top");
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener('click', function () {
      navbarToggler.classList.toggle("active");
  });





    /**
   * Testimonials slider
   */
     new Swiper('.abt-slider', {
      speed: 600,
       loop: false,
      //  grabCursor: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false
      // },
      slidesPerView: '1',
      // effect: "fade",
      navigation: {
        nextEl: ".btn-right",
        prevEl: ".btn-left",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },

        576: {
          slidesPerView: 1,
          spaceBetween: 0
        },

        768: {
          slidesPerView: 1,
          spaceBetween: 0
        },

        992: {
          slidesPerView: 1,
          spaceBetween: 0
        },

        1200: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });





})();
