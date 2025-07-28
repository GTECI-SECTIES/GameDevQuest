const translations = {
    "pt-BR": {
        "portal_secties": "Portal Secties",
        "accessibility_label": "Acessibilidade",
        "increase_font": "A+",
        "decrease_font": "A-",
        "menu_sobre": "Sobre",
        "menu_eventos": "Eventos",
        "menu_fases": "Fases do Circuito",
        "menu_cronograma": "Cronograma",
        "menu_apoio": "Apoio",
        "menu_inicio": "Início",
        "hero_subtitle": "Impulsionando a indústria de jogos indie na Paraíba",
        "about_title": "O Game Dev Quest é um circuito competitivo voltado para equipes multidisciplinares que buscam aprimorar e/ou desenvolver jogos independentes.",
        "about_feature_1": "O projeto visa impulsionar a criação de um polo de jogos na Paraíba.",
        "about_feature_2": "Destinado a Programadores, designers, artistas, músicos, escritores e outros entusiastas de jogos indie do Brasil.",
        "about_feature_3": "A seleção das equipes participantes do circuito aconteceu por meio do edital nº 55/2024, SECTIES em parceria com a FAPESQ/PB.",
        "about_feature_4": "O circuito acontece entre janeiro e julho de 2025, sendo dividido em fases eliminatórias.",
        "gallery_title": "Eventos",
        "timeline_circle_text": "• Fases • do Circuito •",
        "timeline_main_title_1": "Um Novo",
        "timeline_main_title_2": "Mundo de",
        "timeline_main_title_3": "Possibilidades",
        "timeline_phase_1": "Círculo dos Visionários<br><span>Fase I</span>",
        "timeline_desc_1": "40 equipes classificadas<br>Desenvolvimento inicial do jogo",
        "timeline_phase_2": "Fábrica de Lendas<br><span>Fase II</span>",
        "timeline_desc_2": "20 startups classificadas<br>Potencial empreendedor e aporte de R$ 20 mil",
        "timeline_phase_3": "Coliseu dos Campeões<br><span>Fase III</span>",
        "timeline_desc_3": "10 startups classificadas<br>Incubação e lançamento comercial",
        "timeline_phase_4": "Covil dos Dragões<br><span>Final</span>",
        "timeline_desc_4": "Lançamento das 5 melhores startups<br>Criação do Polo de Jogos",
        "teams_title": "Evolução das Startups",
        "teams_subtitle": "Veja Como as Startups Estão Avançando no Circuito Game Dev Quest",
        "schedule_title": "CRONOGRAMA DO CIRCUITO",
        "schedule_step_title": "ETAPAS",
        "schedule_phase1_title": "FASE 1 - Círculo dos Visionários",
        "schedule_phase2_title": "FASE 2 - Fábrica de Lendas",
        "schedule_phase3_title": "FASE 3 - Coliseu dos Campeões",
        "loading_steps": "Carregando etapas...",
        "loading_phase1": "Carregando fase 1...",
        "loading_phase2": "Carregando fase 2...",
        "loading_phase3": "Carregando fase 3...",
        "support_sponsorship": "Patrocínio",
        "support_support": "Apoio",
        "support_partners": "Parceiros",
        "footer_realizacao": "Realização",
        "footer_links": "Links Relacionados",
        "footer_contacts": "Contatos",
        "footer_portal": "Portal da SECTIES",
        "footer_secretaria_nome": "SECRETARIA DA CIÊNCIA, TECNOLOGIA, INOVAÇÃO E ENSINO SUPERIOR"

    },
    "en-US": {
        "portal_secties": "Secties Portal",
        "accessibility_label": "Accessibility",
        "increase_font": "A+",
        "decrease_font": "A-",
        "menu_sobre": "About",
        "menu_eventos": "Events",
        "menu_fases": "Circuit Phases",
        "menu_cronograma": "Schedule",
        "menu_apoio": "Support",
        "menu_inicio": "Home",
        "hero_subtitle": "Promoting the indie games industry in Paraíba",
        "about_title": "Game Dev Quest is a competitive circuit <br> aimed at multidisciplinary teams that seek to enhance and/or develop independent games.",
        "about_feature_1": "The project aims to bolster the creation of a game hotspot in Paraíba. ",
        "about_feature_2": "Directed at programmers, designers, artists, musicians, writers and other indie games enthusiasts in Brazil. ",
        "about_feature_3": "The participant teams selection in the circuit happened through Public Call N. 55/2024, by Paraíba State Science, Technology, Innovation and Higher Education Secretariat (SECTIES-PB) in partnership with Paraíba State Research Support Foundation (FAPESQ-PB).",
        "about_feature_4": "The circuit takes place between January and July 2025, divided into elimination rounds. ",
        "gallery_title": "Events",
        "timeline_circle_text": "• Stages • of the Circuit •",
        "timeline_main_title_1": "A New",
        "timeline_main_title_2": "World of",
        "timeline_main_title_3": "Possibilities",
        "timeline_phase_1": "Circle of Visionaies<br><span>Round I </span>",
        "timeline_desc_1": "40 teams approved<br>Initial game development",
        "timeline_phase_2": "Factory of Legends<br><span>Round II</span>",
        "timeline_desc_2": "20 teams approved<br>Entrepreneurship potential and R$ 20.000,00 financial support",
        "timeline_phase_3": "Coliseum of Champions<br><span>Round III</span>",
        "timeline_desc_3": "10 startups approved<br>Incubation and commercial launch",
        "timeline_phase_4": "Lair of Dragons<br><span>Final Round</span>",
        "timeline_desc_4": "Launch of the 5 best startups<br>Creation of the Game Hotspot",
        "teams_title": "Startup Progress",
        "teams_subtitle": "See How Startups Are Progressing in the Game Dev Quest Circuit",
        "schedule_title": "CIRCUIT SCHEDULE",
        "schedule_step_title": "STAGES",
        "schedule_phase1_title": "ROUND 1 - Circle of Visionaries",
        "schedule_phase2_title": "ROUND 2 - Factory of Legends",
        "schedule_phase3_title": "ROUND 3 - Coliseum of Champions",
        "loading_steps": "Loading stages...",
        "loading_phase1": "Loading round 1...",
        "loading_phase2": "Loading round 2...",
        "loading_phase3": "Loading round 3...",
        "support_sponsorship": "Sponsorship",
        "support_support": "Support",
        "support_partners": "Partners",
        "footer_realizacao": "Organization",
        "footer_links": "Related Links",
        "footer_contacts": "Contacts",
        "footer_portal": "SECTIES Portal",
        "footer_secretaria_nome": "STATE SECRETARIAT FOR SCIENCE, TECHNOLOGY, INNOVATION AND HIGHER EDUCATION (SECTIES)"



    }
};


function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Atualiza o texto do botão de idioma
    const languageButton = document.querySelector('.language-button');
    if (languageButton) {
        languageButton.textContent = lang === 'pt-BR' ? 'EN-US' : 'PT-BR';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'pt-BR';
    translatePage(lang);
});

document.addEventListener('click', function (e) {
    const btn = e.target.closest('.language-button');
    if (btn) {
        e.preventDefault();
        const currentLang = localStorage.getItem('lang') || 'pt-BR';
        const newLang = currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
        localStorage.setItem('lang', newLang);
        translatePage(newLang);
    }
});