// script.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('semaineDecouvertePopup');
    const popupContent = document.querySelector('.popup-content');
    const closeBtn = document.querySelector('.close-btn');
    const ctaBtn = document.querySelector('.cta-btn');
    
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 2000);
    
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    popup.addEventListener('click', function(event) {
        if (event.target === popup || event.target === closeBtn) {
            popup.style.display = 'none';
        }
    });

    popupContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    ctaBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    setTimeout(() => {
        popup.style.display = 'none';
    }, 12000);

    document.body.addEventListener('click', function(event) {
        if (event.target === document.body && event.target !== closeBtn) {
            popup.style.display = 'none';
        }
    });

    document.body.addEventListener('click', function(event) {
        if (event.target === document.body) {
            popup.style.display = 'none';
        }
    });
    
    popupContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    ctaBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    setTimeout(() => {
        popup.style.display = 'none';
    }, 12000);
});
