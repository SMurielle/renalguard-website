import React, { useState, useEffect, useRef } from 'react';
import {
  FiPhone, FiMail, FiLinkedin, FiMapPin,
  FiShield, FiActivity, FiCpu, FiSun, FiAlertCircle,
  FiUsers, FiHeart, FiGlobe, FiChevronRight, FiTwitter,
  FiInstagram, FiFacebook, FiArrowUp
} from 'react-icons/fi';
import {
  MdOutlineSensors, MdOutlineHealthAndSafety,
  MdOutlineScience, MdWaterDrop
} from 'react-icons/md';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

// ── SCROLL ANIMATION HOOK ─────────────────────────────────
function useScrollAnimation() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// ── GLOBAL STYLES ─────────────────────────────────────────
const globalStyles = `
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.3)} }
  @keyframes fadeInUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeInLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes fadeInRight { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  .anim-fadeInUp { animation: fadeInUp 0.7s ease forwards; }
  .anim-fadeInLeft { animation: fadeInLeft 0.7s ease forwards; }
  .anim-fadeInRight { animation: fadeInRight 0.7s ease forwards; }
  .anim-fadeIn { animation: fadeIn 0.7s ease forwards; }
  .float { animation: float 3s ease-in-out infinite; }
  .float2 { animation: float 3.5s ease-in-out infinite 0.5s; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  a { transition: all 0.2s ease; }
`;

// ── TRANSLATIONS ─────────────────────────────────────────
const translations = {
  en: {
    nav: ['About','Problem','Solution','How It Works','Impact','Team','Contact'],
    contactBtn: 'Contact Us',
    badge: 'Innovative Health Technology from Cameroon',
    heroTitle1: 'Detect early.',
    heroTitle2: 'Live longer.',
    heroSubtitle: 'RenalGuard is a wearable IoT device that detects early signs of chronic kidney disease, bringing life-saving diagnostics to every community in Africa.',
    discoverBtn: 'Discover Our Solution',
    howBtn: 'How It Works',
    stats: [
      { number:'70%', label:'Of patients diagnosed only at advanced kidney failure stages' },
      { number:'12x', label:'Dialysis costs more than average annual income in Cameroon' },
      { number:'18%', label:'5-year survival rate for dialysis patients in Cameroon' },
    ],
    problemTitle: 'The Silent Epidemic',
    problemSubtitle: 'Chronic kidney disease is destroying lives across Cameroon, often diagnosed only when it is too late.',
    problems: [
      { title:'No Access', desc:'Most rural communities have no diagnostic tools or specialists nearby. Patients travel hours to reach a clinic, often only in emergencies.' },
      { title:'Too Late', desc:'80% of CKD cases in Cameroon are diagnosed at an advanced stage when dialysis becomes the only option, costing thousands of dollars.' },
      { title:'Silent Suffering', desc:'CKD shows no symptoms until advanced. By the time patients feel sick, irreversible damage has already been done to their kidneys.' },
    ],
    solutionBadge: 'Our Innovation',
    solutionTitle: 'Meet',
    solutions: [
      {
        subtitle: 'RenalGuard is a wearable abdominal band embedded with advanced sensors and AI. It continuously monitors early indicators of kidney disease, no lab required, no specialist needed.',
        features: [
          'Bio-impedance sensors detect fluid retention and electrolyte imbalance',
          'PPG sensor monitors cardiovascular health and blood pressure trends',
          'Edge AI analyzes data in real time and sends alerts before crisis',
          'Solar-powered with USB-C backup for any environment',
        ]
      },
      {
        subtitle: 'Results are delivered in under 15 minutes directly on the device display, mobile app, or hospital web dashboard, without removing the device.',
        features: [
          'Unique device ID connects instantly to the RenalGuard mobile app',
          'Hospital web dashboard manages multiple patients simultaneously',
          'GSM and LoRaWAN connectivity works without internet in rural areas',
          'Results displayed while device is still worn for maximum accuracy',
        ]
      }
    ],
    deviceLabel: 'Wearable Device',
    monitoring: 'Monitoring Active',
    howTitle: 'How It Works',
    howSubtitle: 'Simple. Effective. Life-saving. Results in under 15 minutes.',
    steps: [
      { step:'01', title:'Place', desc:'The patient places the RenalGuard band directly on the skin around the abdomen. No preparation needed.' },
      { step:'02', title:'Connect', desc:'The device activates automatically. The patient enters the unique device ID in the RenalGuard app to sync their profile.' },
      { step:'03', title:'Sense', desc:'Bio-impedance and PPG sensors collect kidney health data continuously for 8 to 12 minutes while the device remains worn.' },
      { step:'04', title:'Analyze', desc:'The embedded Edge AI processes the data in real time, comparing readings against the patient personal health baseline.' },
      { step:'05', title:'Alert', desc:'Results appear on the device display, the mobile app, and the hospital web dashboard simultaneously, all while the device is still worn.' },
      { step:'06', title:'Act', desc:'The healthcare provider reviews results and recommends early-stage treatment. Detected at stage 1 or 2, CKD is still treatable.' },
    ],
    impactTitle: 'Our Impact',
    impactSubtitle: 'Building health sovereignty for Africa, one community at a time.',
    impacts: [
      { number:'850K+', label:'Cameroonians living with CKD right now, most undiagnosed' },
      { number:'5,000+', label:'Patients we aim to reach by 2027' },
      { number:'80%', label:'Cost reduction vs traditional dialysis care' },
      { number:'24/7', label:'Continuous real-time monitoring' },
    ],
    quote: '"Africa\'s health sovereignty will not come from dependency. It will come from young Africans who build."',
    quoteAuthor: 'Kombou Komga Murielle Nahomy, Founder of RenalGuard',
    teamTitle: 'Meet the Team',
    teamSubtitle: 'Driven by purpose, built on innovation.',
    contactTitle: 'Get in Touch',
    contactSubtitle: 'Interested in RenalGuard? We would love to hear from you.',
    sendBtn: 'Send Message',
    sentTitle: 'Message sent!',
    sentDesc: 'Thank you for reaching out. We will get back to you soon.',
    footerDesc: 'A wearable IoT solution for early detection of chronic kidney disease, bringing healthcare to every community in Africa.',
    footerLinks: 'Quick Links',
    footerContact: 'Contact',
    footerRights: 'All rights reserved.',
    footerMission: 'Detect early. Live longer. Built in Cameroon for Africa.',
  },
  es: {
    nav: ['Acerca de','Problema','Solución','Cómo funciona','Impacto','Equipo','Contacto'],
    contactBtn: 'Contáctanos',
    badge: 'Tecnología de salud innovadora de Camerún',
    heroTitle1: 'Detectar pronto.',
    heroTitle2: 'Vivir más.',
    heroSubtitle: 'RenalGuard es un dispositivo IoT portátil que detecta los primeros signos de enfermedad renal crónica, llevando diagnósticos vitales a cada comunidad en África.',
    discoverBtn: 'Descubrir nuestra solución',
    howBtn: 'Cómo funciona',
    stats: [
      { number:'70%', label:'De pacientes diagnosticados solo en etapas avanzadas de insuficiencia renal' },
      { number:'12x', label:'La diálisis cuesta más que el ingreso anual promedio en Camerún' },
      { number:'18%', label:'Tasa de supervivencia a 5 años para pacientes en diálisis en Camerún' },
    ],
    problemTitle: 'La epidemia silenciosa',
    problemSubtitle: 'La enfermedad renal crónica destruye vidas en Camerún, a menudo diagnosticada solo cuando ya es demasiado tarde.',
    problems: [
      { title:'Sin acceso', desc:'La mayoría de las comunidades rurales no tienen herramientas de diagnóstico. Los pacientes viajan horas para llegar a una clínica.' },
      { title:'Demasiado tarde', desc:'El 80% de los casos se diagnostican en etapa avanzada cuando la diálisis es la única opción, costando miles de dólares.' },
      { title:'Sufrimiento silencioso', desc:'La ERC no muestra síntomas hasta etapas avanzadas. El daño irreversible ya está hecho cuando los pacientes se sienten enfermos.' },
    ],
    solutionBadge: 'Nuestra innovación',
    solutionTitle: 'Conoce',
    solutions: [
      {
        subtitle: 'RenalGuard es una banda abdominal portátil con sensores avanzados e IA. Monitorea continuamente los indicadores tempranos de enfermedad renal.',
        features: [
          'Sensores de bioimpedancia detectan retención de líquidos',
          'Sensor PPG monitorea salud cardiovascular',
          'Edge AI analiza datos en tiempo real y envía alertas antes de la crisis',
          'Energía solar con respaldo USB-C para cualquier entorno',
        ]
      },
      {
        subtitle: 'Los resultados se entregan en menos de 15 minutos directamente en la pantalla del dispositivo, app móvil o panel web del hospital.',
        features: [
          'ID único del dispositivo conecta instantáneamente a la app RenalGuard',
          'Panel web hospitalario gestiona múltiples pacientes simultáneamente',
          'Conectividad GSM y LoRaWAN funciona sin internet en zonas rurales',
          'Resultados mostrados mientras el dispositivo está puesto para máxima precisión',
        ]
      }
    ],
    deviceLabel: 'Dispositivo portátil',
    monitoring: 'Monitoreo activo',
    howTitle: 'Cómo funciona',
    howSubtitle: 'Simple. Efectivo. Vital. Resultados en menos de 15 minutos.',
    steps: [
      { step:'01', title:'Colocar', desc:'El paciente coloca la banda RenalGuard directamente sobre la piel alrededor del abdomen. Sin preparación necesaria.' },
      { step:'02', title:'Conectar', desc:'El dispositivo se activa automáticamente. El paciente ingresa el ID único en la app RenalGuard para sincronizar su perfil.' },
      { step:'03', title:'Detectar', desc:'Los sensores de bioimpedancia y PPG recopilan datos de salud renal durante 8 a 12 minutos mientras el dispositivo permanece puesto.' },
      { step:'04', title:'Analizar', desc:'El Edge AI integrado procesa los datos en tiempo real, comparando las lecturas con la línea base de salud personal del paciente.' },
      { step:'05', title:'Alertar', desc:'Los resultados aparecen en la pantalla del dispositivo, la app móvil y el panel web del hospital simultáneamente.' },
      { step:'06', title:'Actuar', desc:'El proveedor de salud revisa los resultados y recomienda tratamiento en etapa temprana. Detectada en etapa 1 o 2, la ERC aún es tratable.' },
    ],
    impactTitle: 'Nuestro impacto',
    impactSubtitle: 'Construyendo soberanía sanitaria para África, una comunidad a la vez.',
    impacts: [
      { number:'850K+', label:'Cameruneses que viven con ERC ahora mismo, la mayoría sin diagnosticar' },
      { number:'5.000+', label:'Pacientes que aspiramos a alcanzar para 2027' },
      { number:'80%', label:'Reducción de costos vs atención tradicional de diálisis' },
      { number:'24/7', label:'Monitoreo continuo en tiempo real' },
    ],
    quote: '"La soberanía sanitaria de África no vendrá de la dependencia. Vendrá de jóvenes africanos que construyen."',
    quoteAuthor: 'Kombou Komga Murielle Nahomy, Fundadora de RenalGuard',
    teamTitle: 'El equipo',
    teamSubtitle: 'Impulsado por el propósito, construido sobre la innovación.',
    contactTitle: 'Contáctanos',
    contactSubtitle: '¿Interesado en RenalGuard? Nos encantaría escucharte.',
    sendBtn: 'Enviar mensaje',
    sentTitle: 'Mensaje enviado!',
    sentDesc: 'Gracias por contactarnos. Te responderemos pronto.',
    footerDesc: 'Una solución IoT portátil para la detección temprana de enfermedad renal crónica.',
    footerLinks: 'Enlaces rápidos',
    footerContact: 'Contacto',
    footerRights: 'Todos los derechos reservados.',
    footerMission: 'Detectar pronto. Vivir más. Construido en Camerún para África.',
  },
  fr: {
    nav: ['À propos','Problème','Solution','Comment ça marche','Impact','Équipe','Contact'],
    contactBtn: 'Nous contacter',
    badge: 'Technologie de santé innovante du Cameroun',
    heroTitle1: 'Détecter tôt.',
    heroTitle2: 'Vivre plus longtemps.',
    heroSubtitle: 'RenalGuard est un dispositif IoT portable qui détecte les premiers signes de la maladie rénale chronique, apportant des diagnostics vitaux à chaque communauté en Afrique.',
    discoverBtn: 'Découvrir notre solution',
    howBtn: 'Comment ça marche',
    stats: [
      { number:'70%', label:'Des patients diagnostiqués seulement au stade avancé de l\'insuffisance rénale' },
      { number:'12x', label:'La dialyse coûte plus que le revenu annuel moyen au Cameroun' },
      { number:'18%', label:'Taux de survie à 5 ans pour les patients sous dialyse au Cameroun' },
    ],
    problemTitle: "L'épidémie silencieuse",
    problemSubtitle: 'La maladie rénale chronique détruit des vies au Cameroun, souvent diagnostiquée trop tard.',
    problems: [
      { title:'Pas d\'accès', desc:'La plupart des communautés rurales n\'ont pas d\'outils de diagnostic. Les patients parcourent des heures pour atteindre une clinique.' },
      { title:'Trop tard', desc:'80% des cas sont diagnostiqués à un stade avancé où la dialyse devient la seule option, coûtant des milliers de dollars.' },
      { title:'Souffrance silencieuse', desc:'La MRC ne montre aucun symptôme jusqu\'au stade avancé. Les dommages irréversibles sont déjà faits quand les patients se sentent malades.' },
    ],
    solutionBadge: 'Notre innovation',
    solutionTitle: 'Découvrez',
    solutions: [
      {
        subtitle: 'RenalGuard est une ceinture abdominale portable intégrant des capteurs avancés et une IA. Elle surveille en continu les premiers indicateurs de la maladie rénale.',
        features: [
          'Capteurs de bio-impédance détectent la rétention de liquides',
          'Capteur PPG surveille la santé cardiovasculaire',
          'Edge AI analyse les données en temps réel et envoie des alertes',
          'Énergie solaire avec backup USB-C pour tout environnement',
        ]
      },
      {
        subtitle: 'Les résultats sont livrés en moins de 15 minutes directement sur l\'écran du dispositif, l\'app mobile ou le tableau de bord web de l\'hôpital.',
        features: [
          'L\'ID unique du dispositif se connecte instantanément à l\'app RenalGuard',
          'Le tableau de bord web gère plusieurs patients simultanément',
          'La connectivité GSM et LoRaWAN fonctionne sans internet en zones rurales',
          'Résultats affichés pendant que le dispositif est encore porté pour une précision maximale',
        ]
      }
    ],
    deviceLabel: 'Dispositif portable',
    monitoring: 'Surveillance active',
    howTitle: 'Comment ça marche',
    howSubtitle: 'Simple. Efficace. Salvateur. Résultats en moins de 15 minutes.',
    steps: [
      { step:'01', title:'Placer', desc:'Le patient place la ceinture RenalGuard directement sur la peau autour de l\'abdomen. Aucune préparation nécessaire.' },
      { step:'02', title:'Connecter', desc:'Le dispositif s\'active automatiquement. Le patient entre l\'ID unique dans l\'app RenalGuard pour synchroniser son profil.' },
      { step:'03', title:'Détecter', desc:'Les capteurs collectent les données de santé rénale pendant 8 à 12 minutes pendant que le dispositif reste porté.' },
      { step:'04', title:'Analyser', desc:'L\'Edge AI embarquée traite les données en temps réel, comparant les mesures au profil de santé personnel du patient.' },
      { step:'05', title:'Alerter', desc:'Les résultats apparaissent sur l\'écran du dispositif, l\'app mobile et le tableau de bord web de l\'hôpital simultanément.' },
      { step:'06', title:'Agir', desc:'Le professionnel de santé examine les résultats et recommande un traitement précoce. Détectée au stade 1 ou 2, la MRC est encore traitable.' },
    ],
    impactTitle: 'Notre impact',
    impactSubtitle: 'Construire la souveraineté sanitaire de l\'Afrique, une communauté à la fois.',
    impacts: [
      { number:'850K+', label:'Camerounais vivant avec la MRC actuellement, la plupart non diagnostiqués' },
      { number:'5 000+', label:'Patients que nous visons d\'atteindre d\'ici 2027' },
      { number:'80%', label:'Réduction des coûts vs soins traditionnels de dialyse' },
      { number:'24/7', label:'Surveillance continue en temps réel' },
    ],
    quote: '"La souveraineté sanitaire de l\'Afrique ne viendra pas de la dépendance. Elle viendra des jeunes Africains qui construisent."',
    quoteAuthor: 'Kombou Komga Murielle Nahomy, Fondatrice de RenalGuard',
    teamTitle: 'L\'équipe',
    teamSubtitle: 'Portée par la mission, construite sur l\'innovation.',
    contactTitle: 'Contactez-nous',
    contactSubtitle: 'Intéressé par RenalGuard ? Nous serions ravis de vous entendre.',
    sendBtn: 'Envoyer le message',
    sentTitle: 'Message envoyé !',
    sentDesc: 'Merci de nous avoir contactés. Nous vous répondrons bientôt.',
    footerDesc: 'Une solution IoT portable pour la détection précoce de la maladie rénale chronique.',
    footerLinks: 'Liens rapides',
    footerContact: 'Contact',
    footerRights: 'Tous droits réservés.',
    footerMission: 'Détecter tôt. Vivre plus longtemps. Construit au Cameroun pour l\'Afrique.',
  }
};

// ── THEMES ───────────────────────────────────────────────
const themes = {
  // Logo 1 themes
  logo1: {
    dark: {
      bg:'#1a1a1a', bgSecondary:'#222222', bgCard:'#2d2d2d',
      navbar:'#111111', text:'#FFFFFF', textSecondary:'#b0b0b0',
      textMuted:'#666666', border:'#383838', accent:'#AD3B48',
      accentLight:'rgba(173,59,72,0.12)',
      heroGradient:'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #111111 100%)',
      statBg:'rgba(173,59,72,0.08)',
      shadow:'rgba(173,59,72,0.15)',
      logoLight:'Logo1_Light-BGremoved.png',
      logoDark:'Logo1_Dark-BGremoved.png',
    },
    light: {
      bg:'#FFFFFF', bgSecondary:'#FFF8F8', bgCard:'#FFFFFF',
      navbar:'#FFFFFF', text:'#000000', textSecondary:'#444444',
      textMuted:'#888888', border:'#F0D0D3', accent:'#AD3B48',
      accentLight:'rgba(173,59,72,0.08)',
      heroGradient:'linear-gradient(135deg, #FFF0F1 0%, #FFFFFF 50%, #FFF5F5 100%)',
      statBg:'rgba(173,59,72,0.06)',
      shadow:'rgba(173,59,72,0.12)',
      logoLight:'Logo1_Light-BGremoved.png',
      logoDark:'Logo1_Light-BGremoved.png',
    }
  },
  // Logo 14 themes
  logo14: {
    dark: {
      bg:'#111111', bgSecondary:'#1C1C1C', bgCard:'#2a2a2a',
      navbar:'#0a0a0a', text:'#FFFFFF', textSecondary:'#a0a0a0',
      textMuted:'#666666', border:'#333333', accent:'#EE9067',
      accentLight:'rgba(238,144,103,0.12)',
      heroGradient:'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0f0f1e 100%)',
      statBg:'rgba(238,144,103,0.08)',
      shadow:'rgba(238,144,103,0.15)',
      logoLight:'RG_Logo_Light-Bgremoved.png',
      logoDark:'RG_Logo_Dark-Bgremoved.png',
    },
    light: {
      bg:'#FFFFFF', bgSecondary:'#F5F8FA', bgCard:'#FFFFFF',
      navbar:'#FFFFFF', text:'#000000', textSecondary:'#444444',
      textMuted:'#888888', border:'#E5E7EB', accent:'#EE9067',
      accentLight:'rgba(238,144,103,0.08)',
      heroGradient:'linear-gradient(135deg, #FFF5EF 0%, #FFFFFF 50%, #F0F8FF 100%)',
      statBg:'rgba(238,144,103,0.06)',
      shadow:'rgba(238,144,103,0.12)',
      logoLight:'RG_Logo_Light-Bgremoved.png',
      logoDark:'RG_Logo_Dark-Bgremoved.png',
    }
  }
};

// ── ANIMATED SECTION ──────────────────────────────────────
function AnimSection({ children, animation='anim-fadeInUp', style={} }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={visible ? animation : ''} style={{opacity: visible ? 1 : 0, ...style}}>
      {children}
    </div>
  );
}

// ── NAVBAR ───────────────────────────────────────────────
function Navbar({ t, isDark, toggleTheme, lang, setLang, logoVersion }) {
  
  const [scrolled, setScrolled] = useState(false);
  const tr = translations[lang];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoSrc = isDark ? t.logoDark : t.logoLight;
  const langs = [{code:'en',label:'EN'},{code:'es',label:'ES'},{code:'fr',label:'FR'}];

  return (
    <nav style={{
      backgroundColor:t.navbar, position:'fixed', width:'100%', zIndex:50,
      boxShadow: scrolled ? `0 2px 30px ${t.shadow}` : 'none',
      borderBottom:`1px solid ${t.border}`, transition:'all 0.3s ease'
    }}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'14px 24px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        {/* Logo — click reloads page */}
        <a href="/" onClick={e=>{e.preventDefault();window.location.reload();}} style={{display:'flex',alignItems:'center',textDecoration:'none'}}>
          <img src={require(`./${logoSrc}`)} alt="RenalGuard" style={{height:'42px',objectFit:'contain'}} />
        </a>

        {/* Desktop Links */}
        <div style={{display:'flex',gap:'24px'}}>
          {tr.nav.map((item,i)=>(
            <a key={i} href={`#${['about','problem','solution','how-it-works','impact','team','contact'][i]}`}
              style={{color:t.textSecondary,textDecoration:'none',fontSize:'14px',fontWeight:'500',transition:'color 0.2s'}}
              onMouseEnter={e=>e.target.style.color=t.accent}
              onMouseLeave={e=>e.target.style.color=t.textSecondary}>
              {item}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          {/* Language */}
          <div style={{display:'flex',gap:'2px',backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'999px',padding:'3px'}}>
            {langs.map(l=>(
              <button key={l.code} onClick={()=>setLang(l.code)} style={{
                backgroundColor:lang===l.code?t.accent:'transparent',
                color:lang===l.code?'white':t.textSecondary,
                border:'none',borderRadius:'999px',padding:'4px 10px',
                fontSize:'12px',fontWeight:'700',cursor:'pointer',transition:'all 0.2s'
              }}>{l.label}</button>
            ))}
          </div>

          {/* Toggle */}
          <button onClick={toggleTheme} title={isDark?'Switch to Light':'Switch to Dark'} style={{
            width:'48px',height:'24px',backgroundColor:isDark?t.accent:'#CBD5E0',
            borderRadius:'999px',border:'none',cursor:'pointer',position:'relative',
            transition:'background-color 0.3s',display:'flex',alignItems:'center',padding:'2px'
          }}>
            <span style={{
              width:'20px',height:'20px',backgroundColor:'white',borderRadius:'50%',
              display:'flex',alignItems:'center',justifyContent:'center',
              transform:isDark?'translateX(24px)':'translateX(0)',
              transition:'transform 0.3s',boxShadow:'0 1px 4px rgba(0,0,0,0.3)',fontSize:'10px'
            }}>
              {isDark ? <BsMoonFill color="#4A5568" size={10}/> : <BsSunFill color="#F6AD55" size={10}/>}
            </span>
          </button>

          {/* CTA */}
          <a href="#contact" style={{
            backgroundColor:t.accent,color:'white',padding:'9px 20px',borderRadius:'999px',
            textDecoration:'none',fontSize:'14px',fontWeight:'700',
            boxShadow:`0 4px 12px ${t.shadow}`
          }}>{tr.contactBtn}</a>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ─────────────────────────────────────────────────
function Hero({ t, lang }) {
  const tr = translations[lang];
  return (
    <section id="about" style={{
      minHeight:'100vh',display:'flex',alignItems:'center',paddingTop:'80px',
      backgroundImage:`linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)), url(${require('./HeroSectionImg.jpg')})`,
      backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'
    }}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'80px 24px',textAlign:'center',width:'100%'}}>
        <AnimSection animation="anim-fadeIn">
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',backgroundColor:'rgba(255,255,255,0.15)',color:'white',padding:'8px 18px',borderRadius:'999px',fontSize:'13px',fontWeight:'700',marginBottom:'28px',backdropFilter:'blur(10px)'}}>
            <FiGlobe size={14}/> {tr.badge}
          </div>
          <h1 style={{color:'white',fontSize:'76px',fontWeight:'900',lineHeight:'1.05',marginBottom:'24px',letterSpacing:'-2px'}}>
            {tr.heroTitle1}<br/><span style={{color:t.accent}}>{tr.heroTitle2}</span>
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'20px',maxWidth:'680px',margin:'0 auto 44px',lineHeight:'1.75'}}>
            {tr.heroSubtitle}
          </p>
          <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="#solution" style={{backgroundColor:t.accent,color:'white',padding:'16px 36px',borderRadius:'999px',textDecoration:'none',fontSize:'17px',fontWeight:'700',boxShadow:`0 8px 28px ${t.shadow}`,display:'flex',alignItems:'center',gap:'8px'}}>
              {tr.discoverBtn} <FiChevronRight/>
            </a>
            <a href="#how-it-works" style={{border:'2px solid white',color:'white',padding:'16px 36px',borderRadius:'999px',textDecoration:'none',fontSize:'17px',fontWeight:'700',display:'flex',alignItems:'center',gap:'8px',backdropFilter:'blur(10px)'}}>
              {tr.howBtn} <FiActivity size={16}/>
            </a>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginTop:'80px',maxWidth:'780px',marginLeft:'auto',marginRight:'auto'}}>
            {tr.stats.map((stat,i)=>(
              <div key={i} style={{backgroundColor:'rgba(255,255,255,0.12)',borderRadius:'16px',padding:'28px 20px',border:'1px solid rgba(255,255,255,0.2)',backdropFilter:'blur(10px)'}}>
                <div style={{color:t.accent,fontSize:'36px',fontWeight:'900'}}>{stat.number}</div>
                <div style={{color:'rgba(255,255,255,0.75)',fontSize:'13px',marginTop:'6px',lineHeight:'1.5'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

// ── PROBLEM ──────────────────────────────────────────────
function Problem({ t, lang }) {
  const tr = translations[lang];
  const images = ['NoAccessImg.jpg','TooLateImg.jpg','SilentSufferingImg.jpg'];
  return (
    <section id="problem" style={{backgroundColor:t.bgSecondary,padding:'100px 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <AnimSection>
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <h2 style={{color:t.text,fontSize:'48px',fontWeight:'900',marginBottom:'16px',letterSpacing:'-1px'}}>{tr.problemTitle}</h2>
            <p style={{color:t.textSecondary,fontSize:'18px',maxWidth:'600px',margin:'0 auto',lineHeight:'1.7'}}>{tr.problemSubtitle}</p>
          </div>
        </AnimSection>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'28px'}}>
          {tr.problems.map((card,i)=>(
            <AnimSection key={i} animation={i===0?'anim-fadeInLeft':i===2?'anim-fadeInRight':'anim-fadeInUp'}>
              <div style={{backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'20px',overflow:'hidden',transition:'all 0.3s ease',height:'100%'}}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px)'}
                onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                <img src={require(`./${images[i]}`)} alt={card.title} style={{width:'100%',height:'200px',objectFit:'cover'}}/>
                <div style={{padding:'28px'}}>
                  <h3 style={{color:t.text,fontSize:'20px',fontWeight:'800',marginBottom:'12px'}}>{card.title}</h3>
                  <p style={{color:t.textSecondary,lineHeight:'1.75',margin:0}}>{card.desc}</p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SOLUTION ─────────────────────────────────────────────
function Solution({ t, lang }) {
  const tr = translations[lang];
  const deviceImages = ['RenalGuard1.jpg','RenalGuard2.jpg'];
  const floatClasses = ['float','float2'];

  const featureIcons1 = [
    <MdOutlineSensors size={20} color={t.accent}/>,
    <FiActivity size={20} color={t.accent}/>,
    <FiCpu size={20} color={t.accent}/>,
    <FiSun size={20} color={t.accent}/>,
  ];

  const featureIcons2 = [
    <FiPhone size={20} color={t.accent}/>,
    <FiGlobe size={20} color={t.accent}/>,
    <MdOutlineHealthAndSafety size={20} color={t.accent}/>,
    <FiShield size={20} color={t.accent}/>,
  ];

  return (
    <section id="solution" style={{backgroundColor:t.bg,padding:'100px 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <AnimSection>
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <div style={{display:'inline-block',backgroundColor:t.accentLight,color:t.accent,padding:'8px 18px',borderRadius:'999px',fontSize:'13px',fontWeight:'700',marginBottom:'16px'}}>
              {tr.solutionBadge}
            </div>
            <h2 style={{color:t.text,fontSize:'48px',fontWeight:'900',letterSpacing:'-1px'}}>
              {tr.solutionTitle} <span style={{color:t.accent}}>RenalGuard</span>
            </h2>
          </div>
        </AnimSection>

        {tr.solutions.map((sol,idx)=>(
          <AnimSection key={idx} animation={idx%2===0?'anim-fadeInLeft':'anim-fadeInRight'}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center',marginBottom:'80px'}}>
              {idx%2===0 ? (
                <>
                  <div>
                    <p style={{color:t.textSecondary,fontSize:'17px',marginBottom:'32px',lineHeight:'1.8'}}>{sol.subtitle}</p>
                    <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                      {sol.features.map((feat,j)=>(
                        <div key={j} style={{backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'14px',padding:'16px 20px',display:'flex',alignItems:'center',gap:'14px'}}>
                          {featureIcons1[j]}
                          <p style={{color:t.textSecondary,margin:0,fontSize:'15px'}}>{feat}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <div className={floatClasses[idx]} style={{borderRadius:'24px',overflow:'hidden',boxShadow:`0 24px 64px ${t.shadow}`,border:`1px solid ${t.border}`}}>
                      <img src={require(`./${deviceImages[idx]}`)} alt="RenalGuard device" style={{width:'100%',maxWidth:'400px',display:'block'}}/>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{display:'flex',justifyContent:'center'}}>
                    <div className={floatClasses[idx]} style={{borderRadius:'24px',overflow:'hidden',boxShadow:`0 24px 64px ${t.shadow}`,border:`1px solid ${t.border}`}}>
                      <img src={require(`./${deviceImages[idx]}`)} alt="RenalGuard in use" style={{width:'100%',maxWidth:'400px',display:'block'}}/>
                    </div>
                  </div>
                  <div>
                    <p style={{color:t.textSecondary,fontSize:'17px',marginBottom:'32px',lineHeight:'1.8'}}>{sol.subtitle}</p>
                    <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                      {sol.features.map((feat,j)=>(
                        <div key={j} style={{backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'14px',padding:'16px 20px',display:'flex',alignItems:'center',gap:'14px'}}>
                          {featureIcons2[j]}
                          <p style={{color:t.textSecondary,margin:0,fontSize:'15px'}}>{feat}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────
function HowItWorks({ t, lang }) {
  const tr = translations[lang];
  const stepImages = ['HowItWorks1.jpg','HowItWorks2.jpg','HowItWorks3.jpg','HowItWorks4.jpg','HowItWorks5.jpg','HowItWorks6.jpg'];
  return (
    <section id="how-it-works" style={{backgroundColor:t.bgSecondary,padding:'100px 0'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <AnimSection>
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <h2 style={{color:t.text,fontSize:'48px',fontWeight:'900',marginBottom:'16px',letterSpacing:'-1px'}}>{tr.howTitle}</h2>
            <p style={{color:t.textSecondary,fontSize:'18px'}}>{tr.howSubtitle}</p>
          </div>
        </AnimSection>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'28px'}}>
          {tr.steps.map((item,i)=>(
            <AnimSection key={i} animation="anim-fadeInUp">
              <div style={{backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'20px',overflow:'hidden',transition:'all 0.3s ease'}}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px)'}
                onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                <div style={{position:'relative'}}>
                  <img src={require(`./${stepImages[i]}`)} alt={item.title} style={{width:'100%',height:'180px',objectFit:'cover'}}/>
                  <div style={{position:'absolute',top:'12px',left:'12px',backgroundColor:t.accent,color:'white',fontWeight:'900',fontSize:'14px',padding:'4px 12px',borderRadius:'999px'}}>
                    {item.step}
                  </div>
                </div>
                <div style={{padding:'24px'}}>
                  <h3 style={{color:t.text,fontSize:'20px',fontWeight:'800',marginBottom:'10px'}}>{item.title}</h3>
                  <p style={{color:t.textSecondary,lineHeight:'1.7',margin:0,fontSize:'14px'}}>{item.desc}</p>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── IMPACT ───────────────────────────────────────────────
function Impact({ t, isDark, lang }) {
  const tr = translations[lang];
  const impactIcons = [<FiUsers size={28} color="white"/>,<FiHeart size={28} color="white"/>,<MdWaterDrop size={28} color="white"/>,<FiActivity size={28} color="white"/>];
  return (
    <section id="impact" style={{
      backgroundImage:`linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)), url(${require('./OurImpactImg.jpg')})`,
      backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed',
      padding:'100px 0'
    }}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <AnimSection>
          <div style={{textAlign:'center',marginBottom:'64px'}}>
            <h2 style={{color:'white',fontSize:'48px',fontWeight:'900',marginBottom:'16px',letterSpacing:'-1px'}}>{tr.impactTitle}</h2>
            <p style={{color:'rgba(255,255,255,0.75)',fontSize:'18px'}}>{tr.impactSubtitle}</p>
          </div>
        </AnimSection>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
          {tr.impacts.map((stat,i)=>(
            <AnimSection key={i} animation="anim-fadeInUp">
              <div style={{
                backgroundColor:'rgba(255,255,255,0.12)',
                border:'1px solid rgba(255,255,255,0.2)',
                borderRadius:'16px', padding:'28px 20px',
                textAlign:'center', backdropFilter:'blur(10px)',
                transition:'all 0.3s ease', height:'100%',
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'
              }}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-6px)'}
                onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
                <div style={{marginBottom:'12px'}}>{impactIcons[i]}</div>
                <div style={{color:'white',fontSize:'28px',fontWeight:'900',marginBottom:'8px'}}>{stat.number}</div>
                <div style={{color:'rgba(255,255,255,0.75)',fontSize:'13px',lineHeight:'1.5'}}>{stat.label}</div>
              </div>
            </AnimSection>
          ))}
        </div>
        <AnimSection>
          <div style={{
            backgroundColor:'rgba(255,255,255,0.12)',
            border:'1px solid rgba(255,255,255,0.2)',
            borderRadius:'16px', padding:'36px',
            marginTop:'48px', marginBottom:'48px',
            textAlign:'center', backdropFilter:'blur(10px)'
          }}>
            <p style={{color:'white',fontSize:'20px',fontStyle:'italic',margin:0,lineHeight:'1.7'}}>{tr.quote}</p>
            <p style={{color:t.accent,marginTop:'14px',fontWeight:'700',marginBottom:0,fontSize:'15px'}}>{tr.quoteAuthor}</p>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}

// ── TEAM ─────────────────────────────────────────────────
function Team({ t, lang }) {
  const tr = translations[lang];
  const members = [
    {
      name: 'Kombou Komga Murielle Nahomy',
      role: 'Founder, Lead Developer & UX/UI Designer',
      photo: 'Photo_Murielle_KOMBOU.png',
      awards: ['🏆 Female Winner, POESAM 2026', '🏆 2nd Place, Blue Tech Challenge 2024'],
      desc: 'Software Engineering student at PK Fokam Institute of Excellence & Developer at PKFokam Research Center, Yaoundé. Professional UX/UI Designer building African-owned health solutions that reach patients before it is too late.',
      showLinkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/murielle-kombou-0681562b9/',
      awardBg: t.accentLight,
      awardBorder: t.border,
      awardColor: t.accent,
      // awardBg: 'rgba(34,197,94,0.12)',
      // awardBorder: 'rgba(34,197,94,0.3)',
      // awardColor: '#22c55e',
    },
    {
      name: 'Kamgaing Kamdem Fred Arold',
      role: 'Co-Founder, Hardware Engineer & Data Scientist at MTN',
      photo: 'Kamdem Profile.jpg',
      awards: [],
      desc: 'Expert in IoT hardware design, embedded systems and data science. Leading the physical development of the RenalGuard wearable device while leveraging data expertise from MTN Cameroon.',
      showLinkedin: true,
      linkedinUrl: 'https://linkedin.com/in/fred-arold-kamdem-kamgaing-a41631214',
      awardBg: t.accentLight,
      awardBorder: t.border,
      awardColor: t.accent,
    },
    {
      name: 'Andrea Tindo',
      role: 'Co-Founder & Business Development Lead',
      photo: 'TindoProfile.jpg',
      awards: [],
      desc: 'Expert in business development, strategic partnerships and market expansion across Africa. Leading RenalGuard growth strategy, investor relations and healthcare ecosystem partnerships.',
      showLinkedin: true,
      linkedinUrl: '#',
      awardBg: t.accentLight,
      awardBorder: t.border,
      awardColor: t.accent,
    },
    {
      name: 'Dr Tchuinte Timnou Germael Patient',
      role: 'Medical Advisor & Nephrologist',
      photo: 'GermaelProfile.jpg',
      awards: ['📍 Clinique Kouam Samuel', '🏆 Prix d\'excellence FSS/UAM, Major 2023', 'ONMC : 010-03/26'],
      desc: 'Specialist in nephrology with clinical expertise in kidney disease management. Providing medical validation and clinical oversight for the RenalGuard device.',
      showLinkedin: true,
      linkedinUrl: 'https://www.linkedin.com/in/germael-patient-t-timnou-471b1028b',
      awardBg: t.accentLight,
      awardBorder: t.border,
      awardColor: t.accent,
    },
  ];

  return (
    <section id="team" style={{backgroundColor: t.bg, padding: '100px 0'}}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 24px'}}>
        <AnimSection>
          <div style={{textAlign: 'center', marginBottom: '64px'}}>
            <h2 style={{color: t.text, fontSize: '48px', fontWeight: '900', marginBottom: '16px', letterSpacing: '-1px'}}>{tr.teamTitle}</h2>
            <p style={{color: t.textSecondary, fontSize: '18px'}}>{tr.teamSubtitle}</p>
          </div>
        </AnimSection>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '24px', alignItems: 'stretch'}}>
          {members.map((m, i) => (
            <AnimSection key={i} animation={i === 0 ? 'anim-fadeInLeft' : i === 3 ? 'anim-fadeInRight' : 'anim-fadeInUp'}>
              <div style={{
                backgroundColor: t.bgCard, border: `1px solid ${t.border}`,
                borderRadius: '24px', padding: '28px', textAlign: 'center',
                transition: 'all 0.3s ease', height: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>

                <img
                  src={require(`./${m.photo}`)}
                  alt={m.name}
                  style={{
                    width: '90px', height: '90px', borderRadius: '50%',
                    objectFit: 'cover', margin: '0 auto 16px', display: 'block',
                    border: `3px solid ${t.accent}`,
                    boxShadow: `0 6px 20px ${t.shadow}`
                  }}
                />

                <h3 style={{color: t.text, fontSize: '15px', fontWeight: '800', marginBottom: '4px'}}>{m.name}</h3>
                <p style={{color: t.accent, fontWeight: '700', marginBottom: '14px', fontSize: '13px', lineHeight: '1.4'}}>{m.role}</p>

                {m.awards.length > 0 && (
                  <div style={{
                    backgroundColor: m.awardBg,
                    borderRadius: '10px', padding: '10px', marginBottom: '12px', width: '100%',
                    border: `1px solid ${m.awardBorder}`
                  }}>
                    {m.awards.map((a, j) => (
                      <p key={j} style={{color: m.awardColor, fontSize: '11px', fontWeight: '700', margin: '2px 0'}}>{a}</p>
                    ))}
                  </div>
                )}

                <p style={{color: t.textSecondary, fontSize: '12px', lineHeight: '1.7', marginBottom: '16px', flexGrow: 1}}>{m.desc}</p>

                {m.showLinkedin && (
                  <a href={m.linkedinUrl} target="_blank" rel="noreferrer"
                    style={{
                      backgroundColor: t.accent, color: 'white',
                      padding: '7px 16px', borderRadius: '999px',
                      textDecoration: 'none', fontSize: '12px', fontWeight: '700',
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      marginTop: 'auto'
                    }}>
                    <FiLinkedin size={12}/> LinkedIn
                  </a>
                )}
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
// function Team({ t, lang }) {
//   const tr = translations[lang];
//   const members = [
//     {
//       name:'Kombou Komga Murielle Nahomy',
//       role:'Founder & Lead Developer',
//       photo:'Photo_Murielle_KOMBOU.png',
//       awards:['Female Winner, POESAM 2026','2nd Place, Blue Tech Challenge 2024'],
//       desc:'Software Engineering student at PK Fokam Institute of Excellence, Yaoundé. Building African-owned health solutions that reach patients before it is too late.',
//       showLinkedin:true,
//       linkedinUrl:'https://www.linkedin.com/in/murielle-kombou-0681562b9/'
//     },
//     {
//       name:'Kamgaing Kamdem Fred Arold',
//       role:'Co-Founder & Hardware Engineer',
//       photo:'Kamdem Profile.jpg',
//       awards:[],
//       desc:'Expert in IoT hardware design and embedded systems. Leading the physical development of the RenalGuard wearable device.',
//       showLinkedin:true,
//       linkedinUrl:'https://linkedin.com/in/fred-arold-kamdem-kamgaing-a41631214'
//     },
//     {
//       name:'Dr Rosine Esobo',
//       role:'Medical Advisor',
//       photo:'EsoboProfile.jpg',
//       awards:[],
//       desc:'Specialist in nephrology with extensive experience in kidney disease management in Cameroon. Providing clinical validation for RenalGuard.',
//       showLinkedin:false,
//       linkedinUrl:''
//     },
//   ];
//   return (
//     <section id="team" style={{backgroundColor:t.bg,padding:'100px 0'}}>
//       <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
//         <AnimSection>
//           <div style={{textAlign:'center',marginBottom:'64px'}}>
//             <h2 style={{color:t.text,fontSize:'48px',fontWeight:'900',marginBottom:'16px',letterSpacing:'-1px'}}>{tr.teamTitle}</h2>
//             <p style={{color:t.textSecondary,fontSize:'18px'}}>{tr.teamSubtitle}</p>
//           </div>
//         </AnimSection>
//         <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'28px',alignItems:'stretch'}}>
//           {members.map((m,i)=>(
//             <AnimSection key={i} animation={i===0?'anim-fadeInLeft':i===2?'anim-fadeInRight':'anim-fadeInUp'}>
//               <div style={{
//                 backgroundColor:t.bgCard,border:`1px solid ${t.border}`,
//                 borderRadius:'24px',padding:'36px',textAlign:'center',
//                 transition:'all 0.3s ease',height:'100%',
//                 display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'
//               }}
//                 onMouseEnter={e=>e.currentTarget.style.transform='translateY(-6px)'}
//                 onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
//                 <img src={require(`./${m.photo}`)} alt={m.name}
//                   style={{width:'100px',height:'100px',borderRadius:'50%',objectFit:'cover',
//                     margin:'0 auto 20px',display:'block',
//                     border:`3px solid ${t.accent}`,
//                     boxShadow:`0 6px 20px ${t.shadow}`}}/>
//                 <h3 style={{color:t.text,fontSize:'17px',fontWeight:'800',marginBottom:'4px'}}>{m.name}</h3>
//                 <p style={{color:t.accent,fontWeight:'700',marginBottom:'16px',fontSize:'14px'}}>{m.role}</p>
//                 {m.awards.length>0 && (
//                   <div style={{backgroundColor:t.accentLight,borderRadius:'10px',padding:'12px',marginBottom:'14px',width:'100%'}}>
//                     {m.awards.map((a,j)=>(
//                       <p key={j} style={{color:t.accent,fontSize:'12px',fontWeight:'700',margin:'2px 0'}}>🏆 {a}</p>
//                     ))}
//                   </div>
//                 )}
//                 <p style={{color:t.textSecondary,fontSize:'13px',lineHeight:'1.7',marginBottom:'18px',flexGrow:1}}>{m.desc}</p>
//                 {m.showLinkedin && (
//                   <a href={m.linkedinUrl} target="_blank" rel="noreferrer"
//                     style={{backgroundColor:t.accent,color:'white',padding:'8px 20px',
//                       borderRadius:'999px',textDecoration:'none',fontSize:'13px',
//                       fontWeight:'700',display:'inline-flex',alignItems:'center',gap:'6px',
//                       marginTop:'auto'}}>
//                     <FiLinkedin size={14}/> LinkedIn
//                   </a>
//                 )}
//               </div>
//             </AnimSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ── CONTACT ──────────────────────────────────────────────
// function Contact({ t, lang }) {
//   const tr = translations[lang];
//   const [form, setForm] = useState({name:'',email:'',message:''});
//   const [errors, setErrors] = useState({name:'',email:'',message:''});
//   const [sent, setSent] = useState(false);

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validateField = (key, value) => {
//     if (!value.trim()) return 'This field is required.';
//     if (key === 'email' && !validateEmail(value)) return 'Please enter a valid email address.';
//     return '';
//   };

//   const handleChange = (key, value) => {
//     setForm({...form, [key]: value});
//     setErrors({...errors, [key]: validateField(key, value)});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {
//       name: validateField('name', form.name),
//       email: validateField('email', form.email),
//       message: validateField('message', form.message),
//     };
//     setErrors(newErrors);
//     if (Object.values(newErrors).every(e => e === '')) {
//       setSent(true);
//     }
//   };

//   return (
//     <section id="contact" style={{
//       backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${require('./RenalGuard3.jpg')})`,
//       backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment:'fixed',
//       padding:'100px 0'
//     }}>
//       <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
//         <AnimSection>
//           <div style={{textAlign:'center',marginBottom:'64px'}}>
//             <h2 style={{color:'white',fontSize:'48px',fontWeight:'900',marginBottom:'16px',letterSpacing:'-1px'}}>{tr.contactTitle}</h2>
//             <p style={{color:'rgba(255,255,255,0.8)',fontSize:'18px'}}>{tr.contactSubtitle}</p>
//           </div>
//         </AnimSection>
//         <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'start'}}>
//           <AnimSection animation="anim-fadeInLeft">
//             <div>
//               <h3 style={{color:'white',fontSize:'24px',fontWeight:'800',marginBottom:'24px'}}>RenalGuard</h3>
//               {[
//                 {icon:<FiMail size={20} color={t.accent}/>,text:'a.muriellesarah@gmail.com'},
//                 {icon:<FiPhone size={20} color={t.accent}/>,text:'+237 657 393 103'},
//                 {icon:<FiMapPin size={20} color={t.accent}/>,text:'Yaoundé, Cameroon'},
//                 {icon:<FiLinkedin size={20} color={t.accent}/>,text:'linkedin.com/in/murielle-kombou'}
//               ].map((item,i)=>(
//                 <div key={i} style={{
//                   display:'flex',alignItems:'center',gap:'12px',
//                   backgroundColor:'rgba(255,255,255,0.12)',
//                   border:'1px solid rgba(255,255,255,0.2)',
//                   borderRadius:'12px',padding:'14px 18px',marginBottom:'12px',
//                   backdropFilter:'blur(10px)'
//                 }}>
//                   {item.icon}
//                   <span style={{color:'rgba(255,255,255,0.9)',fontSize:'15px'}}>{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </AnimSection>

//           <AnimSection animation="anim-fadeInRight">
//             {sent ? (
//               <div style={{
//                 backgroundColor:'rgba(255,255,255,0.12)',
//                 border:'1px solid rgba(255,255,255,0.2)',
//                 borderRadius:'24px',padding:'52px',textAlign:'center',
//                 backdropFilter:'blur(10px)'
//               }}>
//                 <FiHeart size={48} color={t.accent} style={{marginBottom:'16px'}}/>
//                 <h3 style={{color:'white',fontSize:'24px',fontWeight:'800',marginBottom:'8px'}}>{tr.sentTitle}</h3>
//                 <p style={{color:'rgba(255,255,255,0.8)'}}>{tr.sentDesc}</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} style={{
//                 backgroundColor:'rgba(255,255,255,0.12)',
//                 border:'1px solid rgba(255,255,255,0.2)',
//                 borderRadius:'24px',padding:'40px',
//                 display:'flex',flexDirection:'column',gap:'20px',
//                 backdropFilter:'blur(10px)'
//               }}>
//                 {[
//                   {label:'Full Name',type:'text',key:'name',ph:'Your full name'},
//                   {label:'Email',type:'text',key:'email',ph:'your@email.com'},
//                 ].map(f=>(
//                   <div key={f.key}>
//                     <label style={{color:'white',fontWeight:'700',display:'block',marginBottom:'8px',fontSize:'14px'}}>{f.label}</label>
//                     <input
//                       type={f.type}
//                       value={form[f.key]}
//                       onChange={e=>handleChange(f.key, e.target.value)}
//                       placeholder={f.ph}
//                       style={{
//                         backgroundColor: errors[f.key] ? 'rgba(255,80,80,0.15)' : 'rgba(255,255,255,0.15)',
//                         border: errors[f.key] ? '1px solid rgba(255,100,100,0.8)' : '1px solid rgba(255,255,255,0.3)',
//                         color:'white',borderRadius:'12px',
//                         padding:'12px 16px',width:'100%',
//                         outline:'none',fontSize:'15px',
//                         transition:'all 0.2s ease'
//                       }}/>
//                     {errors[f.key] && (
//                       <div style={{display:'flex',alignItems:'center',gap:'6px',marginTop:'6px'}}>
//                         <FiAlertCircle size={14} color="#ff8080"/>
//                         <p style={{color:'#ff8080',fontSize:'12px',margin:0,fontWeight:'600'}}>{errors[f.key]}</p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//                 <div>
//                   <label style={{color:'white',fontWeight:'700',display:'block',marginBottom:'8px',fontSize:'14px'}}>Message</label>
//                   <textarea
//                     rows={4}
//                     value={form.message}
//                     onChange={e=>handleChange('message', e.target.value)}
//                     placeholder="Tell us about your interest in RenalGuard..."
//                     style={{
//                       backgroundColor: errors.message ? 'rgba(255,80,80,0.15)' : 'rgba(255,255,255,0.15)',
//                       border: errors.message ? '1px solid rgba(255,100,100,0.8)' : '1px solid rgba(255,255,255,0.3)',
//                       color:'white',borderRadius:'12px',
//                       padding:'12px 16px',width:'100%',
//                       outline:'none',fontSize:'15px',resize:'vertical',
//                       transition:'all 0.2s ease'
//                     }}/>
//                   {errors.message && (
//                     <div style={{display:'flex',alignItems:'center',gap:'6px',marginTop:'6px'}}>
//                       <FiAlertCircle size={14} color="#ff8080"/>
//                       <p style={{color:'#ff8080',fontSize:'12px',margin:0,fontWeight:'600'}}>{errors.message}</p>
//                     </div>
//                   )}
//                 </div>
//                 <button type="submit" style={{
//                   backgroundColor:t.accent,color:'white',
//                   padding:'14px',borderRadius:'12px',
//                   fontWeight:'800',fontSize:'16px',
//                   border:'none',cursor:'pointer',
//                   boxShadow:`0 6px 20px ${t.shadow}`,
//                   transition:'all 0.2s ease'
//                 }}>
//                   {tr.sendBtn}
//                 </button>
//               </form>
//             )}
//           </AnimSection>
//         </div>
//       </div>
//     </section>
//   );
// } Active

// function Contact({ t, lang }) {
//   const tr = translations[lang];
//   const [form, setForm] = useState({name:'',email:'',message:''});
//   const [sent, setSent] = useState(false);
//   return (
//     <section id="contact" style={{backgroundColor:t.bgSecondary,padding:'100px 0'}}>
//       <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
//         <AnimSection>
//           <div style={{textAlign:'center',marginBottom:'64px'}}>
//             <h2 style={{color:t.text,fontSize:'48px',fontWeight:'900',marginBottom:'16px',letterSpacing:'-1px'}}>{tr.contactTitle}</h2>
//             <p style={{color:t.textSecondary,fontSize:'18px'}}>{tr.contactSubtitle}</p>
//           </div>
//         </AnimSection>
//         <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'start'}}>
//           <AnimSection animation="anim-fadeInLeft">
//             <div>
//               <h3 style={{color:t.text,fontSize:'24px',fontWeight:'800',marginBottom:'24px'}}>RenalGuard</h3>
//               {[{icon:<FiMail size={20} color={t.accent}/>,text:'a.muriellesarah@gmail.com'},{icon:<FiPhone size={20} color={t.accent}/>,text:'+237 657 393 103'},{icon:<FiMapPin size={20} color={t.accent}/>,text:'Yaoundé, Cameroon'},{icon:<FiLinkedin size={20} color={t.accent}/>,text:'linkedin.com/in/murielle-kombou'}].map((item,i)=>(
//                 <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'12px',padding:'14px 18px',marginBottom:'12px'}}>
//                   {item.icon}<span style={{color:t.textSecondary,fontSize:'15px'}}>{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </AnimSection>
//           <AnimSection animation="anim-fadeInRight">
//             {sent ? (
//               <div style={{backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'24px',padding:'52px',textAlign:'center'}}>
//                 <FiHeart size={48} color={t.accent} style={{marginBottom:'16px'}}/>
//                 <h3 style={{color:t.text,fontSize:'24px',fontWeight:'800',marginBottom:'8px'}}>{tr.sentTitle}</h3>
//                 <p style={{color:t.textSecondary}}>{tr.sentDesc}</p>
//               </div>
//             ) : (
//               <form onSubmit={e=>{e.preventDefault();setSent(true);}}
//                 style={{backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'24px',padding:'40px',display:'flex',flexDirection:'column',gap:'20px'}}>
//                 {[{label:'Full Name',type:'text',key:'name',ph:'Your full name'},{label:'Email',type:'email',key:'email',ph:'your@email.com'}].map(f=>(
//                   <div key={f.key}>
//                     <label style={{color:t.text,fontWeight:'700',display:'block',marginBottom:'8px',fontSize:'14px'}}>{f.label}</label>
//                     <input type={f.type} required value={form[f.key]} onChange={e=>setForm({...form,[f.key]:e.target.value})} placeholder={f.ph}
//                       style={{backgroundColor:t.bg,border:`1px solid ${t.border}`,color:t.text,borderRadius:'12px',padding:'12px 16px',width:'100%',outline:'none',fontSize:'15px'}}/>
//                   </div>
//                 ))}
//                 <div>
//                   <label style={{color:t.text,fontWeight:'700',display:'block',marginBottom:'8px',fontSize:'14px'}}>Message</label>
//                   <textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us about your interest in RenalGuard..."
//                     style={{backgroundColor:t.bg,border:`1px solid ${t.border}`,color:t.text,borderRadius:'12px',padding:'12px 16px',width:'100%',outline:'none',fontSize:'15px',resize:'vertical'}}/>
//                 </div>
//                 <button type="submit" style={{backgroundColor:t.accent,color:'white',padding:'14px',borderRadius:'12px',fontWeight:'800',fontSize:'16px',border:'none',cursor:'pointer',boxShadow:`0 6px 20px ${t.shadow}`}}>
//                   {tr.sendBtn}
//                 </button>
//               </form>
//             )}
//           </AnimSection>
//         </div>
//       </div>
//     </section>
//   );
// }

// ── FOOTER ───────────────────────────────────────────────
function Footer({ t, isDark, lang, logoVersion }) {
  const tr = translations[lang];
  const logoSrc = isDark ? t.logoDark : t.logoLight;
  return (
    <footer style={{backgroundColor:t.navbar,borderTop:`1px solid ${t.border}`,paddingTop:'64px'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'48px',marginBottom:'48px'}}>
          <div>
            <a href="/" onClick={e=>{e.preventDefault();window.location.reload();}} style={{display:'inline-block',marginBottom:'16px'}}>
              <img src={require(`./${logoSrc}`)} alt="RenalGuard" style={{height:'40px',objectFit:'contain'}}/>
            </a>
            <p style={{color:t.textMuted,fontSize:'14px',lineHeight:'1.7',maxWidth:'280px'}}>{tr.footerDesc}</p>
            <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
              {[FiTwitter,FiLinkedin,FiInstagram,FiFacebook].map((Icon,i)=>(
                <a key={i} href="/" style={{width:'34px',height:'34px',backgroundColor:t.bgCard,border:`1px solid ${t.border}`,borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none',transition:'all 0.2s'}}
                  onMouseEnter={e=>e.currentTarget.style.backgroundColor=t.accent}
                  onMouseLeave={e=>e.currentTarget.style.backgroundColor=t.bgCard}>
                  <Icon size={15} color={t.textMuted}/>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{color:t.text,fontWeight:'800',fontSize:'15px',marginBottom:'16px'}}>{tr.footerLinks}</h4>
            {tr.nav.map((item,i)=>(
              <a key={i} href={`#${['about','problem','solution','how-it-works','impact','team','contact'][i]}`}
                style={{display:'block',color:t.textMuted,textDecoration:'none',fontSize:'14px',marginBottom:'10px',transition:'color 0.2s'}}
                onMouseEnter={e=>e.target.style.color=t.accent}
                onMouseLeave={e=>e.target.style.color=t.textMuted}>
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4 style={{color:t.text,fontWeight:'800',fontSize:'15px',marginBottom:'16px'}}>{tr.footerContact}</h4>
            {[{icon:<FiMail size={14}/>,text:'a.muriellesarah@gmail.com'},{icon:<FiPhone size={14}/>,text:'+237 657 393 103'},{icon:<FiMapPin size={14}/>,text:'Yaoundé, Cameroon'}].map((item,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'10px'}}>
                <span style={{color:t.accent}}>{item.icon}</span>
                <span style={{color:t.textMuted,fontSize:'13px'}}>{item.text}</span>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{color:t.text,fontWeight:'800',fontSize:'15px',marginBottom:'16px'}}>Mission</h4>
            <p style={{color:t.textMuted,fontSize:'13px',lineHeight:'1.7'}}>{tr.footerMission}</p>
            <div style={{marginTop:'20px',backgroundColor:t.accentLight,borderRadius:'12px',padding:'14px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <MdOutlineScience size={18} color={t.accent}/>
                <a href="https://renalguard.live" target="_blank" rel="noreferrer" style={{color:t.accent,fontSize:'12px',fontWeight:'700',textDecoration:'none'}}>renalguard.live</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{borderTop:`1px solid ${t.border}`,padding:'20px 0',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <p style={{color:t.textMuted,fontSize:'13px',margin:0}}>2026 RenalGuard. {tr.footerRights}</p>
          <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
            style={{backgroundColor:t.accent,border:'none',color:'white',width:'36px',height:'36px',borderRadius:'8px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <FiArrowUp size={16}/>
          </button>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════
// VERSION LOGO 1 — Couleurs AD3B48 (ACTIVE)
// ═══════════════════════════════════════════════════════
function App() {
  const [isDark, setIsDark] = useState(false); // Light mode par défaut
  const [lang, setLang] = useState('en');
  const logoVersion = 'logo1';
  const t = isDark ? themes[logoVersion].dark : themes[logoVersion].light;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = globalStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = t.bg;
    document.body.style.transition = 'background-color 0.3s ease';
    document.body.style.margin = '0';
  }, [isDark, t.bg]);

  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',transition:'all 0.3s ease'}}>
      <Navbar t={t} isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} lang={lang} setLang={setLang} logoVersion={logoVersion}/>
      <Hero t={t} lang={lang}/>
      <Problem t={t} lang={lang}/>
      <Solution t={t} lang={lang}/>
      <HowItWorks t={t} lang={lang}/>
      <Impact t={t} isDark={isDark} lang={lang}/>
      <Team t={t} lang={lang}/>
      <Contact t={t} lang={lang}/>
      <Footer t={t} isDark={isDark} lang={lang} logoVersion={logoVersion}/>
    </div>
  );
}

export default App;

// ═══════════════════════════════════════════════════════
// VERSION LOGO 14 — Couleurs EE9067 (COMMENTÉE)
// Pour activer: décommenter ce bloc, commenter le bloc ci-dessus
// ═══════════════════════════════════════════════════════

// function App() {
//   const [isDark, setIsDark] = useState(false);
//   const [lang, setLang] = useState('en');
//   const logoVersion = 'logo14';
//   const t = isDark ? themes[logoVersion].dark : themes[logoVersion].light;
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = globalStyles;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);
//   useEffect(() => {
//     document.body.style.backgroundColor = t.bg;
//   }, [isDark, t.bg]);
//   return (
//     <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif'}}>
//       <Navbar t={t} isDark={isDark} toggleTheme={()=>setIsDark(!isDark)} lang={lang} setLang={setLang} logoVersion={logoVersion}/>
//       <Hero t={t} lang={lang}/>
//       <Problem t={t} lang={lang}/>
//       <Solution t={t} lang={lang}/>
//       <HowItWorks t={t} lang={lang}/>
//       <Impact t={t} isDark={isDark} lang={lang}/>
//       <Team t={t} lang={lang}/>
//       <Contact t={t} lang={lang}/>
//       <Footer t={t} isDark={isDark} lang={lang} logoVersion={logoVersion}/>
//     </div>
//   );
// }
// export default App;