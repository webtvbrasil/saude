document.addEventListener('DOMContentLoaded', function() {
    const videoId = 'qYC2IBnF48s';
    const tituloHtml = 'Reverta sua <span class="orange-text">Diabetes Tipo 2</span> de forma natural!';
    const checkoutLink = 'https://pay.kiwify.com.br/4K0A9aJ';
    const whatsappLink = 'https://wa.me/5547992691983';

    const tituloEl = document.querySelector('.headline');
    if (tituloEl) {
        tituloEl.innerHTML = tituloHtml; // Use innerHTML para renderizar a tag <span>
    }

    const videoIframe = document.querySelector('.video-container iframe');
    if (videoIframe) {
        videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
    }

    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = checkoutLink;
        });
    });

    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.href = whatsappLink;
    }
});
