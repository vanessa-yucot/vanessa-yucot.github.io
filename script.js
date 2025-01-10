// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth'
    });
}

// Form submission handling with enhanced validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const inputs = this.querySelectorAll('input, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff4444';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });

    if (isValid) {
        alert('Thank you for your booking request. Our team will contact you shortly to confirm your appointment.');
        this.reset();
        inputs.forEach(input => input.style.borderColor = '#e0e0e0');
    }
});

// Enhanced navbar background change on scroll with smooth transition
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.98)';
        nav.style.padding = '15px 80px';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.padding = '20px 80px';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    }
});




function openLogin(){
    document.querySelector('.login-container').style.visibility = 'visible';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  function openSignup(){
    document.querySelector('.signup-container').style.visibility = 'visible';
    document.querySelector('.login-container').style.visibility = 'hidden';
    
  }
  function close() {
    document.querySelector('.login-container').style.visibility = 'hidden';
    document.querySelector('.signup-container').style.visibility = 'hidden';
    
  }
  
  // Adding the event listener to call the close function when #close-btn is clicked
  document.querySelector('#close-btn').addEventListener('click', close);
  document.querySelector('#close-btn1').addEventListener('click', close);

  // Adding the event listener to custom-signup-btn to open function openSignup()
  document.querySelector('.custom-signup-btn').addEventListener('click', openSignup);

  
// Adding the event listener to custom-signup-btn to open function openSignup()


document.getElementById('signin').addEventListener('click', function(event) {
  event.preventDefault();  
  openLogin();
});

document.getElementById('signup').addEventListener('click', function(event) {
  event.preventDefault();  
  openSignup();
});