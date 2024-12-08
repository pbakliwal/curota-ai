
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
let offset = menu.offsetHeight;

window.onscroll = function() {
    if (window.scrollY > offset-10) {
        menu.classList.add("sticky");
    } else if(window.scrollY < offset-20) {
        menu.classList.remove("sticky");
    }
}

/* carousel js*/
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.annotation-item');
  const prevBtn = document.querySelector('.carousel-button.prev');
  const nextBtn = document.querySelector('.carousel-button.next');
  const indicators = document.querySelector('.carousel-indicators');
  let currentIndex = 0;

  function createIndicators() {
    items.forEach((_, index) => {
      const button = document.createElement('button');
      button.classList.add('indicator');
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-label', `Slide ${index + 1}`);
      button.onclick = () => goToSlide(index);
      indicators.appendChild(button);
    });
    updateIndicators();
  }

  function updateIndicators() {
    const dots = document.querySelectorAll('.indicator');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
      dot.setAttribute('aria-selected', index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    const offset = items[index].offsetLeft;
    container.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
    updateIndicators();
  }

  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(currentIndex);
  };

  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % items.length;
    goToSlide(currentIndex);
  };

  container.addEventListener('scroll', () => {
    const index = Math.round(container.scrollLeft / container.offsetWidth);
    if (currentIndex !== index) {
      currentIndex = index;
      updateIndicators();
    }
  });

  createIndicators();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
});