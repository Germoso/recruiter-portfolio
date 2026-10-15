import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from '../styles/recruiter.module.css'

const projects = [
  {
    number: '01',
    name: 'Aero Ambulancia',
    type: 'Mobile app',
    description: 'Digital solution for coordinating air ambulance services and improving access to urgent medical transportation.',
    href: '#contact',
    accent: 'lime'
  },
  {
    number: '02',
    name: 'Qik Banco Digital BO',
    type: 'Digital banking',
    description: 'Digital banking experience designed to make everyday financial services faster and more accessible.',
    href: '#contact',
    accent: 'violet'
  },
  {
    number: '03',
    name: 'Paso Rapido APP/BO',
    type: 'App / backoffice',
    description: 'An application for managing balances, top-ups, and toll-related operations nationwide, supported by an operational backoffice.',
    href: '#contact',
    accent: 'orange'
  },
  {
    number: '04',
    name: 'AFP Negocios',
    type: 'Business platform',
    description: 'A digital platform focused on business services, account management, and operational clarity.',
    href: '#contact',
    accent: 'blue'
  },
  {
    number: '05',
    name: 'Analisa APP',
    type: 'Mobile app',
    description: 'A client-facing mobile app for a clinical laboratory, designed to make accessing services and health information easier.',
    href: '#contact',
    accent: 'lime'
  },
  {
    number: '06',
    name: 'ARS Futuro',
    type: 'Health platform',
    description: 'A digital experience for a health insurance provider, connecting members with services, coverage information, and support.',
    href: '#contact',
    accent: 'violet'
  },
  {
    number: '07',
    name: 'Cafeteria Banco Popular',
    type: 'Customer experience',
    description: 'An internal system for managing Banco Popular\'s cafeteria services and employee experience.',
    href: '#contact',
    accent: 'blue'
  },
  {
    number: '08',
    name: 'Casa del cordon ERP Popular',
    type: 'ERP system',
    description: 'An administrative platform for managing the operations and information of a cultural museum.',
    href: '#contact',
    accent: 'lime'
  },
  {
    number: '09',
    name: 'CCN Recursos Humanos',
    type: 'HR platform',
    description: 'A people-focused platform for organizing human resources processes and internal operations.',
    href: '#contact',
    accent: 'violet'
  },
  {
    number: '10',
    name: 'Guías CCN',
    type: 'Digital guide',
    description: 'A practical digital guide experience that helps users discover information and navigate services.',
    href: '#contact',
    accent: 'orange'
  },
  {
    number: '11',
    name: 'Konectame',
    type: 'Digital platform',
    description: 'A platform designed to connect people, services, and useful information through a focused experience.',
    href: '#contact',
    accent: 'blue'
  },
  {
    number: '12',
    name: 'Vyana',
    type: 'Digital experience',
    description: 'A polished digital product with an emphasis on clarity, usability, and a memorable interface.',
    href: '#contact',
    accent: 'lime'
  },
  {
    number: '13',
    name: 'All in Drinks',
    type: 'E-commerce experience',
    description: 'A product-led commerce experience designed to present a brand and its catalog with energy.',
    href: '#contact',
    accent: 'violet'
  },
  {
    number: '14',
    name: 'Grid Autodetailing',
    type: 'Business website',
    description: 'A sharp digital presence for an automotive detailing business, built around trust and conversion.',
    href: '#contact',
    accent: 'orange'
  }
]

const tools = ['TypeScript', 'React', 'Nest.js', 'Flutter', 'Docker', 'Azure', 'Claude Code', 'AI agents']

const personalProjects = [
  {
    name: 'finance-box',
    type: 'Self-hosted finance',
    es: 'Finanzas personales autoalojadas con Docker, auditoría de seguridad e integración MCP.',
    en: 'Self-hosted personal finance with Docker, security auditing, and MCP integration.',
    href: 'https://github.com/Germoso/finance-box'
  },
  {
    name: 'orion-flow',
    type: 'Automation / TypeScript',
    es: 'Proyecto experimental en TypeScript para explorar automatización y flujos de trabajo.',
    en: 'An experimental TypeScript project exploring automation and workflow design.',
    href: 'https://github.com/Germoso/orion-flow'
  },
  {
    name: 'opencode-telegram-bot',
    type: 'AI developer tooling',
    es: 'Cliente móvil de OpenCode vía Telegram para ejecutar y monitorear tareas de desarrollo con IA.',
    en: 'A mobile OpenCode client via Telegram to run and monitor AI coding tasks remotely.',
    href: 'https://github.com/Germoso/opencode-telegram-bot'
  },
  {
    name: 'manage-separated-trading-orders',
    type: 'Trading tools',
    es: 'Herramientas para gestionar órdenes de trading separadas, con frontend y backend independientes.',
    en: 'Tools for managing separated trading orders through independent frontend and backend projects.',
    href: 'https://github.com/Germoso/manage-separated-trading-orders'
  },
  {
    name: 'oraculo',
    type: 'Python experiment',
    es: 'Experimento en Python enfocado en explorar ideas y prototipos de software.',
    en: 'A Python experiment for exploring software ideas and rapid prototypes.',
    href: 'https://github.com/Germoso/oraculo'
  },
  {
    name: 'SummarizeIt',
    type: 'Browser extension',
    es: 'Extensión de Chromium para resumir contenido y convertir información extensa en ideas accionables.',
    en: 'A Chromium extension for summarizing content and turning long information into actionable ideas.',
    href: 'https://github.com/Germoso/SummarizeIt-chromium-extension'
  }
]

const copy = {
  es: {
    available: 'Disponible',
    heroLineOne: 'Software que',
    heroLineTwo: 'mueve ideas',
    heroDescription: 'Soy Samill, desarrollador de software enfocado en crear productos digitales con propósito, combinando tecnología, diseño y automatización para construir soluciones web, móviles, de escritorio, backend y flujos de trabajo automatizados.',
    workButton: 'Ver proyectos',
    talk: 'Hablemos',
    download: 'Descargar CV',
    workNav: 'Proyectos',
    toolkitNav: 'Herramientas',
    contactNav: 'Contacto',
    personalNav: 'Laboratorio',
    ticker: 'CREAR • LANZAR • APRENDER • REPETIR •  ',
    selectedWork: 'Proyectos seleccionados',
    madeUseful: 'Parte de mi\nexperiencia profesional.',
    workDescription: 'Una selección de proyectos que muestran cómo pienso, construyo y convierto una idea en una experiencia pulida.',
    discuss: 'Conversar sobre proyecto',
    personalNumber: '02 / Laboratorio personal',
    personalTitle: 'Ideas que convierto\nen experimentos.',
    personalDescription: 'Ideas, herramientas y experimentos que desarrollo para aprender, resolver problemas reales y mantenerme cerca de lo que viene.',
    github: 'Ver en GitHub',
    toolkit: 'Herramientas',
    toolsNow: 'Herramientas para\nel presente.',
    toolkitDescription: 'Combino fundamentos sólidos de software con herramientas modernas para transformar conceptos en productos confiables y mantenibles.',
    nextChapter: 'Siguiente capítulo',
    goodProblem: '¿Tienes un buen\nproblema?',
    cvPrompt: 'Llévate una copia',
    cvSpanish: 'CV Español',
    cvEnglish: 'CV English',
    built: 'Construido con curiosidad.',
    location: 'Santo Domingo, RD',
    developer: 'DESARROLLADOR FULL STACK',
    disclaimerLabel: 'Aviso de confidencialidad',
    disclaimerTitle: 'Información profesional de carácter reservado.',
    disclaimerBody: 'La información contenida en este sitio no está indexada en motores de búsqueda. La página reúne una selección de proyectos y experiencias profesionales, presentada de forma resumida por motivos de confidencialidad y acuerdos profesionales.',
    disclaimerContinue: 'Entendido, continuar'
  },
  en: {
    available: 'Available for the right opportunity',
    heroLineOne: 'Software that',
    heroLineTwo: 'moves ideas',
    heroDescription: 'I\'m Samill — a software developer building thoughtful digital products across web, mobile, backend, and AI-powered workflows.',
    workButton: 'Explore selected work',
    talk: 'Let\'s talk',
    download: 'Download CV',
    workNav: 'Work',
    toolkitNav: 'Toolkit',
    contactNav: 'Contact',
    personalNav: 'Lab',
    ticker: 'BUILD • SHIP • LEARN • REPEAT • ',
    selectedWork: 'Selected work',
    madeUseful: 'Part of my\nprofessional experience.',
    workDescription: 'Selected projects that show how I think, build, and turn a rough idea into a polished experience.',
    discuss: 'Discuss project',
    personalNumber: '02 / Personal lab',
    personalTitle: 'Ideas I turn\ninto experiments.',
    personalDescription: 'Ideas, tools, and experiments I build to keep learning, solve real problems, and stay close to what is next.',
    github: 'View on GitHub',
    toolkit: 'Toolkit',
    toolsNow: 'Tools for\nthe now.',
    toolkitDescription: 'I use the right mix of engineering fundamentals and modern tools to move from concept to a reliable, maintainable product.',
    nextChapter: 'Next chapter',
    goodProblem: 'Have a good\nproblem?',
    cvPrompt: 'Take a copy with you',
    cvSpanish: 'CV Español',
    cvEnglish: 'CV English',
    built: 'Built with curiosity.',
    location: 'Santo Domingo, DR',
    developer: 'FULL STACK DEVELOPER',
    disclaimerLabel: 'Confidentiality notice',
    disclaimerTitle: 'Professional information shared privately.',
    disclaimerBody: 'The information contained on this website is not indexed by search engines. This page presents a selection of professional projects and experience in summary form due to confidentiality and professional agreements.',
    disclaimerContinue: 'Understood, continue'
  }
}

const projectDescriptions = {
  es: {
    'Aero Ambulancia': 'Solución digital para coordinar servicios de ambulancia aérea y mejorar el acceso al transporte médico urgente.',
    'Qik Banco Digital BO': 'Experiencia de banca digital diseñada para hacer los servicios financieros cotidianos más rápidos y accesibles.',
    'Paso Rapido APP/BO': 'Aplicación para gestionar saldos, recargas y operaciones relacionadas con peajes a nivel nacional, junto con su backoffice operativo.',
    'AFP Negocios': 'Plataforma digital enfocada en servicios empresariales, gestión de cuentas y claridad operativa.',
    'Analisa APP': 'Aplicación móvil para los clientes de un laboratorio clínico, diseñada para facilitar el acceso a servicios e información de salud.',
    'ARS Futuro': 'Experiencia digital para una aseguradora de salud, que conecta a sus afiliados con servicios, información de cobertura y soporte.',
    'Cafeteria Banco Popular': 'Sistema interno para gestionar los servicios de la cafetería del Banco Popular y la experiencia de sus empleados.',
    'Casa del cordon ERP Popular': 'Plataforma administrativa para gestionar las operaciones y la información de un museo cultural.',
    'CCN Recursos Humanos': 'Plataforma centrada en las personas para organizar procesos de recursos humanos y operaciones internas.',
    'Guías CCN': 'Guía digital práctica que ayuda a descubrir información y navegar servicios con facilidad.',
    'Konectame': 'Plataforma creada para conectar personas, servicios e información útil mediante una experiencia enfocada.',
    'Vyana': 'Producto digital pulido que prioriza la claridad, la usabilidad y una interfaz memorable.',
    'All in Drinks': 'Experiencia de comercio enfocada en productos, creada para presentar una marca y su catálogo con energía.',
    'Grid Autodetailing': 'Presencia digital sólida para un negocio de detailing automotriz, enfocada en confianza y conversión.'
  },
  en: Object.fromEntries(projects.map(project => [project.name, project.description]))
}

const projectTypes = {
  es: {
    'Mobile app': 'Aplicación móvil',
    'Digital banking': 'Banca digital',
    'App / backoffice': 'App / backoffice',
    'Business platform': 'Plataforma empresarial',
    'Health platform': 'Plataforma de salud',
    'Digital product': 'Producto digital',
    'Customer experience': 'Experiencia de cliente',
    'ERP system': 'Sistema ERP',
    'HR platform': 'Plataforma de RR. HH.',
    'Digital guide': 'Guía digital',
    'Digital platform': 'Plataforma digital',
    'Digital experience': 'Experiencia digital',
    'E-commerce experience': 'Experiencia e-commerce',
    'Business website': 'Sitio web empresarial'
  },
  en: {}
}
projectTypes.en = Object.fromEntries(projects.map(project => [project.type, project.type]))

const Recruiter = () => {
  const [language, setLanguage] = useState('es')
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const text = copy[language]

  useEffect(() => {
    document.body.style.overflow = showDisclaimer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showDisclaimer])

  return (
    <>
      <Head>
        <title>Samill Germoso — Software Developer</title>
        <meta
          name='description'
          content={language === 'es' ? 'Proyectos y capacidades de Samill Germoso, desarrollador de software.' : 'Selected work and capabilities of Samill Germoso, software developer.'}
        />
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <main className={styles.page}>
        <div className={styles.grid} />
        <div className={styles.glow} />

        <nav className={styles.nav}>
          <Link href='/' className={styles.brand}>
            SG<span>.</span>
          </Link>
          <div className={styles.navLinks}>
            <a href='#work'>{text.workNav}</a>
            <a href='#personal'>{text.personalNav}</a>
            <a href='#toolkit'>{text.toolkitNav}</a>
            <a href='#contact'>{text.contactNav}</a>
          </div>
          <a href={`/cv/Samill-Alexander-Germoso-Montero-${language === 'es' ? 'ES' : 'EN'}.pdf`} download className={styles.cvLink}>
            {text.download} <span>↗</span>
          </a>
          <button className={styles.languageButton} onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>

        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.eyebrow}><span /> {text.available}</p>
            <h1>
              {text.heroLineOne}<br />
              <em>{text.heroLineTwo}</em>
            </h1>
            <p className={styles.heroCopy}>
              {text.heroDescription}
            </p>
            <div className={styles.heroActions}>
              <a href='#work' className={styles.primaryButton}>{text.workButton} <span>↓</span></a>
              <a href='mailto:germosoalexander@gmail.com' className={styles.textButton}>{text.talk} <span>↗</span></a>
            </div>
          </motion.div>
          <motion.div
            className={styles.heroMark}
            initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <div className={styles.markCircle}>SG</div>
            <strong className={styles.markName}>SAMILL GERMOSO</strong>
            <span>{text.developer}</span>
          </motion.div>
        </section>

        <div className={styles.ticker} aria-hidden='true'>
          <div className={styles.tickerTrack}>
            <span>{text.ticker}</span>
            <span>{text.ticker}</span>
            <span>{text.ticker}</span>
            <span>{text.ticker}</span>
          </div>
        </div>

        <section id='work' className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>01 / {text.selectedWork}</p>
            <h2>{text.madeUseful.split('\n')[0]}<br /><em>{text.madeUseful.split('\n')[1]}</em></h2>
            <p>{text.workDescription}</p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                className={`${styles.projectCard} ${styles[project.accent]}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.08 }}
              >
                <div className={styles.cardTop}>
                  <span>{project.number}</span>
                  <span>{projectTypes[language][project.type]}</span>
                </div>
                <div>
                  <h3>{project.name}</h3>
                  <p>{projectDescriptions[language][project.name]}</p>
                </div>
                <a href={project.href} className={styles.cardLink}>{text.discuss} <span>↗</span></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id='personal' className={`${styles.section} ${styles.personalSection}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>{text.personalNumber}</p>
            <h2>{text.personalTitle.split('\n')[0]}<br /><em>{text.personalTitle.split('\n')[1]}</em></h2>
            <p>{text.personalDescription}</p>
          </div>
          <div className={styles.labGrid}>
            {personalProjects.map((project, index) => (
              <motion.article
                key={project.name}
                className={styles.labCard}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ delay: index * 0.06 }}
              >
                <div className={styles.labCardTop}>
                  <span>0{index + 1}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{language === 'es' ? project.es : project.en}</p>
                <a href={project.href} target='_blank' rel='noreferrer' className={styles.cardLink}>
                  {text.github} <span>↗</span>
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id='toolkit' className={`${styles.section} ${styles.toolkitSection}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>03 / {text.toolkit}</p>
            <h2>{text.toolsNow.split('\n')[0]}<br /><em>{text.toolsNow.split('\n')[1]}</em></h2>
          </div>
          <div className={styles.toolkitContent}>
            <p>{text.toolkitDescription}</p>
            <div className={styles.tools}>
              {tools.map((tool, index) => <span key={tool}><b>0{index + 1}</b>{tool}</span>)}
            </div>
          </div>
        </section>

        <section id='contact' className={styles.contactSection}>
          <p className={styles.sectionNumber}>04 / {text.nextChapter}</p>
          <h2>{text.goodProblem.split('\n')[0]}<br /><em>{text.goodProblem.split('\n')[1]}</em></h2>
          <a href='mailto:germosoalexander@gmail.com' className={styles.contactLink}>germosoalexander@gmail.com <span>↗</span></a>
          <a href='tel:+18098566641' className={styles.phoneLink}>+1 809 856 6641 <span>↗</span></a>
          <div className={styles.cvDownloads}>
            <span>{text.cvPrompt}</span>
            <div>
              <a href='/cv/Samill-Alexander-Germoso-Montero-ES.pdf' download>{text.cvSpanish} <b>↓</b></a>
              <a href='/cv/Samill-Alexander-Germoso-Montero-EN.pdf' download>{text.cvEnglish} <b>↓</b></a>
            </div>
          </div>
          <div className={styles.socials}>
            <a href='https://github.com/germoso' target='_blank' rel='noreferrer'>GitHub ↗</a>
            <a href='https://www.linkedin.com/in/alexandergermoso/' target='_blank' rel='noreferrer'>LinkedIn ↗</a>
            <span>{text.location}</span>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Samill Germoso</span>
          <span>{text.built}</span>
        </footer>

        {showDisclaimer && (
          <div className={styles.disclaimerBackdrop} role='dialog' aria-modal='true' aria-labelledby='disclaimer-title'>
            <motion.div
              className={styles.disclaimer}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.disclaimerHeader}>
                <span className={styles.disclaimerDot} />
                <span>{text.disclaimerLabel}</span>
              </div>
              <h2 id='disclaimer-title'>{text.disclaimerTitle}</h2>
              <p>{text.disclaimerBody}</p>
              <button className={styles.disclaimerButton} onClick={() => setShowDisclaimer(false)}>
                {text.disclaimerContinue} <span>↗</span>
              </button>
            </motion.div>
          </div>
        )}
      </main>
    </>
  )
}

export default Recruiter
