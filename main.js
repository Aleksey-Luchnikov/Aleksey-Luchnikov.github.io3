function myFunction() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}

function backToTop() {
   let button = $('.back-to-top');

   $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 600) {
         button.fadeIn();
      } else {
         button.fadeOut();
      }
   });

   button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 1000);
   })
}

backToTop();
