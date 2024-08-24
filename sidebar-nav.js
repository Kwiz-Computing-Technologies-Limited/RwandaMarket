# File: sidebar-nav.js

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Sidebar navigation script loaded');

  const sidebarLinks = document.querySelectorAll('.sidebar-navigation a');
  console.log('Sidebar links found:', sidebarLinks.length);

  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').split('#')[1];
      console.log('Clicked link target:', targetId);

      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolling to:', targetId);
        
        // Update active state
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        console.log('Active link updated:', this.textContent);
      } else {
        console.log('Target element not found:', targetId);
      }
    });
  });

  // Update active state on scroll
  window.addEventListener('scroll', () => {
    let currentSection = '';
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute('id');
      }
    });

    if (currentSection) {
      console.log('Current active section:', currentSection);
      sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
          link.classList.add('active');
          console.log('Active sidebar link:', link.textContent);
        }
      });
    }
  });
});