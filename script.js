  gsap.registerPlugin(ScrollTrigger);

// Set initial state (optional but recommended)
gsap.set(".card", {
  opacity: 0.1,
  y: 20
});

// Enhanced animation
gsap.to(".card", {
  duration: 3,
  ease: "back.out(1.2)",   
  rotation: 8,
  opacity: 1,              
  y: 0,                   
  scale: 1.05,             
  filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.41))",  
  scrollTrigger: {
    trigger: ".card-area",
    start: "top 80%",     
    end: "bottom 20%",
    scrub: 1.5,           
    markers: false
  }
});