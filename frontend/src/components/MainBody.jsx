import { useState, useEffect } from 'react';
import ScrollingText from './ScrollingText';
import StackBlock from './sections/stack/StackBlock';
import ExperienceBlock from './sections/experience/ExperienceBlock';
import LanguagesBlock from './sections/languages/LanguagesBlock';

// Componente principal de la aplicación
function MainBody() {
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
      title: "Full Stack Developer",
      email: "kaduran1998@gmail.com",
      stack: "Stack",
      experience: "Experience",
      languages: "Languages",
      segments: [
        "Frontend: ReactJS, Angular, SASS, Tailwind",
        "Backend: Django, .NET (6, 8), MySQL, PostgreSQL",
        "Mobile: Swift, SwiftUI, Ionic Framework",
        "CI/CD Tools: Azure DevOps",
        "Version Control: Git",
        "PLs: Python, Javascript, Typescript, C#, Swift"
      ],
      experienceItems: [
        { role: "Full Stack Developer", company: "Netby IT Consulting", period: "2025 - Present" },
        { role: "Full Stack Developer", company: "Subscriptions Platform Pronto LLC", period: "2022 - 2024" }
      ],
      languageItems: [
        { name: "Spanish", level: "Native [C2]" },
        { name: "English", level: "Fluent [C1]" },
        { name: "Mandarin Chinese", level: "Intermediate [HSK4]" },
        { name: "German", level: "Basic [B1]" }
      ],
      scrollingText: "Happy New Year 2025",
      darkMode: "Dark mode",
      lightMode: "Light mode"
    },
    es: {
      name: "Karla Antonieta Durán Oscuez",
      title: "Desarrolladora Full Stack",
      email: "kaduran1998@gmail.com",
      stack: "Stack",
      experience: "Experiencia",
      languages: "Idiomas",
      segments: [
        "Frontend: ReactJS, Angular, SASS, Tailwind",
        "Backend: Django, .NET (6, 8), MySQL, PostgreSQL",
        "Desarrollo móvil: Swift, SwiftUI, Ionic Framework",
        "Herramientas CI/CD: Azure DevOps",
        "Control de versiones: Git",
        "LPs: Python, Javascript, Typescript, C#, Swift"
      ],
      experienceItems: [
        { role: "Desarrolladora Full Stack", company: "Netby IT Consulting", period: "2025 - Presente" },
        { role: "Desarrolladora Full Stack", company: "Plataforma de Suscripciones Pronto LLC", period: "2022 - 2024" }
      ],
      languageItems: [
        { name: "Español", level: "Nativo [C2]" },
        { name: "Inglés", level: "Fluido [C1]" },
        { name: "Chino Mandarín", level: "Intermedio [HSK4]" },
        { name: "Alemán", level: "Básico [B1]" }
      ],
      scrollingText: "Feliz Año Nuevo 2025",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
    },
    zh: {
      name: "中文名字：羽兰",
      title: "软件开发员",
      email: "kaduran1998@gmail.com",
      stack: "目前正在进行",
      experience: "工作经验",
      languages: "语言",
      segments: [
        "前端: ReactJS、Angular、SASS、Tailwind",
        "后端: Django、.NET (6、8)、MySQL、PostgreSQL",
        "移动端开发: Swift、SwiftUI、Ionic 框架",
        "持续集成/持续部署工具 (CI/CD): Azure DevOps",
        "版本控制: Git",
        "编程语言: Python、JavaScript、TypeScript、C#、Swift"
      ],
      experienceItems: [
        { role: "软件开发员", company: "Netby IT Consulting", period: "2025 - 至今" },
        { role: "软件开发员", company: "Subscriptions Platform Pronto LLC", period: "2022 - 2024" },
      ],
      languageItems: [
        { name: "西班牙语", level: "母语 [C2]" },
        { name: "英语", level: "流利 [C1]" },
        { name: "中文", level: "中级 [HSK四级]" },
        { name: "德语", level: "初级 [B1]" }
      ],
      scrollingText: "新年快乐 恭喜发财",
      darkMode: "暗黑模式",
      lightMode: "明亮模式"
    },
    de: {
      name: "Karla Duran",
      title: "Softwareentwicklerin",
      email: "kaduran1998@gmail.com",
      stack: "Stack",
      experience: "Erfahrung",
      languages: "Sprachen",
      segments: [
        "Frontend: ReactJS, Angular, SASS, Tailwind",
        "Backend: Django, .NET (6, 8), MySQL, PostgreSQL",
        "Mobile Entwicklung: Swift, SwiftUI, Ionic Framework",
        "CI/CD Tools: Azure DevOps",
        "Versionskontrolle: Git",
        "PLs: Python, Javascript, Typescript, C#, Swift"
      ],
      experienceItems: [
        { role: "Full Stack Entwicklerin", company: "Netby IT Consulting", period: "2025 - Heute" },
        { role: "Full Stack Entwicklerin", company: "Subscriptions Platform Pronto LLC", period: "2022 - 2024" }
      ],
      languageItems: [
        { name: "Spanisch", level: "Muttersprache [C2]" },
        { name: "Englisch", level: "Fließend [C1]" },
        { name: "Chinesisch (Mandarin)", level: "Mittelstufe [HSK4]" },
        { name: "Deutsch", level: "Grundkenntnisse [B1]" }
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
      <footer className={`col-span-1 rounded-l-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="container h-full flex flex-col">
          <div className="flex flex-col justify-center">
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
            <p className="text-xs opacity-75">{currentContent.email}</p>
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
          {/* Sección: Stack*/}
          <StackBlock  
            name={currentContent.stack}
            segments={currentContent.segments}
          />

          {/* Sección: Experiencia */}
          <ExperienceBlock
            name={currentContent.experience}
            items={currentContent.experienceItems}
          />

          {/* Sección: Idiomas */}
          <LanguagesBlock
            name={currentContent.languages}
            items={currentContent.languageItems}
          />
        </main>
      </div>
    </div>
  );
}

export default MainBody;