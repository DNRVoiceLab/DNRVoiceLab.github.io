document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление контента
    const animateOnLoad = () => {
        const elements = document.querySelectorAll('header, main, footer');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        setTimeout(() => {
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, 100);
    };
    
    animateOnLoad();
    
    // Подсветка активной страницы
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Плавный переход между страницами
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === currentPage) return;
            
            e.preventDefault();
            document.body.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 300);
        });
    });
    
    // Восстановление opacity после перехода
    if (performance.navigation.type === 1) {
        document.body.style.opacity = '1';
    }
});
