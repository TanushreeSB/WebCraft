document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '☰';
    document.querySelector('nav').prepend(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const langBtn = document.querySelector('.btn[href="#"]');
    if (langBtn && langBtn.textContent === 'EN') {
        langBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.textContent = this.textContent === 'EN' ? 'ES' : 'EN';
        });
    }

    const coins = document.querySelectorAll('.coin');
    coins.forEach(coin => {
        coin.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(255, 150, 11, 0.3)';
        });
        
        coin.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    function fetchCryptoPrices() {
        const cryptoData = [
            { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', price: getRandomPrice(35000, 45000) },
            { id: 'ethereum', symbol: 'eth', name: 'Ethereum', price: getRandomPrice(2000, 3000) },
            { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', price: getRandomPrice(0.10, 0.20) }
        ];

        cryptoData.forEach(crypto => {
            const coinElement = document.querySelector(`.coin img[src*="${crypto.id}"]`)?.parentNode;
            if (coinElement) {
                const priceElement = coinElement.querySelector('h3');
                const nameElement = coinElement.querySelector('p');
                
                if (priceElement) {
                    priceElement.textContent = `$${crypto.price.toLocaleString()}`;
                }
                if (nameElement && nameElement.textContent !== crypto.name) {
                    nameElement.textContent = crypto.name;
                }
            }
        });
    }

    function getRandomPrice(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    }

    fetchCryptoPrices();
    setInterval(fetchCryptoPrices, 30000);

    window.addEventListener('scroll', function() {
        const content = document.querySelector('.content');
        const scrollPosition = window.scrollY;
        
        if (content) {
            content.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });

    const heading = document.querySelector('.content h1');
    if (heading) {
        const originalText = heading.textContent;
        heading.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < originalText.length) {
                heading.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 100);
    }

    const exploreBtn = document.querySelector('.content .btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Exploring more features! In a real app, this would navigate to another page.');
        });
    }
});
