document.addEventListener('DOMContentLoaded', function() {
    // Animation for timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkScroll() {
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for timeline items
    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check positions on load
    checkScroll();
    
    // Check positions on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Button event listeners
    document.getElementById('people-btn').addEventListener('click', function() {
        alert("Coming soon: Learn about key figures in Microsoft's history including Bill Gates, Paul Allen, Steve Ballmer, and Satya Nadella.");
    });
    
    document.getElementById('products-btn').addEventListener('click', function() {
        alert("Coming soon: Explore the evolution of Microsoft products from Windows to Azure Cloud.");
    });
    
    document.getElementById('future-btn').addEventListener('click', function() {
        alert("Coming soon: Discover Microsoft's vision for the future in AI, cloud computing, and more.");
    });
});
