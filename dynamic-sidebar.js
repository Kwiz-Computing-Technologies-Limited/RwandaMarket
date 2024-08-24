# File: dynamic-sidebar.js

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Dynamic sidebar script loaded');

  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
  console.log('Current page:', currentPage);

  const sidebarSections = document.querySelectorAll('.sidebar-navigation > ul > li');
  console.log('Sidebar sections found:', sidebarSections.length);

  sidebarSections.forEach(section => {
    const sectionLink = section.querySelector('a');
    const sectionId = sectionLink.getAttribute('href').split('.')[0];
    console.log('Section ID:', sectionId);

    if (sectionId === currentPage) {
      section.classList.add('active');
      const submenu = section.querySelector('ul');
      if (submenu) {
        submenu.style.display = 'block';
        console.log('Submenu displayed for:', sectionId);
      }
    } else {
      section.classList.remove('active');
      const submenu = section.querySelector('ul');
      if (submenu) {
        submenu.style.display = 'none';
        console.log('Submenu hidden for:', sectionId);
      }
    }

    // Add click event listener to main menu items
    sectionLink.addEventListener('click', (e) => {
      e.preventDefault();
      sidebarSections.forEach(s => {
        s.classList.remove('active');
        const subm = s.querySelector('ul');
        if (subm) subm.style.display = 'none';
      });
      section.classList.add('active');
      const subm = section.querySelector('ul');
      if (subm) subm.style.display = 'block';
    });
  });
});