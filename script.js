let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
const counters = document.querySelectorAll('.counter');
const speed = 200; // Speed jitna kam hoga animation utna fast hoga

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    // Intersection Observer to start animation when visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting){
            updateCount();
        }
    }, { threshold: 0.5 });

    observer.observe(counter);
});