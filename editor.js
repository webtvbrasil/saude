// script.js


document.addEventListener('DOMContentLoaded', function() {
    // ID do Vídeo do YouTube
    const videoId = 'qYC2IBnF48s'; // Substitua pelo novo ID do vídeo

    const titulo = 'Reverta sua <span class="orange-text">Diabetes Tipo 2</span> de forma natural!';

    // Link do Botão de Checkout
    const checkoutLink = 'https://pay.kiwify.com.br/4K0A9aJ'; // Substitua pelo novo link de checkout

    // Link do WhatsApp de Suporte
    const whatsappLink = 'https://wa.me/5547992691983'; // Substitua pelo novo número de WhatsApp

    const titulo = document.querySelector('.headline');
    if (titulo) {
        titulo.textContent = titulo;
    }

    // 1. Alterar o ID do Vídeo
    const videoIframe = document.querySelector('.video-container iframe');
    if (videoIframe) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
    }

    // 2. Alterar o Link do Botão de Checkout
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = checkoutLink;
        });
    });

    // 3. Alterar o Link do WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.href = whatsappLink;
    }
});

