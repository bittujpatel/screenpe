document.querySelectorAll('.accordion').forEach(item => {
    item.addEventListener('click', event => {
      const active = document.querySelector('.accordion.active');
      if (active && active !== item) {
        active.classList.remove('active');
        active.nextElementSibling.style.maxHeight = null;
      }
      item.classList.toggle('active');
      const panel = item.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.scrollIntoView({behavior: 'smooth'});
      }
    });
  });

  // Other Transition code is 

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         var active = document.querySelector(".accordion.active");
//         if (active && active != this) {
//             active.classList.remove("active");
//             active.nextElementSibling.style.maxHeight = null;
//         }
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }
