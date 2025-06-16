
// Toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                let activeLink = document.querySelector("header nav a[href*=" + id + "]");
                if (activeLink) activeLink.classList.add("active");
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // Remove toggle icon and navbar on scroll
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

// ScrollReveal animations
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay :200
});

ScrollReveal().reveal('.services h2, .heading',{origin:'top'}); 


ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay :200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'}); 




// Typed.js
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "MERN Stack Developer", "Backend Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
          alert('Message sent successfully!');
          this.reset();
      }, (error) => {
          alert('FAILED to send message. Try again later.', error);
      });
  });



