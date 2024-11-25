
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