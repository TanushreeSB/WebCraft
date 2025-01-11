const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

function toggleChatbot() {
    const chatbotBody = document.getElementById('chatbot-body');
    chatbotBody.style.display = chatbotBody.style.display === 'block' ? 'none' : 'block';
}

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const userMessage = userInput.value.trim();
    const chatbotMessages = document.getElementById('chatbot-messages');

    if (userMessage) {
        chatbotMessages.innerHTML += `<div class="message user-message">${userMessage}</div>`;
        userInput.value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            chatbotMessages.innerHTML += `<div class="message bot-message">${botResponse}</div>`;
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500);
    }
}

// Generate bot response based on user input
function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi! How can I assist you today?",
        "are-rooms-available?": "We have deluxe and suite rooms available.",
        "which-amenities-are-present?": "Our resort offers a pool, spa, gym, and free Wi-Fi.",
        "check-in time": "Check-in time is 2 PM.",
        "check-out time": "Check-out time is 11 AM.",
        "bye": "Goodbye! Have a great day!"
    };

    userMessage = userMessage.toLowerCase();
    return responses[userMessage] || "I'm sorry, I didn't understand that. Can you rephrase?";
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}

window.onscroll = function() {
    const backToTopBtn = document.getElementById("back-to-top");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};
