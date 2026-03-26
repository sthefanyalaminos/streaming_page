// Definir temas (cores para dark e light)
const themes = {
    dark: {
        bgColor: '#0f0f0f',
        textColor: '#ffffff',
        buttonBg: 'rgba(255, 255, 255, 0.12)',
        buttonColor: '#ffffff',
        buttonBorder: 'rgba(255, 255, 255, 0.16)'
    },
    light: {
        bgColor: '#ffffff',
        textColor: '#0f0f0f',
        buttonBg: 'rgba(0, 0, 0, 0.08)',
        buttonColor: '#0f0f0f',
        buttonBorder: 'rgba(0, 0, 0, 0.12)'
    }
};

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para aplicar tema
const applyTheme = (themeName) => {
    const theme = themes[themeName];
    body.style.backgroundColor = theme.bgColor;
    body.style.color = theme.textColor;
    
    themeToggle.style.background = theme.buttonBg;
    themeToggle.style.color = theme.buttonColor;
    themeToggle.style.border = `1px solid ${theme.buttonBorder}`;
    themeToggle.style.marginTop = '1rem';
    themeToggle.style.borderRadius = '9999px';
    themeToggle.style.padding = '0.5rem 1rem';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.transition = 'background-color 0.25s ease, transform 0.2s ease';
    
    // Atualizar texto do botão
    themeToggle.textContent = themeName === 'light' ? 'Modo Escuro' : 'Modo Claro';
};

// Efeito hover do botão
themeToggle.addEventListener('mouseenter', () => {
    themeToggle.style.transform = 'translateY(-1px)';
    themeToggle.style.background = 'rgba(255,255,255,0.2)';
});

themeToggle.addEventListener('mouseleave', () => {
    themeToggle.style.transform = 'translateY(0)';
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const theme = themes[savedTheme];
    themeToggle.style.background = theme.buttonBg;
});

// Carregar tema salvo ou padrão (dark)
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

// Trocar tema ao clicar
themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});
