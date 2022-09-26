const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(
  ".main-nav .nav-wrapper .nav-list li a"
);
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// var start = new Date("08/15/2002 07:00 PM");
// var timer;

// function age() {
//   var now = new Date();
//   var distance = (now.getTime() - start.getTime()) / 1000;

//   let y = Math.floor(distance / 31536000);
//   let mo = Math.floor((distance % 31536000) / 2628000);
//   let d = Math.floor(((distance % 31536000) % 2628000) / 86400);
//   let h = Math.floor((distance % (3600 * 24)) / 3600);
//   let m = Math.floor((distance % 3600) / 60);
//   let s = Math.floor(distance % 60);
//   document.getElementById("mrtz-age").innerHTML =
//     y + "." + mo + " yr  " + d + "." + h + " d  " + m + "." + s + " min";
// }

// timer = setInterval(age, 1000);

