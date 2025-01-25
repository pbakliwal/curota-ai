
document.getElementById("emailForm").addEventListener('submit', function (event) {
    event.preventDefault();
    const name1 = document.getElementsByName("name").value
    const email1 = document.getElementsByName("email").value;
    const description = document.getElementsByName("message").value;

});

document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('message').value;     

    var templateParams = {
        from_name: name,
        from_email: email,
        message:description
      };
      
      emailjs.send('service_8h52r8h', 'template_zpclgwf', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Message sent");
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
});

let menu = document.getElementById('menu');
let heroSection = document.querySelector('.hero-container-1');
let heroOffset = heroSection.offsetHeight;
let lastScrollY = window.scrollY;
let isSticky = false;
let stickyTimeout;

window.onscroll = function() {
    let currentScrollY = window.scrollY;

    if (currentScrollY > heroOffset) {
        if (currentScrollY < lastScrollY) {
            // Scrolling up
            if (!isSticky) {
                menu.classList.add("sticky");
                isSticky = true;
                clearTimeout(stickyTimeout);
                stickyTimeout = setTimeout(() => {
                    if (window.scrollY > heroOffset) {
                        menu.classList.remove("sticky");
                        isSticky = false;
                    }
                }, 3000);
            }
        } else {
            // Scrolling down
            if (isSticky) {
                menu.classList.remove("sticky");
                isSticky = false;
                clearTimeout(stickyTimeout);
            }
        }
    } else {
        menu.classList.add("sticky");
        isSticky = true;
        clearTimeout(stickyTimeout);
    }

    lastScrollY = currentScrollY;
};

/* carousel js*/
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.cards-container');
  const cards = container.children;
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const progressBar = document.querySelector('.progress-bar');
  
  let currentIndex = 0;
  const totalSlides = cards.length;
  const slideWidth = cards[0].offsetWidth + 25;
  
  function updateCarousel() {
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    const progress = ((currentIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    
    Array.from(cards).forEach((card, index) => {
      card.setAttribute('aria-hidden', index !== currentIndex);
    });
  }
  
  function moveNext() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  }
  
  function movePrev() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') movePrev();
    if (e.key === 'ArrowRight') moveNext();
  });
  
  let touchStartX = 0;
  let touchEndX = 0;
  
  container.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  container.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) moveNext();
    if (touchStartX - touchEndX < -50) movePrev();
  });
  
  updateCarousel();
});