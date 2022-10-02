// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);


// window.addEventListener("scroll", reveal);
$(document).ready(function () {
  $(".anim-up").attr({
    "data-aos": "fade-up",
    "data-aos-once": "false",
    "data-aos-duration": "1000",
  });
  $(".anim-down").attr({
    "data-aos": "fade-down",
    "data-aos-once": "false",
    "data-aos-duration": "1000",
  });
  $(".anim-left").attr({
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
  });

  $(".anim-right").attr({
    "data-aos": "fade-right",
    "data-aos-duration": "1000",
  });

  $(".anim-delay-100").attr({
    "data-aos-delay": "100",
  });
  $(".anim-delay-150").attr({
    "data-aos-delay": "150",
  });
  $(".anim-delay-300").attr({
    "data-aos-delay": "300",
  });
  $(".anim-delay-450").attr({
    "data-aos-delay": "450",
  });
  $(".anim-delay-600").attr({
    "data-aos-delay": "600",
  });
  $(".anim-delay-750").attr({
    "data-aos-delay": "750",
  });
  $(".anim-delay-900").attr({
    "data-aos-delay": "900",
  });

  $(".subtitle.anim-up").attr({
    "data-aos": "fade-up",
    "data-aos-once": "false",
    "data-aos-duration": "500",
  });
  $(".title.anim-up").attr({
    "data-aos": "fade-up",
    "data-aos-once": "false",
    "data-aos-duration": "500",
    "data-aos-delay": "100",
  });
  // now initialize AOS
  AOS.init();
});
