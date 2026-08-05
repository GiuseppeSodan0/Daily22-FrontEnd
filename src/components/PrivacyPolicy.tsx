import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Mail, Phone, MapPin, CheckCircle, FileText } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <section className="relative overflow-hidden pt-36 pb-32 bg-[#F0EFEB] text-left">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-[#f6c73b]/5 blur-[160px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Title Banner */}
          <motion.div variants={itemVariants} className="p-8 sm:p-10 card-premium">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#f6c73b]/15 text-[#2C2C2E] border border-[#f6c73b]/30">
                <ShieldCheck className="w-6 h-6 text-[#2C2C2E]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                  {isEn
                    ? 'Privacy Policy & GDPR Data Protection Information'
                    : 'Informativa Privacy e Protezione Dati GDPR'}
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                  Privacy Policy
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              {isEn
                ? 'Information on the processing of personal data pursuant to EU Regulation 2016/679 (GDPR), Legislative Decree 81/2008, AI Act Regulation (EU 2024/1689) and applicable regulations on health, workplace safety and digital technologies.'
                : 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR), D.Lgs. 81/2008, Regolamento AI Act (UE 2024/1689) e normative applicabili in materia di salute, sicurezza sul lavoro e tecnologie digitali.'}
            </p>
          </motion.div>

          {/* 20 Sections Container */}
          <motion.div variants={itemVariants} className="p-8 sm:p-12 card-premium space-y-10 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">
            
            {isEn ? (
              <>
                {/* 1. Data Controller */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">1.</span> Data Controller
                  </h2>
                  <p>Daily Practice 22 S.r.l. is the Data Controller for the processing of personal data collected through this website and, where applicable, through its digital platforms, applications, wearable devices, IoT systems and services connected to the daily ecosystem.</p>
                  <div className="p-5 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 space-y-2 text-[#2C2C2E]">
                    <p className="font-bold font-sans text-sm">Daily Practice 22 S.r.l.</p>
                    <p>Registered and operational office:</p>
                    <p className="font-bold">Via Coroglio, 57</p>
                    <p>c/o Campania Newsteel Srl</p>
                    <p>Naples, Italy</p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#2C2C2E]">
                      <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#f6c73b]" /> <a href="mailto:segreteria@dy22.it" className="hover:underline">segreteria@dy22.it</a></p>
                      <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#f6c73b]" /> <a href="tel:+393404290395" className="hover:underline">+39 340 429 0395</a></p>
                    </div>
                  </div>
                </div>

                {/* 2. Types of data processed */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">2.</span> Types of data processed
                  </h2>
                  <p>Depending on the interaction with the website, platforms or services, daily may process different categories of personal data, including:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>identification and contact data, such as name, surname, company, role, email address and telephone number;</li>
                    <li>data voluntarily provided through contact forms, email communications or requests for information;</li>
                    <li>navigation data and technical data related to the use of the website;</li>
                    <li>company, organisational and operational information provided within the context of requests, projects or services;</li>
                    <li>data collected through platforms, applications, wearable devices or IoT systems, where activated within specific projects, including technical, environmental, organisational, physiological or biometric signals;</li>
                    <li>special categories of personal data, including health-related data, only where necessary, lawful and proportionate, and in compliance with Article 9 of the GDPR.</li>
                  </ul>
                </div>

                {/* 3. Purposes of processing */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">3.</span> Purposes of processing
                  </h2>
                  <p>Personal data may be processed for the following purposes:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>to respond to requests for information submitted through the website or by email;</li>
                    <li>to manage contacts, appointments, commercial communications and service requests;</li>
                    <li>to provide information on daily services, projects, technologies and solutions;</li>
                    <li>to prepare proposals, quotations or preliminary evaluations;</li>
                    <li>to manage technical, organisational, commercial or administrative relationships;</li>
                    <li>to improve the website, platforms, applications and services;</li>
                    <li>to ensure the security, continuity and proper functioning of digital systems;</li>
                    <li>to comply with legal, regulatory, accounting, tax or contractual obligations;</li>
                    <li>to support occupational health and safety, prevention, risk assessment, monitoring and organisational improvement activities, where applicable;</li>
                    <li>to develop, test and improve digital tools, IoT systems, dashboards, applications and artificial intelligence solutions connected to the daily ecosystem.</li>
                  </ul>
                </div>

                {/* 4. Legal basis for processing */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">4.</span> Legal basis for processing
                  </h2>
                  <p>The processing of personal data may be based, depending on the case, on one or more of the following legal bases:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>the performance of pre-contractual or contractual measures requested by the data subject;</li>
                    <li>compliance with legal obligations;</li>
                    <li>the legitimate interest of the Data Controller, where balanced with the rights and freedoms of the data subject;</li>
                    <li>the consent of the data subject, where required;</li>
                    <li>the protection of occupational health and safety and the management of prevention processes;</li>
                    <li>for special categories of data, one of the conditions set out in Article 9 of the GDPR, including explicit consent, occupational medicine, workplace safety, public health or scientific research, where applicable and lawful.</li>
                  </ul>
                </div>

                {/* 5. Privacy in email communications */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">5.</span> Privacy in email communications
                  </h2>
                  <p>Email communications sent to daily, or received from daily, may contain personal data, company information or confidential content.</p>
                  <p>The data contained in email communications are processed only for purposes connected to the relationship between the sender and daily, including requests for information, proposals, appointments, administrative activities, technical support, project management or legal obligations.</p>
                  <p>Recipients who receive an email by mistake are invited to notify the sender and delete the message and any attachments.</p>
                </div>

                {/* 6. Privacy of the Contact Us form */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">6.</span> Privacy of the Contact Us form
                  </h2>
                  <p>The Contact Us form collects the data necessary to allow daily to respond to the request submitted by the user.</p>
                  <p>The data entered in the form may include name, company, email address, telephone number, subject, message and privacy consent.</p>
                  <p>The provision of data marked as mandatory is necessary in order to send the request. Failure to provide such data may prevent daily from responding.</p>
                  <p>Data submitted through the form are used only to manage the request and any subsequent communications connected to it.</p>
                </div>

                {/* 7. Biometric, physiological, wearable and IoT data */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">7.</span> Biometric, physiological, wearable and IoT data
                  </h2>
                  <p>Within specific projects, services or experimental activities, daily may process data collected through wearable devices, sensors, IoT systems, applications or digital platforms.</p>
                  <p>These data may include, depending on the device and project configuration, physiological, biometric, environmental, behavioural, operational or technical parameters, such as heart rate, movement, posture, temperature, humidity, noise, vibration, microclimate, activity level, device status and other signals related to the working environment or operational context.</p>
                  <p>Such data are processed only when there is an appropriate legal basis, a defined purpose, adequate information to the data subjects and appropriate technical and organisational safeguards.</p>
                  <p>The purpose is not to carry out generalised control of workers’ performance, but to support prevention, workplace safety, risk assessment, organisational improvement and the protection of people.</p>
                </div>

                {/* 8. Health data and special categories of personal data */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">8.</span> Health data and special categories of personal data
                  </h2>
                  <p>Certain data collected or processed within the daily ecosystem may qualify as health data or special categories of personal data pursuant to Article 9 of the GDPR.</p>
                  <p>These data are processed only where necessary, proportionate and lawful, and only where an appropriate legal condition applies.</p>
                  <p>Where required, daily adopts additional safeguards, including minimisation, access limitation, pseudonymisation where possible, secure storage, confidentiality measures and clear separation between technical, organisational and health-related information.</p>
                </div>

                {/* 9. Artificial Intelligence and AI Act */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">9.</span> Artificial Intelligence and AI Act
                  </h2>
                  <p>daily develops and uses artificial intelligence tools to support the interpretation of data, documents, operational signals and prevention processes.</p>
                  <p>Where AI systems are used to analyse data, support decisions, identify trends, estimate risk conditions or generate operational indicators, daily adopts a governance approach consistent with the principles of transparency, human oversight, data quality, traceability, security, robustness and accountability.</p>
                  <p>Where applicable, daily takes into account the requirements of Regulation (EU) 2024/1689, the Artificial Intelligence Act, including risk management, data governance, technical documentation, logging, human supervision, accuracy, robustness and cybersecurity.</p>
                </div>

                {/* 10. Medical devices and MDR */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">10.</span> Medical devices and MDR
                  </h2>
                  <p>Some technologies, wearable devices or digital tools may process physiological or biometric signals.</p>
                  <p>The mere collection of such data does not automatically qualify a device as a medical device.</p>
                  <p>Where a technology is intended for medical purposes, such as diagnosis, prevention, clinical monitoring, prediction, prognosis, treatment or alleviation of disease, Regulation (EU) 2017/745 on medical devices may apply.</p>
                  <p>daily evaluates the intended use, functionality and regulatory classification of its technologies in relation to the applicable legal framework.</p>
                </div>

                {/* 11. Occupational safety and Legislative Decree 81/2008 */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">11.</span> Occupational safety and Legislative Decree 81/2008
                  </h2>
                  <p>daily technologies and services may be used to support occupational health and safety management, risk assessment, prevention measures, training, information, monitoring of environmental or operational conditions and organisational improvement.</p>
                  <p>The processing of data in this context must be consistent with Legislative Decree 81/2008 and with the principles of necessity, proportionality and relevance.</p>
                  <p>Data collected through digital tools, sensors or wearable devices must be used to improve prevention and protection, not for unlawful or disproportionate control of workers.</p>
                </div>

                {/* 12. GDPR principles */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">12.</span> GDPR principles
                  </h2>
                  <p>daily processes personal data in accordance with the principles set out in the GDPR, including:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>lawfulness, fairness and transparency;</li>
                    <li>purpose limitation;</li>
                    <li>data minimisation;</li>
                    <li>accuracy;</li>
                    <li>storage limitation;</li>
                    <li>integrity and confidentiality;</li>
                    <li>accountability;</li>
                    <li>privacy by design and by default.</li>
                  </ul>
                </div>

                {/* 13. Processing methods */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">13.</span> Processing methods
                  </h2>
                  <p>Personal data are processed using electronic, digital and, where necessary, paper-based tools.</p>
                  <p>Processing is carried out by authorised personnel and by external parties appointed, where applicable, as data processors.</p>
                  <p>The processing is organised in such a way as to ensure confidentiality, security, traceability and compliance with the purposes for which the data were collected.</p>
                </div>

                {/* 14. Security measures */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">14.</span> Security measures
                  </h2>
                  <p>daily adopts appropriate technical and organisational measures to protect personal data against unauthorised access, loss, alteration, disclosure or improper use.</p>
                  <p>These measures may include, depending on the context:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>access control;</li>
                    <li>authentication systems;</li>
                    <li>encryption;</li>
                    <li>pseudonymisation;</li>
                    <li>segregation of roles and permissions;</li>
                    <li>logging and traceability;</li>
                    <li>backup and recovery systems;</li>
                    <li>secure communication protocols;</li>
                    <li>periodic checks;</li>
                    <li>supplier and system security assessments.</li>
                  </ul>
                </div>

                {/* 15. Data retention */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">15.</span> Data retention
                  </h2>
                  <p>Personal data are retained for the time necessary to achieve the purposes for which they were collected and, where applicable, for the period required by law, contract, accounting, tax or regulatory obligations.</p>
                  <p>Data collected through contact forms are retained for the time necessary to manage the request and any related relationship.</p>
                  <p>Data connected to projects, services, platforms, wearable devices or IoT systems are retained according to the specific purpose, applicable legal basis, contractual arrangements and information provided to the data subjects.</p>
                </div>

                {/* 16. Data communication */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">16.</span> Data communication
                  </h2>
                  <p>Personal data may be communicated, where necessary and within the limits of the purposes described, to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>authorised personnel of daily;</li>
                    <li>technical, IT, hosting, cloud, email or platform providers;</li>
                    <li>consultants, professionals or partners involved in the provision of services;</li>
                    <li>public authorities or competent bodies, where required by law;</li>
                    <li>occupational safety, health, prevention or research partners, where applicable and lawful.</li>
                  </ul>
                  <p className="font-bold text-[#2C2C2E]">Personal data are not sold to third parties.</p>
                </div>

                {/* 17. Transfers outside the European Economic Area */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">17.</span> Transfers outside the European Economic Area
                  </h2>
                  <p>Where personal data are transferred outside the European Economic Area, daily ensures that the transfer takes place in compliance with the GDPR, through adequacy decisions, standard contractual clauses or other appropriate safeguards provided by applicable legislation.</p>
                </div>

                {/* 18. Rights of the data subject */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">18.</span> Rights of the data subject
                  </h2>
                  <p>Data subjects may exercise the rights provided by the GDPR, including the right to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                    <li>access their personal data;</li>
                    <li>request rectification;</li>
                    <li>request erasure, where applicable;</li>
                    <li>request restriction of processing;</li>
                    <li>object to processing;</li>
                    <li>request data portability, where applicable;</li>
                    <li>withdraw consent, where processing is based on consent;</li>
                    <li>lodge a complaint with the competent supervisory authority.</li>
                  </ul>
                  <p className="pt-2">Requests may be sent to:</p>
                  <a href="mailto:segreteria@dy22.it" className="inline-block px-4 py-2 rounded-xl bg-[#f6c73b]/15 text-[#2C2C2E] font-bold border border-[#f6c73b]/30 hover:bg-[#f6c73b]/25 transition-colors">
                    segreteria@dy22.it
                  </a>
                </div>

                {/* 19. Cookies and tracking technologies */}
                <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">19.</span> Cookies and tracking technologies
                  </h2>
                  <p>The website may use technical cookies and, where activated, analytics or profiling cookies.</p>
                  <p>Technical cookies are necessary for the proper functioning of the website.</p>
                  <p>Non-technical cookies are used only where required consent has been obtained.</p>
                  <p>Further details may be provided through the cookie banner or cookie policy, where available.</p>
                </div>

                {/* 20. Updates to this Privacy Policy */}
                <div className="space-y-3">
                  <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                    <span className="text-[#f6c73b]">20.</span> Updates to this Privacy Policy
                  </h2>
                  <p>daily may update this Privacy Policy over time to reflect regulatory changes, technical developments, organisational changes or new processing activities.</p>
                  <p>The updated version will be published on this website.</p>
                </div>

                {/* Corporate Summary Box */}
                <div className="mt-12 p-6 rounded-2xl bg-[#F0EFEB] border border-[#2C2C2E]/10 text-xs text-[#5E5E62] space-y-1 font-mono">
                  <p className="font-bold text-[#2C2C2E]">Daily Practice 22 S.r.l. - Innovative Startup</p>
                  <p>Via Coroglio, 57 • c/o Campania Newsteel Srl • 80124 Naples, Italy</p>
                  <p>VAT ID 09637811218 • Email: segreteria@dy22.it • Tel: <a href="tel:+393404290395" className="hover:underline">+39 340 429 0395</a></p>
                </div>
              </>
            ) : (
              <>
            
            {/* 1. Titolare del trattamento */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">1.</span> Titolare del trattamento
              </h2>
              <p>Il titolare del trattamento dei dati personali raccolti attraverso il sito e i servizi digitali daily è:</p>
              <div className="p-5 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 space-y-2 text-[#2C2C2E]">
                <p className="font-bold font-sans text-sm">Daily Practice 22 S.r.l.</p>
                <p>Sede legale e operativa:</p>
                <p className="font-bold">Via Coroglio, 57</p>
                <p>c/o Campania Newsteel Srl</p>
                <p>Napoli, Italia</p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#2C2C2E]">
                  <p className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#f6c73b]" /> <a href="mailto:segreteria@dy22.it" className="hover:underline">segreteria@dy22.it</a></p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#f6c73b]" /> <a href="tel:+393404290395" className="hover:underline">+39 340 429 0395</a></p>
                </div>
              </div>
            </div>

            {/* 2. Tipologie di dati trattati */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">2.</span> Tipologie di dati trattati
              </h2>
              <p>Attraverso il sito e i servizi collegati, daily può trattare diverse categorie di dati personali, tra cui:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>dati identificativi, come nome, cognome, azienda o ruolo;</li>
                <li>dati di contatto, come indirizzo email e numero di telefono;</li>
                <li>dati comunicati volontariamente tramite form, email o richieste di contatto;</li>
                <li>dati tecnici di navigazione, come indirizzo IP, informazioni sul browser, dispositivo utilizzato e log tecnici;</li>
                <li>dati relativi all’interazione con il sito e con i servizi digitali;</li>
                <li>dati aziendali o organizzativi forniti nell’ambito di richieste commerciali, consulenziali o progettuali.</li>
              </ul>
              <p className="pt-2">
                Nel caso di utilizzo di piattaforme, app, wearable device, sensori IoT o sistemi di monitoraggio, daily può trattare anche dati tecnici, ambientali, organizzativi e, ove applicabile, dati fisiologici o biometrici connessi alla prevenzione e alla sicurezza sul lavoro.
              </p>
              <p>
                Quando tali dati consentono di ricavare informazioni sullo stato di salute di una persona, essi possono rientrare nelle categorie particolari di dati personali ai sensi dell’art. 9 del Regolamento UE 2016/679.
              </p>
            </div>

            {/* 3. Finalità del trattamento */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">3.</span> Finalità del trattamento
              </h2>
              <p>I dati personali possono essere trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>rispondere a richieste inviate tramite il sito, il form contatti o email;</li>
                <li>fornire informazioni su servizi, prodotti, progetti o collaborazioni;</li>
                <li>gestire comunicazioni commerciali, tecniche, amministrative o informative;</li>
                <li>predisporre preventivi, proposte, documenti o attività richieste dall’utente;</li>
                <li>organizzare appuntamenti, call, incontri o attività di consulenza;</li>
                <li>migliorare il funzionamento del sito e dei servizi digitali;</li>
                <li>garantire sicurezza, manutenzione e prevenzione di abusi informatici;</li>
                <li>adempiere a obblighi di legge, fiscali, amministrativi o contrattuali;</li>
                <li>supportare attività connesse alla salute e sicurezza sul lavoro, ove richiesto e nel rispetto della normativa applicabile;</li>
                <li>sviluppare, testare o migliorare strumenti digitali, sistemi IoT, dashboard, app verticali, modelli di analisi e sistemi basati su Intelligenza Artificiale, nel rispetto dei principi di minimizzazione, proporzionalità e sicurezza.</li>
              </ul>
            </div>

            {/* 4. Base giuridica del trattamento */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">4.</span> Base giuridica del trattamento
              </h2>
              <p>Il trattamento dei dati personali può fondarsi su una o più delle seguenti basi giuridiche:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>esecuzione di misure precontrattuali o contrattuali richieste dall’interessato;</li>
                <li>consenso dell’interessato, quando necessario;</li>
                <li>adempimento di obblighi legali;</li>
                <li>legittimo interesse del titolare, nei limiti previsti dalla normativa;</li>
                <li>finalità connesse alla tutela della salute e sicurezza nei luoghi di lavoro, quando applicabile;</li>
                <li>consenso esplicito o altra base giuridica prevista dall’art. 9 GDPR, nel caso di trattamento di categorie particolari di dati personali.</li>
              </ul>
            </div>

            {/* 5. Privacy delle comunicazioni email */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">5.</span> Privacy delle comunicazioni email
              </h2>
              <p>
                Quando l’utente invia una comunicazione email a daily, i dati contenuti nel messaggio e negli eventuali allegati vengono trattati esclusivamente per gestire la richiesta ricevuta e per eventuali attività amministrative, tecniche, commerciali o consulenziali connesse.
              </p>
              <p>
                Le comunicazioni email possono contenere dati personali, dati aziendali, informazioni tecniche o documenti allegati. daily tratta tali informazioni secondo principi di riservatezza, pertinenza, minimizzazione e sicurezza.
              </p>
              <p>
                Le email ricevute possono essere conservate per il tempo necessario alla gestione della richiesta, all’adempimento di obblighi di legge o alla tutela dei diritti del titolare.
              </p>
              <p>
                In caso di comunicazioni ricevute per errore, il destinatario è invitato a informare tempestivamente il mittente e a cancellare il messaggio e gli eventuali allegati.
              </p>
            </div>

            {/* 6. Privacy del form Contattaci */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">6.</span> Privacy del form Contattaci
              </h2>
              <p>I dati inseriti nel form Contattaci vengono utilizzati per rispondere alla richiesta dell’utente.</p>
              <p>Il form può raccogliere:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>nome e cognome;</li>
                <li>azienda;</li>
                <li>email;</li>
                <li>telefono;</li>
                <li>oggetto;</li>
                <li>messaggio;</li>
                <li>consenso privacy;</li>
                <li>data e ora di invio;</li>
                <li>lingua del sito al momento dell’invio.</li>
              </ul>
              <p>
                Il conferimento dei dati contrassegnati come obbligatori è necessario per l’invio della richiesta. Il mancato conferimento impedisce di completare l’invio.
              </p>
              <p>Il consenso privacy deve essere espresso tramite apposita casella obbligatoria.</p>
            </div>

            {/* 7. Dati biometrici, fisiologici, wearable e IoT */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">7.</span> Dati biometrici, fisiologici, wearable e IoT
              </h2>
              <p>
                Alcuni servizi daily possono prevedere l’utilizzo di wearable device, sensori IoT, dashboard, app o piattaforme digitali per il monitoraggio di dati utili alla prevenzione.
              </p>
              <p>I dati trattati possono riguardare, a titolo esemplificativo:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>frequenza cardiaca;</li>
                <li>temperatura;</li>
                <li>movimento;</li>
                <li>postura;</li>
                <li>accelerazioni;</li>
                <li>microclima;</li>
                <li>rumore;</li>
                <li>vibrazioni;</li>
                <li>condizioni ambientali;</li>
                <li>parametri fisiologici o comportamentali;</li>
                <li>indicatori di affaticamento o stress stimato.</li>
              </ul>
              <p>
                Tali dati sono trattati esclusivamente per finalità di prevenzione, sicurezza, analisi dei rischi, miglioramento organizzativo e supporto decisionale, nei limiti della normativa applicabile.
              </p>
              <p>
                I dati non devono essere utilizzati per finalità di controllo generalizzato della prestazione lavorativa. L’utilizzo deve avvenire nel rispetto del GDPR, del D.Lgs. 81/2008, dello Statuto dei Lavoratori ove applicabile e delle ulteriori norme pertinenti.
              </p>
            </div>

            {/* 8. Dati relativi alla salute e categorie particolari di dati */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">8.</span> Dati relativi alla salute e categorie particolari di dati
              </h2>
              <p>
                Quando i dati raccolti consentono di desumere informazioni sullo stato di salute della persona, essi possono essere qualificati come dati relativi alla salute ai sensi dell’art. 9 GDPR.
              </p>
              <p>In tali casi, il trattamento avviene solo in presenza di una base giuridica adeguata e di una delle condizioni previste dal GDPR, come:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>consenso esplicito dell’interessato;</li>
                <li>finalità di medicina del lavoro;</li>
                <li>tutela della salute e sicurezza;</li>
                <li>obblighi normativi specifici;</li>
                <li>ricerca scientifica o statistica, con adeguate garanzie.</li>
              </ul>
              <p>
                daily adotta misure tecniche e organizzative adeguate per proteggere tali dati, limitandone l’accesso ai soli soggetti autorizzati.
              </p>
            </div>

            {/* 9. Intelligenza Artificiale e AI Act */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">9.</span> Intelligenza Artificiale e AI Act
              </h2>
              <p>
                daily può utilizzare sistemi basati su Intelligenza Artificiale per analizzare dati, individuare pattern, generare indicatori, supportare valutazioni, stimare livelli di rischio o migliorare la comprensione dei fenomeni legati alla sicurezza.
              </p>
              <p>
                Quando tali sistemi incidono sulla salute, sicurezza o sui diritti delle persone, daily valuta gli obblighi previsti dal Regolamento UE 2024/1689 sull’Intelligenza Artificiale.
              </p>
              <p>In particolare, ove applicabile, vengono considerati:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>classificazione del sistema IA in base al livello di rischio;</li>
                <li>governance dei dati;</li>
                <li>supervisione umana;</li>
                <li>tracciabilità delle operazioni;</li>
                <li>documentazione tecnica;</li>
                <li>accuratezza, robustezza e cybersicurezza;</li>
                <li>trasparenza verso gli utenti e gli interessati.</li>
              </ul>
              <p>
                L’IA non deve essere utilizzata come unico strumento decisionale per valutazioni che producano effetti significativi sulla persona senza adeguata supervisione umana.
              </p>
            </div>

            {/* 10. Dispositivi medici e MDR */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">10.</span> Dispositivi medici e MDR
              </h2>
              <p>
                Alcuni dispositivi o sistemi digitali possono rientrare nel campo di applicazione del Regolamento UE 2017/745 sui dispositivi medici solo quando sono destinati dal fabbricante a finalità mediche, cliniche, diagnostiche, terapeutiche, preventive o di monitoraggio sanitario in senso medico.
              </p>
              <p>
                Se un dispositivo viene utilizzato esclusivamente per prevenzione dei rischi lavorativi, monitoraggio ambientale, benessere organizzativo o sicurezza operativa senza finalità medica, il MDR potrebbe non essere applicabile.
              </p>
              <p>daily valuta caso per caso l’eventuale qualificazione dei dispositivi e dei software secondo la normativa vigente.</p>
            </div>

            {/* 11. Sicurezza sul lavoro e D.Lgs. 81/2008 */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">11.</span> Sicurezza sul lavoro e D.Lgs. 81/2008
              </h2>
              <p>I dati raccolti nell’ambito di progetti di prevenzione possono supportare le attività previste dal D.Lgs. 81/2008, tra cui:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>valutazione dei rischi;</li>
                <li>individuazione di misure preventive e protettive;</li>
                <li>informazione e formazione dei lavoratori;</li>
                <li>monitoraggio di condizioni operative;</li>
                <li>miglioramento continuo dei processi HSE.</li>
              </ul>
              <p>
                L’utilizzo di dati e tecnologie digitali deve sempre essere proporzionato, pertinente e orientato alla tutela della salute e sicurezza dei lavoratori.
              </p>
            </div>

            {/* 12. Principi applicati al trattamento */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">12.</span> Principi applicati al trattamento
              </h2>
              <p>daily tratta i dati personali nel rispetto dei principi previsti dal GDPR:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>liceità, correttezza e trasparenza;</li>
                <li>limitazione della finalità;</li>
                <li>minimizzazione dei dati;</li>
                <li>esattezza;</li>
                <li>limitazione della conservazione;</li>
                <li>integrità e riservatezza;</li>
                <li>responsabilizzazione del titolare.</li>
              </ul>
              <p>
                I sistemi vengono progettati secondo i principi di privacy by design e privacy by default, affinché la protezione dei dati sia integrata fin dalla fase di progettazione.
              </p>
            </div>

            {/* 13. Modalità del trattamento */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">13.</span> Modalità del trattamento
              </h2>
              <p>Il trattamento può avvenire mediante strumenti informatici, telematici, digitali, documentali e organizzativi.</p>
              <p>I dati sono trattati da personale autorizzato e da eventuali fornitori o partner tecnici nominati responsabili del trattamento, ove necessario.</p>
              <p>daily adotta misure adeguate per prevenire accessi non autorizzati, perdita, alterazione, divulgazione o uso improprio dei dati.</p>
            </div>

            {/* 14. Misure di sicurezza */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">14.</span> Misure di sicurezza
              </h2>
              <p>daily adotta misure tecniche e organizzative adeguate, tra cui, ove applicabile:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>controllo degli accessi;</li>
                <li>autenticazione degli utenti;</li>
                <li>cifratura dei dati;</li>
                <li>pseudonimizzazione;</li>
                <li>segregazione dei dati;</li>
                <li>backup;</li>
                <li>logging;</li>
                <li>misure di cybersicurezza;</li>
                <li>gestione autorizzazioni;</li>
                <li>procedure di ripristino;</li>
                <li>limitazione dell’accesso ai soli soggetti autorizzati.</li>
              </ul>
            </div>

            {/* 15. Conservazione dei dati */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">15.</span> Conservazione dei dati
              </h2>
              <p>I dati personali sono conservati per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti.</p>
              <p>In particolare:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>i dati inviati tramite form o email sono conservati per il tempo necessario alla gestione della richiesta e agli eventuali adempimenti successivi;</li>
                <li>i dati contrattuali e amministrativi sono conservati secondo i termini di legge;</li>
                <li>i dati tecnici sono conservati per il tempo necessario alla sicurezza e al funzionamento dei sistemi;</li>
                <li>i dati relativi a progetti, piattaforme, sensori o monitoraggi sono conservati secondo accordi specifici, informative dedicate o obblighi normativi applicabili.</li>
              </ul>
            </div>

            {/* 16. Comunicazione dei dati */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">16.</span> Comunicazione dei dati
              </h2>
              <p>I dati personali possono essere comunicati a:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>personale autorizzato daily;</li>
                <li>consulenti, collaboratori o fornitori tecnici;</li>
                <li>provider hosting, email, CRM, sistemi informatici e servizi digitali;</li>
                <li>partner di progetto, solo se necessario e sulla base di accordi adeguati;</li>
                <li>autorità pubbliche o soggetti legittimati, nei casi previsti dalla legge.</li>
              </ul>
              <p className="font-bold text-[#2C2C2E]">I dati non sono venduti a terzi.</p>
            </div>

            {/* 17. Trasferimento dei dati fuori dall’Unione Europea */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">17.</span> Trasferimento dei dati fuori dall’Unione Europea
              </h2>
              <p>
                Qualora alcuni servizi tecnici comportino trasferimenti di dati al di fuori dello Spazio Economico Europeo, daily verifica che il trasferimento avvenga nel rispetto del GDPR, tramite decisioni di adeguatezza, clausole contrattuali standard o altre garanzie previste dalla normativa.
              </p>
            </div>

            {/* 18. Diritti dell’interessato */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">18.</span> Diritti dell’interessato
              </h2>
              <p>L’interessato può esercitare i diritti previsti dagli articoli 15 e seguenti del GDPR, tra cui:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>accesso ai dati personali;</li>
                <li>rettifica;</li>
                <li>cancellazione;</li>
                <li>limitazione del trattamento;</li>
                <li>opposizione;</li>
                <li>portabilità, ove applicabile;</li>
                <li>revoca del consenso, senza pregiudicare la liceità del trattamento precedente;</li>
                <li>reclamo all’Autorità Garante per la protezione dei dati personali.</li>
              </ul>
              <p className="pt-2">Le richieste possono essere inviate a:</p>
              <a href="mailto:segreteria@dy22.it" className="inline-block px-4 py-2 rounded-xl bg-[#f6c73b]/15 text-[#2C2C2E] font-bold border border-[#f6c73b]/30 hover:bg-[#f6c73b]/25 transition-colors">
                segreteria@dy22.it
              </a>
            </div>

            {/* 19. Cookie e tecnologie di tracciamento */}
            <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">19.</span> Cookie e tecnologie di tracciamento
              </h2>
              <p>Il sito può utilizzare cookie tecnici necessari al funzionamento e, se attivati, strumenti di analisi o tracciamento.</p>
              <p>I cookie non tecnici devono essere utilizzati solo previo consenso dell’utente, secondo le impostazioni disponibili nel banner o nella gestione preferenze.</p>
              <p>La Cookie Policy deve essere coerente con quanto effettivamente installato sul sito.</p>
            </div>

            {/* 20. Aggiornamenti della Privacy Policy */}
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#f6c73b]">20.</span> Aggiornamenti della Privacy Policy
              </h2>
              <p>
                daily può aggiornare la presente Privacy Policy per adeguarla a modifiche normative, tecniche, organizzative o relative ai servizi offerti.
              </p>
              <p>La versione aggiornata sarà pubblicata su questa pagina.</p>
            </div>

            {/* Corporate Summary Box */}
            <div className="mt-12 p-6 rounded-2xl bg-[#F0EFEB] border border-[#2C2C2E]/10 text-xs text-[#5E5E62] space-y-1 font-mono">
              <p className="font-bold text-[#2C2C2E]">Daily Practice 22 S.r.l. - Startup Innovativa</p>
              <p>Via Coroglio, 57 • c/o Campania Newsteel Srl • 80124 Napoli, Italia</p>
              <p>P.IVA 09637811218 • Email: <a href="mailto:segreteria@dy22.it" className="hover:underline">segreteria@dy22.it</a> • Tel: <a href="tel:+393404290395" className="hover:underline">+39 340 429 0395</a></p>
            </div>
          </>
        )}

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
