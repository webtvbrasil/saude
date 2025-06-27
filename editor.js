// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ID do Vídeo do YouTube
    const videoId = 'NOVO_ID_DO_VIDEO'; // Substitua pelo novo ID do vídeo

    // Link do Botão de Checkout
    const checkoutLink = 'https://SEU_LINK_DE_CHECKOUT'; // Substitua pelo novo link de checkout

    // Link do WhatsApp de Suporte
    const whatsappLink = 'https://wa.me/SEU_NUMERO_WHATSAPP'; // Substitua pelo novo número de WhatsApp

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
