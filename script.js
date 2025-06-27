// Timer do Botão
let timer = 70;
const timerElement = document.getElementById('timer');
const ctaButton = document.getElementById('ctaButton');

const countdown = setInterval(function() {
    timer--;
    timerElement.innerText = timer;

    if (timer <= 0) {
        clearInterval(countdown);
        ctaButton.innerText = 'Quero meu livro com desconto agora';
        ctaButton.disabled = false;
    }
}, 1000);

// Contador de Pessoas Assistindo
let pessoasAssistindo = 50;
const pessoasAssistindoElement = document.getElementById('pessoasAssistindo');

const aumentarPessoas = setInterval(function() {
    pessoasAssistindo += Math.floor(Math.random() * 10) + 1;
    if (pessoasAssistindo > 1150) {
        clearInterval(aumentarPessoas);
        pessoasAssistindoElement.innerText = '1150+';
    } else {
        pessoasAssistindoElement.innerText = pessoasAssistindo;
    }
}, 2000);

// FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Chat Fake
const chatMessages = document.querySelector('.chat-messages');
const messages = [
    "Olá! Alguém sabe se o manual realmente funciona?",
    "Eu comprei e estou adorando! Minha glicemia está controlada.",
    "Estou pensando em comprar, mas tenho medo de não funcionar para mim.",
    "Pode confiar! O manual é muito bom e tem garantia de 7 dias.",
    "Alguém já conseguiu reverter a diabetes com o manual?",
    "Eu ainda não reverti, mas estou seguindo as dicas e me sentindo muito melhor.",
    "Onde encontro o manual para comprar?",
    "É só clicar no botão abaixo do vídeo!",
    "Gente! Que livro maravilhoso...",
    "Pessoal estou lendo o livro agora, por enquanto estou gostando",
];

let i = 0;
setInterval(() => {
    const message = document.createElement('p');
    message.innerText = messages[i];
    chatMessages.appendChild(message);
    i = (i + 1) % messages.length;

    chatMessages.scrollTop = chatMessages.scrollHeight;
}, 3000);

// Notificações Fake
const notificationContainer = document.querySelector('.notification-container');
const names = ["Maria", "João", "Ana", "Pedro", "Carla", "Lucas", "Julia", "Ricardo"];

setInterval(() => {
    const name = names[Math.floor(Math.random() * names.length)];
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = `${name} acaba de adquirir o Manual de Reversão da Diabetes Tipo 2!`;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 5000);
}, 10000);

document.addEventListener('DOMContentLoaded', function() {
    // ID do Vídeo do YouTube
    const videoId = 'qYC2IBnF48s'; // Substitua pelo novo ID do vídeo

    const titulo = '0000000';

    // Link do Botão de Checkout
    const checkoutLink = 'https://pay.kiwify.com.br/4K0A9aJ'; // Substitua pelo novo link de checkout

    // Link do WhatsApp de Suporte
    const whatsappLink = 'https://wa.me/5547992691983'; // Substitua pelo novo número de WhatsApp

    const titulo = document.querySelector('.headline');
    if (titulo) {
        titulo.textContent = `Reverta sua <span class="orange-text">Diabetes Tipo 2</span> de forma natural!`;
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

