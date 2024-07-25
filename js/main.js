let valueDisplays = document.querySelectorAll(".num");
let interval = 900;
valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
    clearInterval(counter);
    }
}, duration);
});



// // const navEl = document.querySelector('.navbar');
// // const navEla = document.querySelector('nav-link');

// // window.addEventListener('scroll',() =>{ 
// //   if(window.scrollY>= 800){
// //     // navEla.classList.add('text-dark'),
// //     navEla.classList.remove('text-white'),
// //     navEl.classList.add('position-fixed'),
// //     console.log("it works")
// //     navEl.classList.add('bg-white'),
// //     navEl.classList.remove('bg-transparent'),
// //     navEl.classList.add('navbar-scrolled')
// //   }else{
// //     // navEla.classList.remove('text-dark'),
// //     navEla.classList.add('text-white'),
// //     navEl.classList.remove('navbar-scrolled'),
// //     navEl.classList.add('bg-transparent'),
// //     // navEl.classList.remove('fixed-top'), 
// //     navEl.classList.remove('position-fixed')
// //   }
// // } );
// // Cache the DOM elements
// const navbar = document.querySelector('.navbar');
// const navLink = document.querySelector('.nav-link');

// // Define the scroll threshold as a constant
// const SCROLL_THRESHOLD = 800;

// // Throttle function to limit the number of times the scroll event is handled
// function throttle(fn, wait) {
//   let lastCall = 0;
//   return function(...args) {
//     const now = (new Date).getTime();
//     if (now - lastCall < wait) {
//       return;
//     }
//     lastCall = now;
//     return fn(...args);
//   };
// }

// // Scroll handler function
// function handleScroll() {
//   const hasScrolledPastThreshold = window.scrollY >= SCROLL_THRESHOLD;

//   navLink.classList.toggle('text-white', !hasScrolledPastThreshold);
//   navLink.classList.toggle('text-dark', hasScrolledPastThreshold);

//   navbar.classList.toggle('position-fixed', hasScrolledPastThreshold);
//   navbar.classList.toggle('bg-white', hasScrolledPastThreshold);
//   navbar.classList.toggle('bg-transparent', !hasScrolledPastThreshold);
//   navbar.classList.toggle('navbar-scrolled', hasScrolledPastThreshold);

//   console.log("Scroll event handled");
// }

// // Add throttled scroll event listener
// window.addEventListener('scroll', throttle(handleScroll, 100));

