document.addEventListener("DOMContentLoaded", () => {
  // === About Section Animation ===
  const aboutSection = document.getElementById('about');
if (aboutSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(aboutSection);
}


  // === Projects Section Animation ===
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, { threshold: 0.2 });
    observer.observe(projectsSection);
  }

  // === Skills Slide-in Animation for Small Screens ===
  if (window.innerWidth <= 480) {
    const skillBoxes = document.querySelectorAll('.skill-box');
    const skillObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      });
    }, { threshold: 0.3 });

    skillBoxes.forEach(box => skillObserver.observe(box));
  }

  // === Navbar Scroll Effect ===
  const navbar = document.querySelector(".navbar"); // or ".navbar1" but consistent
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("navbar-scrolled");
    } else {
      navbar?.classList.remove("navbar-scrolled");
    }
  });

  // === Typing Effect ===
  const roles = ["Web Developer", "Frontend Developer", "Software Developer"];
  let currentIndex = 0;
  const typedText = document.querySelector(".typed-text");

  if (typedText) {
    typedText.textContent = roles[currentIndex];
    typedText.classList.add("slide-in");

    setInterval(() => {
      typedText.classList.remove("slide-in");
      typedText.classList.add("slide-out");

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length;
        typedText.textContent = roles[currentIndex];
        typedText.classList.remove("slide-out");
        typedText.classList.add("slide-in");
      }, 500);
    }, 3000);
  }

  // === Modal Logic ===
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");

  window.openModal = function (type) {
    const data = {
      phone: { title: "Phone Number", content: "+917666112839" },
      email: { title: "Email Address", content: "maheshdtambade@gmail.com" }
    };
    document.getElementById("modal-title").textContent = data[type].title;
    modalContent.textContent = data[type].content;
    modal.style.display = "flex";
  };

  window.closeModal = function (event) {
    if (!event || event.target === modal || event.target.textContent === "Cancel") {
      modal.style.display = "none";
    }
  };

  window.copyToClipboard = function () {
    const text = modalContent.textContent;
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard: " + text);
    });
  };
});
