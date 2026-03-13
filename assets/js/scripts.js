/* Menu Mobile */
const nav = document.getElementById('navigation');
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir Menu
menuToggle.addEventListener('click', () => {
    nav.classList.add('show');
});

// Fechar Menu
closeBtn.addEventListener('click', () => {
    nav.classList.remove('show');
});

// Fechar menu ao clicar em um link (UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

/* Header Flutuante & Back to Top Button */
const header = document.getElementById('header');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // Header
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to Top Button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* --- Configuração do Tema (Dark/Light Mode) --- */
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIconLight = document.getElementById('theme-icon-light');
const themeIconDark = document.getElementById('theme-icon-dark');

// Função para definir o tema e atualizar ícones
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('portfolio-theme', themeName);
    
    if (themeName === 'dark') {
        themeIconLight.style.display = 'block'; // Mostra o Sol
        themeIconDark.style.display = 'none';   // Esconde a Lua
    } else {
        themeIconLight.style.display = 'none';  // Esconde o Sol
        themeIconDark.style.display = 'block';  // Mostra a Lua
    }
}

// Inicializar Tema (Verificar local storage ou preferência do sistema)
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Botão de alternar tema
themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});


/* --- Animações de Scroll (Intersection Observer) --- */
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.1, // Dispara quando 10% do elemento está visível
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Para animar apenas uma vez
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});


/* --- Typewriter Effect (Efeito Máquina de Escrever) --- */
const highlightSpan = document.querySelector('.highlight');
if (highlightSpan) {
    const textToType = "Front-end";
    highlightSpan.textContent = ''; // Limpa o texto inicial
    
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < textToType.length) {
            highlightSpan.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 150); // Velocidade de digitação
        } else {
            // Opcional: Adicionar um cursor piscando com CSS depois que terminar
            highlightSpan.style.borderRight = "2px solid var(--color-primary)";
            highlightSpan.style.animation = "blink 1s step-end infinite";
        }
    }
    
    // Inicia o efeito após um pequeno delay para dar tempo do loader/reveal acabar
    setTimeout(typeWriter, 1000); 
}