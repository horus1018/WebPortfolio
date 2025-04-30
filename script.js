
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });




    const text = "IT Student | Future Cybersecurity Expert";
let index = 0;
const typingTarget = document.querySelector(".hero p");

function typeEffect() {
  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      typingTarget.textContent = "";
      index = 0;
      typeEffect();
    }, 2000); // Wait 2 seconds before restarting
  }
}

typingTarget.textContent = "";
typeEffect();


    





    const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transition = "opacity 1s ease-out";
  observer.observe(section);
});

const fadeInStyle = document.createElement("style");
fadeInStyle.innerHTML = `
  .fade-in {
    opacity: 1 !important;
  }
`;
document.head.appendChild(fadeInStyle);


// ============ Image Modal for Projects and Quizzes ============
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalCaption = document.querySelector(".modal-caption");
const closeBtn = document.querySelector(".close-btn");

// Target all cards
document.querySelectorAll(".card").forEach(card => {
  const img = card.querySelector("img");
  const caption = card.querySelector("p");

  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalCaption.textContent = caption.textContent;
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//================= background =================

  window.addEventListener("load", function () {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    setTimeout(() => {
      hero.style.animation = 'fadeHero 1.5s ease-out forwards';
    }, 100); 
  });

//---------------------------------
// Image Modal for Projects and Quizzes
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-img");
const modalCaption = document.querySelector(".modal-caption");
const closeBtn = document.querySelector(".close-btn");

// Target all project cards
document.querySelectorAll(".card").forEach(card => {
  const img = card.querySelector("img");
  const caption = card.querySelector("p");

  card.addEventListener("click", () => {
    modal.style.display = "block"; // Show the modal
    modalImg.src = img.src;       // Set the modal image source to the clicked image
    modalCaption.textContent = caption.textContent; // Set the caption to the clicked card's caption
  });
});

// Close modal when clicking on the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});

// Close modal when clicking outside the modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"; // Hide the modal if clicking outside
  }
});
