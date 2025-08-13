document.addEventListener('DOMContentLoaded', function() {
    
    const carousel = document.querySelector('.stories-carousel');
    const cards = document.querySelectorAll('.story-card');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const counter = document.querySelector('.carousel-counter');
    
    let currentIndex = 0;
    
    
    function showSlide(index) {
        cards.forEach(card => card.classList.remove('active'));
        
        currentIndex = index;
        cards[currentIndex].classList.add('active');
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        
        counter.textContent = `${currentIndex + 1}/${cards.length}`;
    }
    
    
    function prevSlide() {
        const newIndex = (currentIndex - 1 + cards.length) % cards.length;
        showSlide(newIndex);
    }
    
    
    function nextSlide() {
        const newIndex = (currentIndex + 1) % cards.length;
        showSlide(newIndex);
    }
    
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    showSlide(0);
    
    
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
            }
        });

        
        item.classList.toggle('open');
    });
});

    

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.background = 'var(--white)';
        }
    });
});

