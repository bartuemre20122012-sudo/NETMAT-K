// ==========================================
// NetMatik - Saf & Çoklu Yapı Uyumlu JS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
    // Dersler alt klasöründe miyiz kontrol et
    const isSubFolder = window.location.pathname.includes('/dersler/');

    // Otomatik Favicon
    const faviconPath = isSubFolder 
        ? '../../assets/Gemini_Generated_Image_-Photoroom.png' 
        : 'assets/Gemini_Generated_Image_-Photoroom.png';
        
    let faviconLink = document.querySelector("link[rel*='icon']");
    if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.type = 'image/png';
        document.head.appendChild(faviconLink);
    }
    faviconLink.href = faviconPath;
});
// PDF ve Bağlantı Kontrolcüsü (Eksik dosyaları 404 sayfasına yönlendirir)
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Sadece yerel dosya ve PDF linklerini denetle
        if (href && !href.startsWith('http') && !href.startsWith('javascript') && !href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                // PDF veya konu linkine tıklandığında arka planda varlığını test et
                fetch(href, { method: 'HEAD' })
                    .then(response => {
                        if (!response.ok) {
                             e.preventDefault();
                             window.location.href = '404.html';
                        }
                    })
                    .catch(() => {
                        // Yerel ortamda file:// erişim hatası olursa veya dosya yoksa 404'e at
                        // (Not: Sitemizi sunucuya / Vercel / GitHub Pages'e yüklediğimizde bu 404 otomatik çalışır)
                    });
            });
        }
    });
});