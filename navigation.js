document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Navigation script loaded');

    const pages = [
        'index.html',
        'business-plan.html',
        'operations.html',
        'optimization.html',
        'trade-benefits.html',
        'growth-and-impact.html',
        'contact.html'
    ];

    const currentPage = window.location.pathname.split('/').pop();
    console.log('Current page:', currentPage);

    const currentIndex = pages.indexOf(currentPage);
    console.log('Current page index:', currentIndex);

    const prevPage = document.querySelector('.prev-page');
    const nextPage = document.querySelector('.next-page');

    if (prevPage) {
        if (currentIndex > 0) {
            prevPage.href = pages[currentIndex - 1];
            prevPage.style.display = 'inline-block';
            console.log('Previous page set to:', pages[currentIndex - 1]);
        } else {
            prevPage.style.display = 'none';
            console.log('No previous page available');
        }
    }

    if (nextPage) {
        if (currentIndex < pages.length - 1 && currentIndex !== -1) {
            nextPage.href = pages[currentIndex + 1];
            nextPage.style.display = 'inline-block';
            console.log('Next page set to:', pages[currentIndex + 1]);
        } else {
            nextPage.style.display = 'none';
            console.log('No next page available');
        }
    }

    // Smooth scrolling for TOC links
    document.querySelectorAll('#TOC a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});