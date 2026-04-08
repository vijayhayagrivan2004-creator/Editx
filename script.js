// SMOOTH SCROLL (LENIS)
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// GSAP HERO ANIMATION
gsap.from("#title", {
  y:100,
  opacity:0,
  duration:1.2
});

gsap.from("#subtitle", {
  y:50,
  opacity:0,
  delay:0.3
});

gsap.from(".buttons a", {
  y:30,
  opacity:0,
  stagger:0.2,
  delay:0.5
});


// 3D TILT
const img = document.getElementById("tilt");

document.addEventListener("mousemove",(e)=>{
  let x = (window.innerWidth/2 - e.clientX)/25;
  let y = (window.innerHeight/2 - e.clientY)/25;
  img.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});