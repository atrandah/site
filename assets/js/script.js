document.addEventListener("DOMContentLoaded", function () {
  // navbar background on scroll
  window.addEventListener("scroll", function () {
    const navigation = document.querySelector(".site-navigation");
    if (window.scrollY >= 100) {
      navigation.classList.add("nav-bg");
    } else {
      navigation.classList.remove("nav-bg");
    }
  });

  // testimonial item interaction
  const testimonials = document.querySelectorAll(".site-testimonial-item");
  testimonials.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      testimonials.forEach((el) => {
        el.classList.add("inactive");
        el.classList.remove("active");
      });
      this.classList.remove("inactive");
      this.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      testimonials.forEach((el) => {
        el.classList.remove("inactive");
        el.classList.remove("active");
      });
    });
  });
});
