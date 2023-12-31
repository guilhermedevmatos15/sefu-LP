export default function initSmoothScroll(paddindTop = 0, durationAnim = 2000) {
   const linksInternos = document.querySelectorAll('a[href^="#"]');

   function getDistanceFromTheTop(element) {
      const id = element.getAttribute('href');
      return document.querySelector(id).offsetTop;
   }

   function scrollToSection(event) {
      event.preventDefault();
      const distanceFromTheTop =
         getDistanceFromTheTop(event.target) - paddindTop; // ! Distancia do topo (padding)
      smoothScrollTo(0, distanceFromTheTop);
   }

   function smoothScrollTo(endX, endY, duration) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      duration = typeof duration !== 'undefined' ? duration : durationAnim; // ! Duração da animação

      const easeInOutQuart = (time, from, distance, duration) => {
         if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
         return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
         const time = new Date().getTime() - startTime;
         const newX = easeInOutQuart(time, startX, distanceX, duration);
         const newY = easeInOutQuart(time, startY, distanceY, duration);
         if (time >= duration) {
            clearInterval(timer);
         }
         window.scroll(newX, newY);
      }, 1000 / 60);
   }

   linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
   });

   // function nativeScroll(distanceFromTheTop) {
   //   window.scroll({
   //     top: distanceFromTheTop,
   //     behavior: "smooth",
   //   });
   // }
}

initSmoothScroll(115, 1400);
