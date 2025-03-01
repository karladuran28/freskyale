import { useState, useEffect } from 'react';
import ScrollingText from './ScrollingText';

// Componente principal de la aplicación
function OptionalBody() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  // Efecto para verificar preferencia de tema oscuro del usuario
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Cambiar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Cambiar idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Datos de contenido en diferentes idiomas
  const content = {
    en: {
      name: "Karla Duran",
      title: "Full Stack Developer, Interpreter",
      currentlyWorking: "Currently working on",
      experience: "Experience",
      languages: "Languages",
      projects: [
        "Project 1: A minimalist web application",
        "Project 2: UX/UI design for startups",
        "Project 3: Productivity tools"
      ],
      experienceItems: [
        { role: "Frontend Developer", company: "XYZ Company", period: "2022 - Present" },
        { role: "UX Designer", company: "ABC Startup", period: "2020 - 2022" },
        { role: "Web Developer", company: "Digital Agency", period: "2018 - 2020" }
      ],
      languageItems: [
        { name: "Spanish", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "Mandarin Chinese", level: "Intermediate" },
        { name: "German", level: "Basic" }
      ],
      scrollingText: "Happy New Year 2025",
      darkMode: "Dark mode",
      lightMode: "Light mode"
    },
    es: {
      name: "Karla Antonieta Durán Oscuez",
      title: "Desarrolladora Full Stack, Intérprete",
      currentlyWorking: "Actualmente trabajando en",
      experience: "Experiencia",
      languages: "Idiomas",
      projects: [
        "Proyecto 1: Una aplicación web minimalista",
        "Proyecto 2: Diseño UX/UI para startups",
        "Proyecto 3: Herramientas de productividad"
      ],
      experienceItems: [
        { role: "Desarrollador Frontend", company: "Empresa XYZ", period: "2022 - Presente" },
        { role: "Diseñador UX", company: "Startup ABC", period: "2020 - 2022" },
        { role: "Desarrollador Web", company: "Agencia Digital", period: "2018 - 2020" }
      ],
      languageItems: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "Fluido" },
        { name: "Chino Mandarín", level: "Intermedio" },
        { name: "Alemán", level: "Básico" }
      ],
      scrollingText: "Feliz Año Nuevo 2025",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
    },
    zh: {
      name: "中文名字：羽兰",
      title: "软件开发员，口译员",
      currentlyWorking: "目前正在进行",
      experience: "工作经验",
      languages: "语言",
      projects: [
        "项目 1: 极简网页应用",
        "项目 2: 初创公司的用户体验设计",
        "项目 3: 效率工具"
      ],
      experienceItems: [
        { role: "前端开发工程师", company: "XYZ公司", period: "2022 - 至今" },
        { role: "用户体验设计师", company: "ABC初创公司", period: "2020 - 2022" },
        { role: "网页开发员", company: "数字营销公司", period: "2018 - 2020" }
      ],
      languageItems: [
        { name: "西班牙语", level: "母语" },
        { name: "英语", level: "流利" },
        { name: "中文", level: "中级" },
        { name: "德语", level: "初级" }
      ],
      scrollingText: "新年快乐 恭喜发财",
      darkMode: "暗黑模式",
      lightMode: "明亮模式"
    },
    de: {
      name: "Karla Duran",
      title: "Softwareentwicklerin, Dolmetscherin",
      currentlyWorking: "Arbeite derzeit an",
      experience: "Erfahrung",
      languages: "Sprachen",
      projects: [
        "Projekt 1: Eine minimalistische Webanwendung",
        "Projekt 2: UX/UI-Design für Startups",
        "Projekt 3: Produktivitätstools"
      ],
      experienceItems: [
        { role: "Frontend-Entwickler", company: "XYZ Unternehmen", period: "2022 - Heute" },
        { role: "UX-Designer", company: "ABC Startup", period: "2020 - 2022" },
        { role: "Webentwickler", company: "Digitalagentur", period: "2018 - 2020" }
      ],
      languageItems: [
        { name: "Spanisch", level: "Muttersprache" },
        { name: "Englisch", level: "Fließend" },
        { name: "Chinesisch (Mandarin)", level: "Mittelstufe" },
        { name: "Deutsch", level: "Grundkenntnisse" }
      ],
      scrollingText: "Frohes neues Jahr",
      darkMode: "Dunkelmodus",
      lightMode: "Hellmodus"
    }
  };

  // Obtener el contenido según el idioma seleccionado
  const currentContent = content[language];

  return (
    <div className={`min-h-screen sm:w-3/5 w-full grid grid-cols-12 rounded-tl-lg ${darkMode ? 'bg-black/50 text-white' : 'bg-white/80 text-gray-900'} transition-colors duration-300`}>
      {/* Pie de página con redes sociales */}
      <footer className={`col-span-1 rounded-l-lg  ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container">
          <div className="flex flex-col justify-center">
            <a href="https://www.youtube.com/@karladuran2819" target='__blank' className="flex justify-center py-6 hover:bg-pink-500/90 hover:rounded-tl-lg">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="h-6 w-6">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://www.instagram.com/karladuran98_/" target='__blank' className="flex justify-center py-6 hover:bg-pink-500/90">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="h-6 w-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/karladuran28/" target='__blank' className="flex justify-center py-6 hover:bg-pink-500/90">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="h-6 w-6">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/karladuran28" target='__blank' className="flex justify-center py-6 hover:bg-pink-500/90">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="h-6 w-6">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://x.com/kaduran28" target='__blank' className="flex justify-center py-6 hover:bg-pink-500/90">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" className="h-6 w-6">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
          <ScrollingText message={content[language].scrollingText}/>
        </div>
      </footer>
      <div className='col-span-11'>
        {/* Encabezado con selector de idioma y modo */}
        <header className="container mx-auto pt-6 px-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{currentContent.name}</h1>
            <p className="text-sm opacity-75">{currentContent.title}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Selector de idioma */}
            <div className="flex space-x-2">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`cursor-pointer px-2 py-1 text-xs rounded ${language === 'en' ? (darkMode ? 'bg-white text-black' : 'bg-black text-white') : ''}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('es')} 
                className={`cursor-pointer px-2 py-1 text-xs rounded ${language === 'es' ? (darkMode ? 'bg-white text-black' : 'bg-black text-white') : ''}`}
              >
                ES
              </button>
              <button 
                onClick={() => changeLanguage('zh')} 
                className={`cursor-pointer px-2 py-1 text-xs rounded ${language === 'zh' ? (darkMode ? 'bg-white text-black' : 'bg-black text-white') : ''}`}
              >
                中文
              </button>
              <button 
                onClick={() => changeLanguage('de')} 
                className={`cursor-pointer px-2 py-1 text-xs rounded ${language === 'de' ? (darkMode ? 'bg-white text-black' : 'bg-black text-white') : ''}`}
              >
                DE
              </button>
            </div>
            
            {/* Interruptor de modo oscuro/claro */}
            {/* Por el momento se lo oculta :) */}
            {/* <button 
              onClick={toggleDarkMode} 
              className={`cursor-pointer p-2 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
            >
              {darkMode ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button> */}
          </div>
        </header>

        {/* Contenido principal */}
        <main className="container mx-auto p-6 space-y-8">
          {/* Sección: Actualmente trabajando en */}
          <section>
            <h2 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
              {currentContent.currentlyWorking}
            </h2>
            <ul className="space-y-2">
              {currentContent.projects.map((project, index) => (
                <li key={index} className="opacity-75">{project}</li>
              ))}
            </ul>
          </section>

          {/* Sección: Experiencia */}
          <section>
            <h2 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
              {currentContent.experience}
            </h2>
            <ul className="space-y-6">
              {currentContent.experienceItems.map((item, index) => (
                <li key={index} className="space-y-1">
                  <div className="font-medium">{item.role}</div>
                  <div className="text-sm opacity-75">{item.company}</div>
                  <div className="text-xs opacity-60">{item.period}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* Sección: Idiomas */}
          <section>
            <h2 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
              {currentContent.languages}
            </h2>
            <ul className="grid grid-cols-2 gap-4">
              {currentContent.languageItems.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="opacity-60">{item.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default OptionalBody;