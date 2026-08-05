import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Zap,
  CheckCircle2,
  Cpu,
  Brain,
  ShieldAlert,
  HelpCircle,
  HardHat,
  Search,
  BookOpen,
  AlertTriangle,
  Layers,
  Sparkles,
  Users,
  ChevronRight,
  Target,
  Network
} from 'lucide-react';
import salvatoreRobot from '../assets/images/SALVATORE_ROBOT.png';

// Container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Salvatore() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  // Set SEO Title and Description on mount
  useEffect(() => {
    document.title = isEn 
      ? "Salvatore | AI Agent for Occupational Safety"
      : "Salvatore | AI Agent per la sicurezza sul lavoro";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      isEn
        ? "Discover Salvatore, daily’s governed AI Agent designed to guide workers, companies and prevention roles through risks, procedures and safe behaviours."
        : 'Scopri Salvatore, l’AI Agent governato daily progettato per accompagnare lavoratori, aziende e figure della prevenzione nella comprensione dei rischi, delle procedure e dei comportamenti sicuri.'
    );
  }, [isEn]);

  // "Cosa può fare Salvatore" State - simulated interactive dialogues
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = isEn ? [
    {
      id: 0,
      title: "Answering Risk Inquiries",
      description: "Provides clear explanations on workplace risks, connecting job roles, environments, procedures, and preventive measures.",
      icon: ShieldAlert,
      tag: "Risks & Roles",
      prompt: "What risks do I face working near the assembly line?",
      response: "On the assembly line, the primary risks are: 1) Accidental contact with moving machine parts (pinching/crushing points), 2) Manual material handling with improper posture, 3) Ambient noise. Always verify that protective guards are active and wear safety footwear."
    },
    {
      id: 1,
      title: "Supporting PPE Usage",
      description: "Helps understand which PPE to use, when to wear it, and why it is crucial for worker protection.",
      icon: HardHat,
      tag: "Personal Protective Equipment",
      prompt: "Do I need safety glasses for grinding?",
      response: "Yes, absolutely. Grinding produces high-speed metallic splinters and sparks. Eye protection compliant with EN 166 is mandatory to prevent severe ocular injuries. Do not start work without wearing them."
    },
    {
      id: 2,
      title: "Explaining Operating Procedures",
      description: "Makes instructions, procedures, emergency plans, and correct conduct accessible in daily tasks.",
      icon: FileText,
      tag: "Instructions & Emergencies",
      prompt: "What is the procedure in case of a fire alarm?",
      response: "In case of alarm: 1) Stay calm and safely suspend your activity, 2) Follow the evacuation routes indicated by green signs, 3) Do not use elevators, 4) Reach the designated assembly point and await roll call."
    },
    {
      id: 3,
      title: "Accompanying Training",
      description: "Supports training paths and micro-learning, converting technical material into fast, simple, and contextual explanations.",
      icon: BookOpen,
      tag: "Micro-learning",
      prompt: "Can you give me a mini quiz on electrical risk?",
      response: "Certainly! Quick question: What is the first action to take before servicing an electrical panel? A) Wear wool gloves, B) Disconnect and isolate power supply (lockout), C) Work quickly. Reply with the correct letter!"
    },
    {
      id: 4,
      title: "Guiding Hazard Reports",
      description: "Guides users in describing anomalies, near misses, or critical situations that require company attention.",
      icon: AlertTriangle,
      tag: "Near Miss & Reporting",
      prompt: "There is a frayed power cable near my workstation",
      response: "This is an important hazard report (Near Miss). Please: 1) Do not touch the cable, 2) Report immediately to your supervisor or RSPP specifying the exact station, 3) Place a temporary warning sign if possible. Would you like me to draft a written report to send?"
    },
    {
      id: 5,
      title: "Connecting Data & Context",
      description: "Integrates with dailyplatform, WIDIU, and Vera to clarify indicators, documents, and operational data.",
      icon: Layers,
      tag: "Data Integration",
      prompt: "What does the high exertion warning mean on my WIDIU?",
      response: "It means WIDIU heart sensors detected an elevated heart rate coupled with acceleration matching intense physical strain over the last 15 minutes. We recommend taking a 3-minute break, drinking water, and taking 5 deep breaths before resuming."
    }
  ] : [
    {
      id: 0,
      title: "Rispondere sui rischi",
      description: "Fornisce spiegazioni chiare sui rischi presenti in azienda, collegando mansioni, ambienti, procedure e misure di prevenzione.",
      icon: ShieldAlert,
      tag: "Rischi & Mansioni",
      prompt: "Che rischi corro se lavoro vicino alla linea di montaggio?",
      response: "Sulla linea di montaggio i rischi principali sono: 1) Contatto accidentale con organi in movimento (punti di cesoiamento/schiacciamento), 2) Movimentazione manuale dei carichi con posture incongrue, 3) Rumore ambientale. Verifica sempre che le barriere protettive siano attive e indossa le scarpe antinfortunistiche."
    },
    {
      id: 1,
      title: "Supportare l’uso dei DPI",
      description: "Aiuta a comprendere quali DPI utilizzare, quando indossarli e perché sono importanti per la protezione del lavoratore.",
      icon: HardHat,
      tag: "Dispositivi di Protezione",
      prompt: "Devo mettere gli occhiali protettivi per la smerigliatura?",
      response: "Sì, assolutamente. La smerigliatura produce proiezioni di schegge metalliche e scintille ad alta velocità. L'uso degli occhiali di protezione conformi a EN 166 è obbligatorio per prevenire lesioni oculari gravi. Non iniziare l'attività senza averli indossati."
    },
    {
      id: 2,
      title: "Spiegare procedure operative",
      description: "Rende più accessibili istruzioni, procedure, piani di emergenza e comportamenti corretti da adottare nelle attività quotidiane.",
      icon: FileText,
      tag: "Istruzioni & Emergenze",
      prompt: "Qual è la procedura in caso di allarme antincendio?",
      response: "In caso di allarme: 1) Mantieni la calma e interrompi l'attività in sicurezza, 2) Segui i percorsi di esodo indicati dalla segnaletica verde, 3) Non utilizzare ascensori, 4) Raggiungi il punto di raccolta esterno prestabilito e attendi l'appello dei coordinatori."
    },
    {
      id: 3,
      title: "Accompagnare la formazione",
      description: "Supporta percorsi formativi e micro-learning, trasformando contenuti tecnici in spiegazioni rapide, semplici e contestuali.",
      icon: BookOpen,
      tag: "Micro-learning",
      prompt: "Puoi farmi un mini quiz sul rischio elettrico?",
      response: "Certamente! Domanda rapida: Qual è la prima azione da fare prima di effettuare manutenzione su un quadro elettrico? A) Indossare guanti di lana, B) Sezionare e isolare l'alimentazione (messa in sicurezza), C) Lavorare in fretta. Rispondi con la lettera corretta!"
    },
    {
      id: 4,
      title: "Orientare le segnalazioni",
      description: "Guida l’utente nel descrivere anomalie, criticità, near miss o situazioni che richiedono attenzione da parte dell’azienda.",
      icon: AlertTriangle,
      tag: "Near Miss & Segnalazioni",
      prompt: "C'e un cavo elettrico sfilacciato vicino alla mia postazione",
      response: "Questa è una segnalazione importante (Near Miss). Per favore: 1) Non toccare il cavo, 2) Segnala subito al tuo preposto o RSPP indicando la postazione esatta, 3) Se possibile, poni un cartello di avviso temporaneo per evitare che altri si avvicinino. Vuoi che prepari una bozza di segnalazione scritta da inviare?"
    },
    {
      id: 5,
      title: "Collegare dati e contesto",
      description: "Può integrarsi con dailyplatform, WIDIU e Vera per rendere più comprensibili indicatori, documenti e informazioni operative.",
      icon: Layers,
      tag: "Integrazione Dati",
      prompt: "Cosa significa l'avviso di sforzo elevato sul mio WIDIU?",
      response: "Significa che i sensori cardio di WIDIU hanno rilevato un battito cardiaco elevato unito ad accelerazioni compatibili con sforzo fisico intenso negli ultimi 15 minuti. Ti consiglio di fare una pausa di 3 minuti, bere acqua e fare 5 respiri profondi prima di riprendere."
    }
  ];

  // "Integrazione Sinergica" State - hoverable node state
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="bg-[#F0EFEB] text-[#2C2C2E] font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-36 pb-24 text-left">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#f6c73b]/5 blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column: text content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.span 
                variants={itemVariants}
                className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 bg-[#2C2C2E]/5 px-3.5 py-2 rounded-full border border-[#2C2C2E]/10 font-mono"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#f6c73b]" />
                <span>AI AGENT</span>
              </motion.span>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-sans text-[#2C2C2E] tracking-tight leading-tight"
              >
                Salvatore
              </motion.h1>
              
              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-2xl font-bold font-sans text-[#2C2C2E] leading-snug tracking-wide text-[#f6c73b]"
              >
                {isEn 
                  ? 'The AI Agent that brings safety closer to people.'
                  : 'L’AI Agent che rende la sicurezza più vicina alle persone.'}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xs sm:text-sm leading-relaxed font-mono text-[#5E5E62]"
              >
                {isEn
                  ? 'Salvatore is daily’s governed AI Agent designed to guide workers, companies and prevention roles through risks, procedures and safe behaviours. It turns technical content and operational information into a simple, accessible, interactive and controlled experience.'
                  : 'Salvatore è l’AI Agent governato di daily progettato per accompagnare lavoratori, aziende e figure della prevenzione nella comprensione dei rischi, delle procedure e dei comportamenti sicuri. Trasforma contenuti tecnici e informazioni operative in un’esperienza interattiva, semplice, accessibile e controllata.'}
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a
                  href="#perche-salvatore"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f6c73b] text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-wider hover:bg-[#f6c73b]/90 transition-all duration-300 shadow-[0_4px_14px_rgba(242,196,0,0.25)] hover:shadow-[0_6px_20px_rgba(242,196,0,0.35)] active:scale-95 font-semibold"
                >
                  {isEn ? 'Discover Salvatore' : 'Scopri Salvatore'}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#2C2C2E] text-xs font-bold font-sans uppercase tracking-wider border border-[#2C2C2E]/10 hover:bg-[#F0EFEB] hover:border-[#2C2C2E]/20 transition-all duration-300 active:scale-95"
                >
                  {isEn ? 'Contact us' : 'Contattaci'}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Visual of Salvatore robot */}
            <div className="lg:col-span-5 flex justify-center items-center w-full relative">
              {/* Subtle background depth elements */}
              <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#f6c73b]/8 to-transparent blur-3xl pointer-events-none -z-10" />
              
              {/* Discrete reactive decorative elements or glowing nodes */}
              <div className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-[#f6c73b] animate-pulse opacity-60" />
              <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#2C2C2E]/30" />
              <div className="absolute top-[40%] right-[5%] w-2.5 h-2.5 rounded-full bg-[#f6c73b]/40" />
              
              {/* Circular light outline to represent connection rings, extremely subtle */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[#f6c73b]/10 -z-10 animate-[spin_120s_linear_infinite]" />
              <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-[#2C2C2E]/5 -z-10 animate-[spin_180s_linear_infinite_reverse]" />

              <motion.div
                variants={itemVariants}
                className="relative flex items-center justify-center w-full max-w-[360px] md:max-w-[400px] select-none"
              >
                <motion.img
                  src={salvatoreRobot}
                  alt="Salvatore AI Consultant"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_20px_40px_rgba(44,44,46,0.1)] hover:drop-shadow-[0_25px_50px_rgba(242,196,0,0.15)] transition-all duration-500"
                  whileHover={{ 
                    scale: 1.03,
                    y: -6,
                    rotate: 0.5
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SEZIONE "PERCHÉ SALVATORE" */}
      <section id="perche-salvatore" className="py-24 bg-[#F0EFEB] text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header block */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'The Need' : 'La Necessità'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'Why Salvatore' : 'Perché Salvatore'}
            </h2>
            <p className="mt-6 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Salvatore was created to make safety clearer, continuous and closer to real work. It does not replace prevention roles, but acts as a governed AI Agent to make procedures, instructions, training content and operational information easier to access.'
                : 'Salvatore nasce per rendere la sicurezza più comprensibile, continua e vicina al lavoro reale. Non sostituisce le figure della prevenzione, ma agisce come AI Agent governato per rendere più accessibili procedure, istruzioni, contenuti formativi e informazioni operative.'}
            </p>
          </div>

          {/* Interactive Connected Elements Flow */}
          <div className="relative mt-12">
            {/* Fine connecting horizontal line for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C2C2E]/10 to-transparent -translate-y-1/2 hidden lg:block pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-[#2C2C2E] text-white border border-white/10 hover:border-[#f6c73b]/70 hover:-translate-y-1.5 shadow-lg transition-all duration-300 group flex flex-col justify-between h-full relative cursor-pointer">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f6c73b]/20 flex items-center justify-center text-xs font-mono font-bold text-[#f6c73b] transition-colors">01</div>
                  <h4 className="text-base font-bold font-sans text-white tracking-tight group-hover:text-[#f6c73b] transition-colors">
                    {isEn ? 'Clearer safety' : 'Sicurezza più comprensibile'}
                  </h4>
                  <p className="text-[11.5px] leading-relaxed text-white/80 font-mono">
                    {isEn
                      ? 'It turns technical content into simple, user-oriented explanations.'
                      : 'Trasforma contenuti tecnici in spiegazioni semplici e orientate all’utente.'}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-[#2C2C2E] text-white border border-white/10 hover:border-[#f6c73b]/70 hover:-translate-y-1.5 shadow-lg transition-all duration-300 group flex flex-col justify-between h-full relative cursor-pointer">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f6c73b]/20 flex items-center justify-center text-xs font-mono font-bold text-[#f6c73b] transition-colors">02</div>
                  <h4 className="text-base font-bold font-sans text-white tracking-tight group-hover:text-[#f6c73b] transition-colors">
                    {isEn ? 'Contextual support' : 'Supporto contestuale'}
                  </h4>
                  <p className="text-[11.5px] leading-relaxed text-white/80 font-mono">
                    {isEn
                      ? 'It helps users navigate risks, procedures, safe behaviours and good practices.'
                      : 'Aiuta l’utente a orientarsi tra rischi, procedure, comportamenti sicuri e buone pratiche.'}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-[#2C2C2E] text-white border border-white/10 hover:border-[#f6c73b]/70 hover:-translate-y-1.5 shadow-lg transition-all duration-300 group flex flex-col justify-between h-full relative cursor-pointer">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f6c73b]/20 flex items-center justify-center text-xs font-mono font-bold text-[#f6c73b] transition-colors">03</div>
                  <h4 className="text-base font-bold font-sans text-white tracking-tight group-hover:text-[#f6c73b] transition-colors">
                    {isEn ? 'Interactive experience' : 'Esperienza interattiva'}
                  </h4>
                  <p className="text-[11.5px] leading-relaxed text-white/80 font-mono">
                    {isEn
                      ? 'It makes consultation more natural through an accessible and recognisable governed AI Agent.'
                      : 'Rende la consultazione più naturale attraverso un AI Agent governato accessibile e riconoscibile.'}
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-2xl bg-[#2C2C2E] text-white border border-white/10 hover:border-[#f6c73b]/70 hover:-translate-y-1.5 shadow-lg transition-all duration-300 group flex flex-col justify-between h-full relative cursor-pointer">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f6c73b]/20 flex items-center justify-center text-xs font-mono font-bold text-[#f6c73b] transition-colors">04</div>
                  <h4 className="text-base font-bold font-sans text-white tracking-tight group-hover:text-[#f6c73b] transition-colors">
                    {isEn ? 'Continuous training' : 'Formazione continua'}
                  </h4>
                  <p className="text-[11.5px] leading-relaxed text-white/80 font-mono">
                    {isEn
                      ? 'It supports micro-content, operational reminders and awareness paths connected to safety.'
                      : 'Supporta micro-contenuti, richiami operativi e percorsi di consapevolezza collegati alla sicurezza.'}
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-6 rounded-2xl bg-[#2C2C2E] text-white border border-white/10 hover:border-[#f6c73b]/70 hover:-translate-y-1.5 shadow-lg transition-all duration-300 group flex flex-col justify-between h-full relative cursor-pointer">
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f6c73b]/20 flex items-center justify-center text-xs font-mono font-bold text-[#f6c73b] transition-colors">05</div>
                  <h4 className="text-base font-bold font-sans text-white tracking-tight group-hover:text-[#f6c73b] transition-colors">
                    {isEn ? 'daily integration' : 'Integrazione daily'}
                  </h4>
                  <p className="text-[11.5px] leading-relaxed text-white/80 font-mono">
                    {isEn
                      ? 'It connects with the daily ecosystem, interacting with content, processes, data and digital tools.'
                      : 'Si collega all’ecosistema daily, dialogando con contenuti, processi, dati e strumenti digitali.'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. SEZIONE "COSA PUÒ FARE SALVATORE" (Card Interattive dello stesso formato con simulazione chat live!) */}
      <section className="py-24 bg-[#F0EFEB] text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Capabilities' : 'Le Funzionalità'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'What Salvatore Can Do' : 'Cosa può fare Salvatore'}
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Interact with the capabilities below to simulate a real dialogue with Salvatore and see how AI supports workplace safety on the field.'
                : 'Interagisci con le funzionalità qui sotto per simulare un dialogo reale con Salvatore e scoprire come l\'IA supporta la sicurezza del personale sul campo.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            
            {/* Left side: Grid of interactive capability cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, index) => {
                const IconComp = feat.icon;
                const isSelected = activeFeature === index;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveFeature(index)}
                    className={`p-6 rounded-2xl flex flex-col justify-between text-left transition-all duration-300 border h-[190px] w-full ${
                      isSelected 
                        ? 'bg-white border-[#f6c73b] shadow-[0_8px_30px_rgba(242,196,0,0.12)] scale-[1.01]' 
                        : 'bg-white/50 hover:bg-white border-black/5 hover:border-[#f6c73b]/30 hover:shadow-sm'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg ${
                          isSelected ? 'bg-[#f6c73b]/20 text-[#2C2C2E]' : 'bg-[#2C2C2E]/5 text-[#2C2C2E]/70'
                        }`}>
                          <IconComp className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-[#2C2C2E]/40">
                          {feat.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-base font-bold font-sans text-[#2C2C2E] tracking-tight">
                        {feat.title}
                      </h3>
                      <p className="text-[11px] leading-relaxed text-[#5E5E62] font-mono line-clamp-3">
                        {feat.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side: Beautiful visual chat simulator showing selected capability */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-[24px] border border-black/5 bg-white shadow-[0_12px_40px_rgba(44,44,46,0.04)] overflow-hidden flex flex-col">
                
                {/* Chat header */}
                <div className="p-4 bg-[#2C2C2E] text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#f6c73b]/10 flex items-center justify-center border border-[#f6c73b]/20">
                      <MessageSquare className="w-4 h-4 text-[#f6c73b]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">SALVATORE</h4>
                      <p className="text-[9px] text-[#f6c73b] font-mono">{isEn ? 'Active AI Agent' : 'AI Agent Attivo'}</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                </div>

                {/* Chat body containing simulated dialogues */}
                <div className="flex-1 p-6 space-y-4 bg-[#F0EFEB]/15 flex flex-col justify-center min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* User message block */}
                      <div className="flex justify-end">
                        <div className="bg-[#2C2C2E] text-white text-xs leading-relaxed font-mono px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%] border border-[#f6c73b]/10 shadow-sm">
                          <p className="font-semibold text-[10px] text-[#f6c73b] uppercase tracking-wider mb-1">{isEn ? 'You' : 'Tu'}</p>
                          <p>{features[activeFeature].prompt}</p>
                        </div>
                      </div>

                      {/* Bot response block */}
                      <div className="flex justify-start">
                        <div className="bg-[#F0EFEB]/60 border border-black/5 text-[#2C2C2E] text-xs leading-relaxed font-mono px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                          <p className="font-semibold text-[10px] text-[#f6c73b] uppercase tracking-wider mb-1">Salvatore</p>
                          <p>{features[activeFeature].response}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Chat input footer (decorative mock) */}
                <div className="p-3 border-t border-black/5 bg-white flex items-center justify-between gap-2">
                  <div className="flex-1 px-4 py-2 bg-[#F0EFEB]/50 border border-black/5 text-[11px] font-mono text-[#5E5E62] rounded-full text-left">
                    {isEn ? 'Simulated interaction in progress...' : 'Interazione simulata in corso...'}
                  </div>
                  <div className="p-2 bg-[#f6c73b] text-[#2C2C2E] rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SEZIONE "COME FUNZIONA" (In flusso sequenziale e integrato) */}
      <section id="come-funziona" className="py-24 bg-[#F0EFEB] text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'The Workflow' : 'Il Flusso'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'How It Works' : 'Come funziona'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm font-mono text-[#f6c73b] font-bold uppercase tracking-wider">
              {isEn ? 'From technical content to operational answer.' : 'Dal contenuto tecnico alla risposta operativa.'}
            </p>
          </div>

          {/* Sequential Workflow Timeline */}
          <div className="relative mt-20">
            {/* Horizontal progress bar line on desktop */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[#2C2C2E]/10 to-transparent hidden lg:block pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative z-10">
              
              {/* Step 1 */}
              <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start group cursor-pointer p-4 rounded-2xl hover:bg-white/60 transition-all duration-300">
                <div className="salvatore-flow-number w-16 h-16 rounded-full bg-white/90 border border-black/10 text-[#2C2C2E] flex items-center justify-center font-bold text-lg font-mono relative shadow-sm group-hover:scale-110 group-hover:bg-[#f6c73b] group-hover:border-[#f6c73b] group-hover:shadow-[0_0_0_8px_rgba(242,196,0,0.16),0_12px_30px_rgba(44,44,46,0.14)] transition-all duration-300">
                  1
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#f6c73b] rounded-full border border-white group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] tracking-tight group-hover:text-[#f6c73b] transition-colors">
                  {isEn ? 'Reads' : 'Legge'}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono text-center lg:text-left">
                  {isEn
                    ? 'Acquires information from documents, procedures, training material, company data, and operational context.'
                    : 'Acquisisce informazioni da documenti, procedure, contenuti formativi, dati aziendali e contesto operativo.'}
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start group cursor-pointer p-4 rounded-2xl hover:bg-white/60 transition-all duration-300">
                <div className="salvatore-flow-number w-16 h-16 rounded-full bg-white/90 border border-black/10 text-[#2C2C2E] flex items-center justify-center font-bold text-lg font-mono relative shadow-sm group-hover:scale-110 group-hover:bg-[#f6c73b] group-hover:border-[#f6c73b] group-hover:shadow-[0_0_0_8px_rgba(242,196,0,0.16),0_12px_30px_rgba(44,44,46,0.14)] transition-all duration-300">
                  2
                </div>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] tracking-tight group-hover:text-[#f6c73b] transition-colors">
                  {isEn ? 'Understands' : 'Comprende'}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono text-center lg:text-left">
                  {isEn
                    ? 'Interprets the user query and links it to the specific role, task, activity, or required safety topic.'
                    : 'Interpreta la domanda dell’utente e la collega al ruolo, alla mansione, all’attività o al tema di sicurezza richiesto.'}
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start group cursor-pointer p-4 rounded-2xl hover:bg-white/60 transition-all duration-300">
                <div className="salvatore-flow-number w-16 h-16 rounded-full bg-white/90 border border-black/10 text-[#2C2C2E] flex items-center justify-center font-bold text-lg font-mono relative shadow-sm group-hover:scale-110 group-hover:bg-[#f6c73b] group-hover:border-[#f6c73b] group-hover:shadow-[0_0_0_8px_rgba(242,196,0,0.16),0_12px_30px_rgba(44,44,46,0.14)] transition-all duration-300">
                  3
                </div>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] tracking-tight group-hover:text-[#f6c73b] transition-colors">
                  {isEn ? 'Answers' : 'Risponde'}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono text-center lg:text-left">
                  {isEn
                    ? 'Returns a clear, concise, and understandable answer, avoiding overly bureaucratic jargon.'
                    : 'Restituisce una risposta chiara, sintetica e comprensibile, evitando linguaggi eccessivamente burocratici.'}
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start group cursor-pointer p-4 rounded-2xl hover:bg-white/60 transition-all duration-300">
                <div className="salvatore-flow-number w-16 h-16 rounded-full bg-white/90 border border-black/10 text-[#2C2C2E] flex items-center justify-center font-bold text-lg font-mono relative shadow-sm group-hover:scale-110 group-hover:bg-[#f6c73b] group-hover:border-[#f6c73b] group-hover:shadow-[0_0_0_8px_rgba(242,196,0,0.16),0_12px_30px_rgba(44,44,46,0.14)] transition-all duration-300">
                  4
                </div>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] tracking-tight group-hover:text-[#f6c73b] transition-colors">
                  {isEn ? 'Guides' : 'Orienta'}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono text-center lg:text-left">
                  {isEn
                    ? 'Suggests safe conduct, steps to verify, or actions to follow according to company procedures.'
                    : 'Suggerisce comportamenti sicuri, azioni da verificare o passaggi da seguire secondo le procedure aziendali.'}
                </p>
              </div>

              {/* Step 5 */}
              <div className="space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start group cursor-pointer p-4 rounded-2xl hover:bg-white/60 transition-all duration-300">
                <div className="salvatore-flow-number w-16 h-16 rounded-full bg-white/90 border border-black/10 text-[#2C2C2E] flex items-center justify-center font-bold text-lg font-mono relative shadow-sm group-hover:scale-110 group-hover:bg-[#f6c73b] group-hover:border-[#f6c73b] group-hover:shadow-[0_0_0_8px_rgba(242,196,0,0.16),0_12px_30px_rgba(44,44,46,0.14)] transition-all duration-300">
                  5
                </div>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] tracking-tight group-hover:text-[#f6c73b] transition-colors">
                  {isEn ? 'Integrates' : 'Integra'}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#5E5E62] font-mono text-center lg:text-left">
                  {isEn
                    ? 'Connects with the tools in the daily ecosystem to support continuous, traceable, contextual prevention.'
                    : 'Si collega agli strumenti dell’ecosistema daily per supportare una prevenzione più continua, tracciabile e contestuale.'}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. SEZIONE "INTEGRAZIONE SINERGICA" (Salvatore al Centro e Connessioni Diagonali ai Servizi) */}
      <section className="py-24 bg-[#F0EFEB] text-left relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Synergistic Integration' : 'Integrazione Sinergica'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'Salvatore as the conversational layer of the daily ecosystem' : 'Salvatore come livello conversazionale dell’ecosistema daily'}
            </h2>
          </div>

          {/* Connected Hub Visual Schema & Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Schema Visual Component - Salvatore at Center (Left lg:col-span-7) */}
            <div className="lg:col-span-7 relative bg-white/80 border border-black/5 rounded-[32px] p-3 sm:p-10 flex items-center justify-center min-h-[350px] sm:min-h-[440px] shadow-sm overflow-hidden">
              
              {/* Connector SVG diagonal dashed lines from central Salvatore to 4 nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 400 320" preserveAspectRatio="none">
                {/* Line to Top-Left: dailyplatform (center 200, 160 to 85, 50) */}
                <line 
                  x1="200" y1="160" x2="85" y2="50" 
                  stroke={hoveredNode === 'salvatore' || hoveredNode === 'dailyplatform' ? '#f6c73b' : 'rgba(242, 196, 0, 0.4)'} 
                  strokeWidth={hoveredNode === 'dailyplatform' ? '2.5' : '1.5'} 
                  strokeDasharray={hoveredNode === 'dailyplatform' ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Line to Top-Right: WIDIU (center 200, 160 to 315, 50) */}
                <line 
                  x1="200" y1="160" x2="315" y2="50" 
                  stroke={hoveredNode === 'salvatore' || hoveredNode === 'widiu' ? '#f6c73b' : 'rgba(242, 196, 0, 0.4)'} 
                  strokeWidth={hoveredNode === 'widiu' ? '2.5' : '1.5'} 
                  strokeDasharray={hoveredNode === 'widiu' ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Line to Bottom-Left: Vera (center 200, 160 to 85, 270) */}
                <line 
                  x1="200" y1="160" x2="85" y2="270" 
                  stroke={hoveredNode === 'salvatore' || hoveredNode === 'vera' ? '#f6c73b' : 'rgba(242, 196, 0, 0.4)'} 
                  strokeWidth={hoveredNode === 'vera' ? '2.5' : '1.5'} 
                  strokeDasharray={hoveredNode === 'vera' ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />

                {/* Line to Bottom-Right: dailybydaily (center 200, 160 to 315, 270) */}
                <line 
                  x1="200" y1="160" x2="315" y2="270" 
                  stroke={hoveredNode === 'salvatore' || hoveredNode === 'dailybydaily' ? '#f6c73b' : 'rgba(242, 196, 0, 0.4)'} 
                  strokeWidth={hoveredNode === 'dailybydaily' ? '2.5' : '1.5'} 
                  strokeDasharray={hoveredNode === 'dailybydaily' ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />
              </svg>

              {/* Node diagram container with absolute positioned elements */}
              <div className="relative z-10 w-full max-w-[460px] h-[280px] sm:h-[300px] flex items-center justify-center">
                
                {/* 1. TOP-LEFT: dailyplatform */}
                <div 
                  onMouseEnter={() => setHoveredNode('dailyplatform')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute top-0 left-0 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 bg-white cursor-pointer ${
                    hoveredNode === 'dailyplatform'
                      ? 'border-[#f6c73b] shadow-[0_8px_20px_rgba(242,196,0,0.22)] scale-105'
                      : 'border-black/5 hover:border-[#f6c73b]/60'
                  }`}
                >
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#2C2C2E]/5 text-[#2C2C2E]">
                    <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C2C2E]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs font-bold font-sans text-[#2C2C2E]">dailyplatform</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-[#5E5E62]">{isEn ? 'Platform Core' : 'Platform Core'}</div>
                  </div>
                </div>

                {/* 2. TOP-RIGHT: WIDIU */}
                <div 
                  onMouseEnter={() => setHoveredNode('widiu')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute top-0 right-0 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 bg-white cursor-pointer ${
                    hoveredNode === 'widiu'
                      ? 'border-[#f6c73b] shadow-[0_8px_20px_rgba(242,196,0,0.22)] scale-105'
                      : 'border-black/5 hover:border-[#f6c73b]/60'
                  }`}
                >
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#2C2C2E]/5 text-[#2C2C2E]">
                    <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C2C2E]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs font-bold font-sans text-[#2C2C2E]">WIDIU</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-[#5E5E62]">{isEn ? 'Biometrics IoT' : 'IoT Biometria'}</div>
                  </div>
                </div>

                {/* 3. CENTER NODE: SALVATORE */}
                <div 
                  onMouseEnter={() => setHoveredNode('salvatore')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-2.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer bg-white z-20 ${
                    hoveredNode === 'salvatore'
                      ? 'border-[#f6c73b] shadow-[0_12px_36px_rgba(242,196,0,0.3)] scale-105 sm:scale-110'
                      : 'border-[#f6c73b] shadow-[0_8px_25px_rgba(44,44,46,0.08)] hover:scale-105'
                  }`}
                >
                  <div className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#f6c73b] text-[#2C2C2E] mb-1 sm:mb-1.5 shadow-sm">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#2C2C2E]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-sans uppercase tracking-tight text-[#2C2C2E]">Salvatore</span>
                  <span className="text-[7.5px] sm:text-[8.5px] font-mono font-bold uppercase text-[#2C2C2E]/70 px-1.5 sm:px-2 py-0.5 rounded bg-[#f6c73b]/25 mt-0.5 sm:mt-1">
                    AI AGENT
                  </span>
                </div>

                {/* 4. BOTTOM-LEFT: Vera */}
                <div 
                  onMouseEnter={() => setHoveredNode('vera')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute bottom-0 left-0 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 bg-white cursor-pointer ${
                    hoveredNode === 'vera'
                      ? 'border-[#f6c73b] shadow-[0_8px_20px_rgba(242,196,0,0.22)] scale-105'
                      : 'border-black/5 hover:border-[#f6c73b]/60'
                  }`}
                >
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#2C2C2E]/5 text-[#2C2C2E]">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C2C2E]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs font-bold font-sans text-[#2C2C2E]">Vera</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-[#5E5E62]">{isEn ? 'Data & Documents' : 'Dati & Documenti'}</div>
                  </div>
                </div>

                {/* 5. BOTTOM-RIGHT: dailybydaily */}
                <div 
                  onMouseEnter={() => setHoveredNode('dailybydaily')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute bottom-0 right-0 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center gap-1.5 sm:gap-2.5 bg-white cursor-pointer ${
                    hoveredNode === 'dailybydaily'
                      ? 'border-[#f6c73b] shadow-[0_8px_20px_rgba(242,196,0,0.22)] scale-105'
                      : 'border-black/5 hover:border-[#f6c73b]/60'
                  }`}
                >
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#2C2C2E]/5 text-[#2C2C2E]">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2C2C2E]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] sm:text-xs font-bold font-sans text-[#2C2C2E]">dailybydaily</div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-[#5E5E62]">{isEn ? 'Vertical Apps' : 'App Verticali'}</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Text & Key Points per Service (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <p className="text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
                {isEn
                  ? 'Salvatore connects the elements of the daily ecosystem in a simple and conversational way. It assists in consulting data, documents, procedures, and indicators from dailyplatform, makes signals gathered by WIDIU readable, helps navigate content organized in Vera, and accompanies the experience of dailybydaily apps with clear, accessible answers.'
                  : 'Salvatore connette in modo semplice e conversazionale i diversi elementi dell’ecosistema daily. Supporta la consultazione di dati, documenti, procedure e indicatori provenienti da dailyplatform, rende più leggibili le informazioni raccolte da WIDIU, aiuta a orientarsi nei contenuti organizzati in Vera e accompagna l’esperienza delle app dailybydaily con risposte, supporto e contenuti più accessibili.'}
              </p>

              {/* Synthetic Points Per Service */}
              <div className="space-y-3 pt-2">
                
                {/* dailyplatform */}
                <div 
                  onMouseEnter={() => setHoveredNode('dailyplatform')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${
                    hoveredNode === 'dailyplatform' ? 'border-[#f6c73b] shadow-sm bg-white' : 'border-black/5 hover:border-[#f6c73b]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-[#2C2C2E]">
                    <Network className="w-3.5 h-3.5 text-[#f6c73b] shrink-0" />
                    <span>dailyplatform</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#5E5E62] mt-1 pl-5">
                    {isEn ? 'Helps understand data, procedures, KPIs, and operational info.' : 'Aiuta a comprendere dati, procedure, KPI e informazioni operative.'}
                  </p>
                </div>

                {/* WIDIU */}
                <div 
                  onMouseEnter={() => setHoveredNode('widiu')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${
                    hoveredNode === 'widiu' ? 'border-[#f6c73b] shadow-sm bg-white' : 'border-black/5 hover:border-[#f6c73b]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-[#2C2C2E]">
                    <Cpu className="w-3.5 h-3.5 text-[#f6c73b] shrink-0" />
                    <span>WIDIU</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#5E5E62] mt-1 pl-5">
                    {isEn ? 'Makes safety signals, measurements, and indicators clearer.' : 'Rende più leggibili segnali, rilevazioni e indicatori legati alla sicurezza.'}
                  </p>
                </div>

                {/* Vera */}
                <div 
                  onMouseEnter={() => setHoveredNode('vera')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${
                    hoveredNode === 'vera' ? 'border-[#f6c73b] shadow-sm bg-white' : 'border-black/5 hover:border-[#f6c73b]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-[#2C2C2E]">
                    <Layers className="w-3.5 h-3.5 text-[#f6c73b] shrink-0" />
                    <span>Vera</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#5E5E62] mt-1 pl-5">
                    {isEn ? 'Supports consultation of documents, archives, and organizational content.' : 'Supporta la consultazione di documenti, archivi e contenuti organizzativi.'}
                  </p>
                </div>

                {/* dailybydaily */}
                <div 
                  onMouseEnter={() => setHoveredNode('dailybydaily')}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-3.5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${
                    hoveredNode === 'dailybydaily' ? 'border-[#f6c73b] shadow-sm bg-white' : 'border-black/5 hover:border-[#f6c73b]/50'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-[#2C2C2E]">
                    <Users className="w-3.5 h-3.5 text-[#f6c73b] shrink-0" />
                    <span>dailybydaily</span>
                  </div>
                  <p className="text-[11px] font-mono text-[#5E5E62] mt-1 pl-5">
                    {isEn ? 'Guides users across vertical apps with simpler, immediate interaction.' : 'Accompagna l’utente nelle app verticali con un’interazione più semplice e immediata.'}
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SEZIONE "PER CHI È PENSATO" (Card Compatte della stessa altezza) */}
      <section className="py-24 bg-[#F0EFEB] text-left relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Target Audience' : 'I Destinatari'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'Who It Is For' : 'Per chi è pensato'}
            </h2>
            <p className="mt-4 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
              {isEn
                ? 'Salvatore technology is scalable and suited to assist various professional roles, ensuring effective dissemination of risk prevention information.'
                : 'La tecnologia di Salvatore è concepita per essere scalabile e adatta ad assistere diversi profili professionali in azienda, garantendo un\'adeguata diffusione delle informazioni di prevenzione dei rischi.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Lavoratori */}
            <div className="p-8 rounded-[24px] bg-white border border-black/5 hover:border-[#f6c73b]/70 hover:shadow-[0_18px_44px_rgba(44,44,46,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[210px] group cursor-pointer shadow-sm">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#2C2C2E]/50">{isEn ? '01 // Operations' : '01 // Operatività'}</span>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] mt-2 mb-3 tracking-tight group-hover:text-[#f6c73b] transition-colors">{isEn ? 'Workers' : 'Lavoratori'}</h3>
                <p className="text-[11.5px] leading-relaxed font-mono text-[#5E5E62]">
                  {isEn ? 'To receive simple guidance on risks, PPE, procedures, and safe conduct.' : 'Per ricevere indicazioni semplici su rischi, DPI, procedure e comportamenti sicuri.'}
                </p>
              </div>
            </div>

            {/* Preposti */}
            <div className="p-8 rounded-[24px] bg-white border border-black/5 hover:border-[#f6c73b]/70 hover:shadow-[0_18px_44px_rgba(44,44,46,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[210px] group cursor-pointer shadow-sm">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#2C2C2E]/50">{isEn ? '02 // Coordination' : '02 // Coordinamento'}</span>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] mt-2 mb-3 tracking-tight group-hover:text-[#f6c73b] transition-colors">{isEn ? 'Supervisors' : 'Preposti'}</h3>
                <p className="text-[11.5px] leading-relaxed font-mono text-[#5E5E62]">
                  {isEn ? 'To support supervision, communication, and operational management of safety.' : 'Per supportare vigilanza, comunicazione e gestione operativa della prevenzione.'}
                </p>
              </div>
            </div>

            {/* RSPP e HSE Manager */}
            <div className="p-8 rounded-[24px] bg-white border border-black/5 hover:border-[#f6c73b]/70 hover:shadow-[0_18px_44px_rgba(44,44,46,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[210px] group cursor-pointer shadow-sm">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#2C2C2E]/50">{isEn ? '03 // Technical Management' : '03 // Gestione Tecnica'}</span>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] mt-2 mb-3 tracking-tight group-hover:text-[#f6c73b] transition-colors">{isEn ? 'RSPP & HSE Managers' : 'RSPP e HSE Manager'}</h3>
                <p className="text-[11.5px] leading-relaxed font-mono text-[#5E5E62]">
                  {isEn ? 'To make procedures, instructions, documents, and safety information accessible.' : 'Per rendere più accessibili procedure, istruzioni, documenti e informazioni di sicurezza.'}
                </p>
              </div>
            </div>

            {/* Datori di lavoro e aziende */}
            <div className="p-8 rounded-[24px] bg-white border border-black/5 hover:border-[#f6c73b]/70 hover:shadow-[0_18px_44px_rgba(44,44,46,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[210px] group cursor-pointer shadow-sm">
              <div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#2C2C2E]/50">{isEn ? '04 // Governance' : '04 // Governance'}</span>
                <h3 className="text-lg font-bold font-sans text-[#2C2C2E] mt-2 mb-3 tracking-tight group-hover:text-[#f6c73b] transition-colors">{isEn ? 'Employers' : 'Datori di lavoro'}</h3>
                <p className="text-[11.5px] leading-relaxed font-mono text-[#5E5E62]">
                  {isEn ? 'To strengthen safety culture, traceability, and daily operational support.' : 'Per rafforzare cultura della sicurezza, tracciabilità e supporto operativo quotidiano.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SEZIONE "SUPPORTA, NON SOSTITUISCE" (Chiara, Istituzionale e Responsabile) */}
      <section className="py-20 bg-[#F0EFEB] text-left relative border-t border-[#2C2C2E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[32px] bg-[#2C2C2E] text-white border border-[#f6c73b]/25 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f6c73b]/5 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Warning Shield Icon */}
            <div className="p-4 rounded-2xl bg-[#f6c73b]/10 text-[#f6c73b] border border-[#f6c73b]/25 shrink-0">
              <ShieldAlert className="w-8 h-8 stroke-[1.75]" />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#f6c73b]">
                {isEn ? 'Compliance & Responsibility' : 'Compliance & Responsabilità'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight">
                {isEn ? 'Supports, Does Not Replace' : 'Supporta, non sostituisce'}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/80 font-mono">
                {isEn
                  ? 'Salvatore does not replace the RSPP, occupational physician, supervisors, trainers, or HSE consultants. It is a support tool designed to make information easier to understand, facilitate consulting procedures, and enhance safety culture. All decisions, assessments, and statutory responsibilities remain with the designated qualified roles.'
                  : 'Salvatore non sostituisce RSPP, medico competente, preposti, formatori o consulenti HSE. È uno strumento di supporto che aiuta a rendere più comprensibili le informazioni, facilitare la consultazione delle procedure e migliorare la diffusione della cultura della prevenzione. Le decisioni, le valutazioni e le responsabilità restano sempre in capo alle figure competenti previste dalla normativa.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEZIONE CTA FINALE */}
      <section className="py-24 bg-[#F0EFEB] text-left border-t border-[#2C2C2E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 rounded-[32px] bg-white border border-[#f6c73b]/15 shadow-sm text-center space-y-6">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono">
              {isEn ? 'Get Started' : 'Inizia Ora'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#2C2C2E] tracking-tight">
              {isEn ? 'Bring safety closer to people' : 'Porta la sicurezza più vicino alle persone'}
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono max-w-2xl mx-auto leading-relaxed">
              {isEn
                ? 'With Salvatore, risk prevention becomes more accessible, understandable, and integrated into everyday work routines.'
                : 'Con Salvatore, la prevenzione diventa più accessibile, più comprensibile e più integrata nella quotidianità lavorativa.'}
            </p>
            <div className="pt-4">
              <Link
                to="/contatti"
                className="cta-button inline-flex items-center gap-2 px-8 py-4 text-xs font-bold font-mono tracking-wider uppercase"
              >
                {isEn ? 'Contact Us' : 'Contattaci'}
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
