import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

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

function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <h2 className="text-base sm:text-lg font-bold font-sans text-[#2C2C2E] uppercase tracking-tight flex items-center gap-2">
      <span className="text-[#f6c73b]">{num}</span> {title}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm sm:text-base font-bold font-sans text-[#2C2C2E] uppercase tracking-tight">
      {children}
    </h3>
  );
}

function Block({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3 pb-6 border-b border-[#2C2C2E]/10">{children}</div>;
}

export default function PrivacyPolicy() {
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
                  Privacy Policy di dailyplatform
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                  Privacy Policy
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              dailyplatform raccoglie e tratta alcuni Dati Personali dei propri Utenti.
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed mt-2">
              Questo documento può essere stampato utilizzando il comando di stampa presente nelle impostazioni di qualsiasi browser.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="p-8 sm:p-12 card-premium space-y-10 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">

            {/* 1. Titolare del Trattamento dei Dati */}
            <Block>
              <SectionTitle num="1." title="Titolare del Trattamento dei Dati" />
              <div className="p-5 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 space-y-1 text-[#2C2C2E]">
                <p className="font-bold font-sans text-sm">Daily Practice 22 S.r.l.</p>
                <p>P. IVA 09637811218</p>
                <p>Via Coroglio 57 – 80124 Napoli</p>
                <p>Sito web: <a href="https://daily22.it" className="font-bold hover:underline">daily22.it</a></p>
                <p>Indirizzo email del Titolare: <a href="mailto:ileonardis@dy22.it" className="font-bold hover:underline">ileonardis@dy22.it</a></p>
              </div>
              <p>
                Le richieste riguardanti il trattamento dei Dati Personali e l'esercizio dei diritti previsti dalla normativa possono essere inviate al Titolare utilizzando i recapiti sopra indicati.
              </p>
            </Block>

            {/* 2. Tipologie di Dati raccolti */}
            <Block>
              <SectionTitle num="2." title="Tipologie di Dati raccolti" />
              <p>
                Fra i Dati Personali raccolti attraverso dailyplatform, autonomamente o tramite soggetti terzi utilizzati per l'erogazione del Servizio, possono rientrare:
              </p>
              <p>
                Dati di utilizzo; Strumenti di Tracciamento; indirizzo IP; informazioni sul dispositivo; sistema operativo; informazioni sul browser; lingua; data e ora di accesso; sessioni; log applicativi; eventi relativi all'utilizzo della piattaforma; nome; cognome; email; numero di telefono; ragione sociale; professione; ruolo; azienda o organizzazione di appartenenza; dati relativi all'account; dati di fatturazione, quando applicabili; dati aziendali e organizzativi; informazioni relative a sedi, reparti, processi, attività, mansioni, formazione, DPI, macchine, attrezzature, prodotti, sostanze, procedure, rischi, misure di prevenzione e protezione, scadenze e documenti.
              </p>
              <p>
                Quando dailyplatform viene utilizzata da un'organizzazione per la gestione dei propri lavoratori o collaboratori, possono inoltre essere trattati dati identificativi, professionali e organizzativi riferiti a tali soggetti, quali mansione, reparto, ruolo, qualifica, formazione, attestati, abilitazioni, incarichi, consegna DPI e altre informazioni connesse alla gestione della salute e sicurezza sul lavoro.
              </p>
              <p>
                Alcune specifiche funzionalità, qualora espressamente abilitate, possono comportare il trattamento di categorie particolari di Dati Personali ai sensi dell'art. 9 del GDPR.
              </p>
              <p>
                Nel Piano Free, salvo che una specifica funzionalità lo preveda espressamente, l'Utente non deve caricare diagnosi, referti, cartelle cliniche o altra documentazione sanitaria non necessaria all'utilizzo del Servizio.
              </p>
              <p>
                Dettagli completi sulle singole categorie di Dati Personali trattati possono essere forniti nelle sezioni dedicate della presente Privacy Policy o mediante specifiche informative rese disponibili prima della raccolta dei Dati.
              </p>
              <p>
                I Dati Personali possono essere liberamente forniti dall'Utente oppure, nel caso dei Dati di Utilizzo, raccolti automaticamente durante l'utilizzo di dailyplatform.
              </p>
              <p>
                Quando determinati Dati sono necessari per fornire una specifica funzionalità, il mancato conferimento potrebbe rendere impossibile l'erogazione del relativo Servizio.
              </p>
              <p>
                Quando dailyplatform indica alcuni Dati come facoltativi, gli Utenti sono liberi di non fornirli senza che ciò pregiudichi le funzionalità per le quali tali informazioni non sono necessarie.
              </p>
              <p>
                L'eventuale utilizzo di Cookie o altri Strumenti di Tracciamento da parte di dailyplatform o dei servizi terzi utilizzati da Daily Practice 22 S.r.l. è finalizzato all'erogazione del Servizio e alle ulteriori finalità descritte nella presente Privacy Policy e nella Cookie Policy.
              </p>
              <p>
                L'Utente che inserisce, carica, pubblica o condivide mediante dailyplatform Dati Personali riferiti a terzi è responsabile della liceità del relativo trattamento.
              </p>
            </Block>

            {/* 3. Modalità e luogo del trattamento dei Dati raccolti */}
            <Block>
              <SectionTitle num="3." title="Modalità e luogo del trattamento dei Dati raccolti" />
              <SubTitle>Modalità di trattamento</SubTitle>
              <p>
                Il Titolare adotta misure tecniche e organizzative adeguate volte a impedire l'accesso, la divulgazione, la modifica, la perdita o la distruzione non autorizzata dei Dati Personali.
              </p>
              <p>
                Il trattamento viene effettuato mediante strumenti informatici e telematici, con modalità organizzative e logiche strettamente correlate alle finalità indicate.
              </p>
              <p>
                Oltre al Titolare, in determinati casi possono avere accesso ai Dati soggetti coinvolti nell'organizzazione di Daily Practice 22 S.r.l., quali personale amministrativo, tecnico, commerciale, addetti all'assistenza, sviluppatori e amministratori di sistema, nonché soggetti esterni quali fornitori di servizi informatici, hosting e cloud provider, fornitori di sistemi di autenticazione, posta elettronica, cybersecurity, monitoraggio, Intelligenza Artificiale, fatturazione e altri servizi necessari al funzionamento della piattaforma.
              </p>
              <p>
                Tali soggetti sono autorizzati al trattamento o nominati, quando previsto, Responsabili o Sub-responsabili del trattamento.
              </p>
              <p>
                L'elenco aggiornato dei Responsabili e Sub-responsabili può essere richiesto al Titolare.
              </p>
              <SubTitle>Luogo</SubTitle>
              <p>
                I Dati sono trattati presso le sedi del Titolare e presso ogni altro luogo in cui siano localizzati i soggetti coinvolti nel trattamento.
              </p>
              <p>
                Alcuni fornitori possono operare attraverso infrastrutture geograficamente distribuite.
              </p>
              <p>
                Qualora i Dati Personali siano trasferiti al di fuori dello Spazio Economico Europeo, il trattamento avverrà nel rispetto delle garanzie previste dalla normativa applicabile, comprese, ove applicabili, decisioni di adeguatezza, Clausole Contrattuali Standard o altri strumenti previsti dal GDPR.
              </p>
              <SubTitle>Periodo di conservazione</SubTitle>
              <p>
                Se non diversamente indicato nella presente Privacy Policy, i Dati Personali sono trattati e conservati per il tempo necessario al raggiungimento delle finalità per le quali sono stati raccolti.
              </p>
              <p>
                I Dati possono essere conservati per periodi ulteriori quando ciò sia necessario per adempiere a obblighi legali, tutelare i diritti del Titolare o sulla base del consenso dell'Utente.
              </p>
            </Block>

            {/* 4. Finalità del trattamento dei Dati raccolti */}
            <Block>
              <SectionTitle num="4." title="Finalità del trattamento dei Dati raccolti" />
              <p>I Dati dell'Utente sono raccolti per consentire al Titolare di:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>fornire dailyplatform e le relative funzionalità;</li>
                <li>creare e gestire gli account;</li>
                <li>consentire la registrazione e l'autenticazione;</li>
                <li>gestire aziende, organizzazioni e utenti;</li>
                <li>gestire il Piano Free e gli eventuali piani a pagamento;</li>
                <li>fornire assistenza;</li>
                <li>garantire il funzionamento e la sicurezza della piattaforma;</li>
                <li>prevenire attività fraudolente, abusive o non autorizzate;</li>
                <li>gestire documenti e contenuti caricati;</li>
                <li>fornire funzionalità basate su Intelligenza Artificiale;</li>
                <li>monitorare e migliorare prestazioni e affidabilità del Servizio;</li>
                <li>adempiere agli obblighi previsti dalla legge;</li>
                <li>rispondere a richieste delle autorità;</li>
                <li>tutelare i propri diritti e interessi o quelli di Utenti o terzi;</li>
                <li>gestire comunicazioni di servizio;</li>
                <li>gestire, previo consenso ove necessario, newsletter e comunicazioni commerciali.</li>
              </ul>
              <p>
                Per maggiori informazioni sulle finalità e sui Dati Personali trattati per ciascuna attività, l'Utente può fare riferimento alla sezione seguente.
              </p>
            </Block>

            {/* 5. Dettagli sul trattamento dei Dati Personali */}
            <Block>
              <SectionTitle num="5." title="Dettagli sul trattamento dei Dati Personali" />
              <p>
                I Dati Personali vengono raccolti per le seguenti finalità e attraverso i servizi necessari al funzionamento di dailyplatform.
              </p>

              <SubTitle>Contattare l'Utente</SubTitle>
              <p className="font-bold text-[#2C2C2E]">Comunicazioni di servizio</p>
              <p>
                Daily Practice 22 S.r.l. può utilizzare l'indirizzo email e gli altri recapiti dell'Utente per inviare comunicazioni necessarie al funzionamento di dailyplatform.
              </p>
              <p>
                Tali comunicazioni possono comprendere verifica dell'account, recupero password, sicurezza, aggiornamenti tecnici, manutenzione, variazioni del Servizio, aggiornamenti contrattuali e altre comunicazioni necessarie alla gestione del rapporto.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; cognome; email; dati dell'account.</p>

              <p className="font-bold text-[#2C2C2E]">Modulo di contatto</p>
              <p>
                Compilando un modulo di contatto, l'Utente autorizza Daily Practice 22 S.r.l. a utilizzare i Dati forniti per rispondere a richieste di informazioni, assistenza, preventivi o altre comunicazioni.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; cognome; email; numero di telefono; professione; ragione sociale; contenuto della richiesta.</p>

              <p className="font-bold text-[#2C2C2E]">Mailing list e newsletter</p>
              <p>
                Quando l'Utente aderisce alla newsletter o acconsente a ricevere comunicazioni informative o promozionali, il relativo indirizzo email può essere utilizzato per inviare informazioni riguardanti Daily Practice 22 S.r.l., dailyplatform, servizi, eventi, corsi, iniziative e aggiornamenti.
              </p>
              <p>
                L'iscrizione alla newsletter è facoltativa e non costituisce condizione per l'utilizzo del Piano Free.
              </p>
              <p>
                L'Utente può revocare il consenso in qualsiasi momento.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; email; Dati di Utilizzo eventualmente necessari alla gestione della comunicazione.</p>

              <SubTitle>Registrazione e autenticazione</SubTitle>
              <p>
                La registrazione e l'autenticazione consentono a dailyplatform di identificare l'Utente e di consentirgli l'accesso ai servizi e alle funzionalità riservate.
              </p>
              <p>
                Durante tali attività possono essere trattati dati relativi all'identità dell'Utente, alle credenziali, all'organizzazione di appartenenza e agli accessi effettuati.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; cognome; email; informazioni sull'account; informazioni tecniche relative alla sessione e all'autenticazione.</p>

              <SubTitle>Gestione degli account e delle organizzazioni</SubTitle>
              <p>
                dailyplatform consente agli Utenti autorizzati di creare e gestire account, organizzazioni, aziende, ruoli e autorizzazioni.
              </p>
              <p>
                Possono essere trattati Dati relativi all'Utente e all'organizzazione cui appartiene.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; cognome; email; ruolo; professione; azienda; organizzazione; autorizzazioni e impostazioni dell'account.</p>

              <SubTitle>Gestione dei dati dei lavoratori</SubTitle>
              <p>
                Le organizzazioni clienti possono utilizzare dailyplatform per gestire informazioni riferite ai propri dipendenti e collaboratori.
              </p>
              <p>
                Possono essere trattate informazioni relative a mansioni, formazione, abilitazioni, incarichi, DPI, reparti, processi e ulteriori dati necessari alle attività di salute e sicurezza sul lavoro.
              </p>
              <p>
                In tale contesto, quando Daily Practice 22 S.r.l. tratta i Dati esclusivamente per conto del cliente, il cliente opera quale Titolare del trattamento e Daily Practice 22 S.r.l. quale Responsabile del trattamento ai sensi dell'art. 28 GDPR.
              </p>
              <p>
                Il rapporto è disciplinato da uno specifico accordo sul trattamento dei dati.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: dati identificativi e professionali; mansione; ruolo; reparto; formazione; abilitazioni; DPI; scadenze; dati contenuti nei documenti caricati.</p>

              <SubTitle>Gestione documentale</SubTitle>
              <p>
                dailyplatform può consentire il caricamento, la conservazione, l'organizzazione e l'elaborazione di file e documenti.
              </p>
              <p>
                I contenuti caricati possono includere Dati Personali.
              </p>
              <p>
                Il cliente e l'Utente sono responsabili della liceità dei Dati inseriti e devono limitare il caricamento alle informazioni necessarie alle finalità perseguite.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: contenuto dei documenti e relativi metadati.</p>

              <SubTitle>Hosting e infrastruttura backend</SubTitle>
              <p>
                I servizi di hosting, storage, database e infrastruttura backend consentono a dailyplatform di funzionare e di rendere disponibili le proprie funzionalità.
              </p>
              <p>
                Tali servizi possono comportare la conservazione e l'elaborazione di diverse categorie di Dati Personali trattati attraverso la piattaforma.
              </p>
              <p>
                Alcune infrastrutture possono utilizzare server geograficamente distribuiti.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: varie tipologie di Dati in funzione delle funzionalità utilizzate.</p>

              <SubTitle>Monitoraggio dell'infrastruttura</SubTitle>
              <p>
                Daily Practice 22 S.r.l. può utilizzare strumenti di monitoraggio tecnico al fine di verificare il funzionamento della piattaforma, migliorare prestazioni e stabilità, individuare errori, prevenire incidenti e risolvere problemi.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: indirizzo IP; log; Dati di Utilizzo; informazioni sul dispositivo e sul sistema.</p>

              <SubTitle>Sicurezza e protezione da abusi</SubTitle>
              <p>
                dailyplatform può utilizzare strumenti tecnici finalizzati a prevenire accessi abusivi, tentativi di intrusione, spam, bot, attività fraudolente o altre attività potenzialmente dannose.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: indirizzo IP; identificativi tecnici; log; informazioni relative al dispositivo, al browser e alle sessioni.</p>

              <SubTitle>Intelligenza Artificiale</SubTitle>
              <p className="font-bold text-[#2C2C2E]">Funzionalità IA di dailyplatform</p>
              <p>
                Daily Practice 22 S.r.l. utilizza sistemi e servizi basati su Intelligenza Artificiale per consentire a dailyplatform di fornire funzionalità quali:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>generazione di testi;</li>
                <li>riepiloghi;</li>
                <li>analisi;</li>
                <li>suggerimenti;</li>
                <li>classificazioni;</li>
                <li>individuazione di possibili anomalie;</li>
                <li>supporto alla compilazione;</li>
                <li>analisi documentale;</li>
                <li>supporto alla gestione di attività HSE e compliance.</li>
              </ul>
              <p>
                Quando l'Utente utilizza una funzionalità di Intelligenza Artificiale possono essere elaborati prompt, domande, documenti, testi o ulteriori contenuti selezionati o forniti dall'Utente.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: prompt; testi; query; documenti; dati presenti nei campi della piattaforma; Dati di Utilizzo.</p>
              <p>
                I Dati vengono elaborati esclusivamente nella misura necessaria alla generazione dell'output richiesto e secondo le condizioni contrattuali applicabili ai servizi utilizzati.
              </p>
              <p>
                I Dati, i documenti e i contenuti delle organizzazioni trattati attraverso dailyplatform non vengono utilizzati da Daily Practice 22 S.r.l. per addestrare modelli generativi destinati a finalità generali, salvo specifico accordo con il cliente e presenza di un'idonea base giuridica.
              </p>
              <p className="font-bold text-[#2C2C2E]">Output dell'Intelligenza Artificiale</p>
              <p>
                Gli output prodotti dalle funzionalità di Intelligenza Artificiale costituiscono strumenti di supporto.
              </p>
              <p>
                Gli output possono contenere errori, incompletezze o informazioni che richiedono verifica.
              </p>
              <p>
                L'Utente deve pertanto verificare i risultati prima del loro utilizzo professionale.
              </p>
              <p>
                Le funzionalità IA non sostituiscono gli obblighi, le valutazioni e le responsabilità attribuite dalla normativa al datore di lavoro, al RSPP, al medico competente, ai professionisti o agli altri soggetti competenti.
              </p>
              <p>
                Salvo diversa indicazione relativa a una specifica funzionalità, dailyplatform non utilizza l'Intelligenza Artificiale per assumere autonomamente decisioni che producano effetti giuridici sull'interessato o incidano in modo analogo significativamente sulla persona.
              </p>

              <SubTitle>Gestione dei pagamenti</SubTitle>
              <p>
                Quando vengono utilizzati piani o servizi a pagamento, i pagamenti possono essere gestiti attraverso fornitori esterni di servizi di pagamento.
              </p>
              <p>
                Salvo diversa indicazione, i dati completi dello strumento di pagamento vengono forniti direttamente al provider incaricato e Daily Practice 22 S.r.l. riceve esclusivamente le informazioni necessarie per conoscere l'esito della transazione e gestire il rapporto contrattuale.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; cognome; email; dati di fatturazione; informazioni relative alla transazione.</p>

              <SubTitle>Fatturazione</SubTitle>
              <p>
                Quando necessario, i dati dell'Utente o dell'organizzazione possono essere utilizzati per emettere fatture e adempiere agli obblighi fiscali e contabili.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: nome; cognome; ragione sociale; partita IVA; codice fiscale; indirizzo; email; informazioni contrattuali e relative agli acquisti.</p>

              <SubTitle>Statistica</SubTitle>
              <p>
                Daily Practice 22 S.r.l. può utilizzare strumenti statistici per comprendere il funzionamento e l'utilizzo del sito e della piattaforma.
              </p>
              <p>
                Quando l'utilizzo di tali strumenti richiede il consenso dell'Utente, essi vengono attivati esclusivamente dopo l'acquisizione delle relative preferenze.
              </p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali trattati: Dati di Utilizzo; informazioni sul dispositivo; Strumenti di Tracciamento, quando applicabili.</p>

              <SubTitle>Marketing</SubTitle>
              <p>
                Previo consenso, quando necessario, Daily Practice 22 S.r.l. può utilizzare Dati Personali e Strumenti di Tracciamento per misurare l'efficacia delle proprie campagne, comprendere l'interazione degli Utenti con le comunicazioni commerciali e promuovere prodotti e servizi Daily.
              </p>
              <p>
                L'Utente può revocare il consenso in qualsiasi momento.
              </p>
            </Block>

            {/* 6. Cookie Policy */}
            <Block>
              <SectionTitle num="6." title="Cookie Policy" />
              <p>
                dailyplatform e il sito Daily possono utilizzare Cookie e altri Strumenti di Tracciamento.
              </p>
              <p>
                I Cookie tecnici necessari possono essere utilizzati per autenticazione, sicurezza, gestione delle sessioni, memorizzazione delle preferenze e funzionamento del Servizio.
              </p>
              <p>
                Gli eventuali Strumenti di Tracciamento non necessari vengono utilizzati secondo le preferenze espresse dall'Utente.
              </p>
              <p>
                Per maggiori informazioni gli Utenti possono consultare la Cookie Policy.
              </p>
            </Block>

            {/* 7. Ulteriori informazioni sul trattamento dei Dati Personali */}
            <Block>
              <SectionTitle num="7." title="Ulteriori informazioni sul trattamento dei Dati Personali" />
              <SubTitle>Piano Free</SubTitle>
              <p>
                La creazione e l'utilizzo del Piano Free non richiedono il consenso al trattamento per finalità commerciali.
              </p>
              <p>
                I Dati necessari alla creazione dell'account e all'erogazione del Piano Free vengono trattati sulla base del rapporto contrattuale con l'Utente.
              </p>
              <p>
                Le eventuali finalità di marketing rimangono separate e facoltative.
              </p>
              <SubTitle>Cancellazione dell'account</SubTitle>
              <p>
                L'Utente può richiedere la cancellazione del proprio account utilizzando le funzioni eventualmente disponibili nella piattaforma o contattando il Titolare.
              </p>
              <p>
                La cancellazione di un account individuale non comporta automaticamente la cancellazione dei dati appartenenti all'organizzazione alla quale l'Utente è associato.
              </p>
              <p>
                Qualora l'Utente sia amministratore principale dell'organizzazione, potrebbe essere necessario trasferire preventivamente il relativo ruolo.
              </p>
              <SubTitle>Esportazione dei Dati</SubTitle>
              <p>
                Nei casi previsti dal GDPR, l'Utente può richiedere una copia dei propri Dati Personali.
              </p>
              <p>
                Gli Utenti con adeguati privilegi possono inoltre utilizzare eventuali funzionalità messe a disposizione da dailyplatform per esportare i dati dell'organizzazione secondo le condizioni del Servizio.
              </p>
            </Block>

            {/* 8. Ulteriori informazioni per gli Utenti */}
            <Block>
              <SectionTitle num="8." title="Ulteriori informazioni per gli Utenti" />
              <SubTitle>Base giuridica del trattamento</SubTitle>
              <p>
                Il Titolare tratta i Dati Personali quando ricorre almeno una delle seguenti condizioni:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>l'Utente ha prestato il consenso per una o più specifiche finalità;</li>
                <li>il trattamento è necessario all'esecuzione di un contratto con l'Utente o all'esecuzione di misure precontrattuali;</li>
                <li>il trattamento è necessario per adempiere a un obbligo legale;</li>
                <li>il trattamento è necessario per il perseguimento di un legittimo interesse del Titolare o di terzi, nel rispetto dei diritti e delle libertà fondamentali dell'Interessato;</li>
                <li>il trattamento è consentito da un'altra base giuridica prevista dalla normativa applicabile.</li>
              </ul>
              <p>
                È sempre possibile richiedere al Titolare chiarimenti sulla concreta base giuridica applicabile a uno specifico trattamento.
              </p>

              <SubTitle>Ulteriori informazioni sul tempo di conservazione</SubTitle>
              <p>
                Se non diversamente indicato nella presente Privacy Policy, i Dati Personali vengono trattati e conservati per il tempo necessario al raggiungimento delle finalità per le quali sono stati raccolti.
              </p>
              <p>Pertanto:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>i Dati raccolti per l'esecuzione di un contratto sono conservati per il periodo necessario all'esecuzione del rapporto e successivamente per gli eventuali termini previsti dalla legge;</li>
                <li>i Dati trattati sulla base di un legittimo interesse sono conservati fino al soddisfacimento di tale interesse, salvo necessità di ulteriore conservazione;</li>
                <li>i Dati trattati sulla base del consenso possono essere conservati fino alla revoca dello stesso;</li>
                <li>il Titolare può conservare determinati Dati per un periodo ulteriore quando necessario per adempiere a un obbligo legale o a un ordine dell'autorità.</li>
              </ul>
              <p>
                Al termine del periodo di conservazione i Dati Personali vengono cancellati o anonimizzati, fatto salvo quanto diversamente previsto dalla normativa.
              </p>

              <SubTitle>Diritti dell'Utente sulla base del GDPR</SubTitle>
              <p>
                Gli Utenti possono esercitare i diritti previsti dalla normativa in relazione ai Dati Personali trattati dal Titolare.
              </p>
              <p>
                In particolare, nei limiti previsti dalla legge, l'Utente ha diritto di:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>revocare il consenso in qualsiasi momento;</li>
                <li>opporsi al trattamento dei propri Dati nei casi previsti dalla normativa;</li>
                <li>accedere ai propri Dati e ricevere informazioni sul trattamento;</li>
                <li>verificare e chiedere la rettifica dei Dati inesatti;</li>
                <li>ottenere la limitazione del trattamento;</li>
                <li>ottenere la cancellazione dei propri Dati Personali nei casi previsti;</li>
                <li>ricevere i propri Dati o ottenerne il trasferimento ad altro titolare, quando applicabile;</li>
                <li>proporre reclamo al Garante per la protezione dei dati personali;</li>
                <li>agire nelle competenti sedi giudiziarie.</li>
              </ul>

              <SubTitle>Dettagli sul diritto di opposizione</SubTitle>
              <p>
                Quando i Dati Personali sono trattati sulla base di un legittimo interesse, gli Utenti possono opporsi al trattamento per motivi connessi alla propria situazione particolare nei casi previsti dal GDPR.
              </p>
              <p>
                Quando i Dati sono trattati per finalità di marketing diretto, l'Utente può opporsi in qualsiasi momento, gratuitamente e senza necessità di fornire motivazioni.
              </p>
              <p>
                In caso di opposizione al marketing diretto, i Dati Personali non saranno più trattati per tale finalità.
              </p>

              <SubTitle>Come esercitare i diritti</SubTitle>
              <p>
                Le richieste relative all'esercizio dei diritti possono essere indirizzate a Daily Practice 22 S.r.l. utilizzando i recapiti indicati nella presente Privacy Policy.
              </p>
              <p>
                Le richieste sono gestite gratuitamente nei casi previsti dalla normativa e il Titolare risponde entro i termini stabiliti dal GDPR.
              </p>
              <p>
                Il Titolare può richiedere le informazioni necessarie a verificare l'identità del richiedente.
              </p>
            </Block>

            {/* 9. Ulteriori informazioni sul trattamento */}
            <Block>
              <SectionTitle num="9." title="Ulteriori informazioni sul trattamento" />
              <SubTitle>Difesa in giudizio</SubTitle>
              <p>
                I Dati Personali dell'Utente possono essere utilizzati dal Titolare per accertare, esercitare o difendere un diritto in sede giudiziaria o nelle fasi preparatorie a un eventuale contenzioso.
              </p>
              <p>
                Il Titolare può inoltre essere obbligato a comunicare i Dati alle autorità competenti nei casi previsti dalla legge.
              </p>
              <SubTitle>Informative specifiche</SubTitle>
              <p>
                Oltre alle informazioni contenute nella presente Privacy Policy, Daily Practice 22 S.r.l. può fornire informative aggiuntive o contestuali relative a specifiche funzionalità o particolari trattamenti.
              </p>
              <SubTitle>Log di sistema e manutenzione</SubTitle>
              <p>
                Per esigenze relative al funzionamento, alla manutenzione e alla sicurezza, dailyplatform e i servizi terzi utilizzati possono raccogliere log di sistema, ossia file che registrano eventi e interazioni e che possono contenere Dati Personali quali l'indirizzo IP dell'Utente.
              </p>
              <SubTitle>Informazioni non contenute nella presente Policy</SubTitle>
              <p>
                Ulteriori informazioni relative al trattamento dei Dati Personali possono essere richieste in qualsiasi momento al Titolare utilizzando i recapiti indicati nella presente Privacy Policy.
              </p>
            </Block>

            {/* 10. Modifiche alla presente Privacy Policy */}
            <Block>
              <SectionTitle num="10." title="Modifiche alla presente Privacy Policy" />
              <p>
                Daily Practice 22 S.r.l. si riserva il diritto di apportare modifiche alla presente Privacy Policy in qualsiasi momento.
              </p>
              <p>
                Le modifiche saranno pubblicate su questa pagina e, ove opportuno, comunicate agli Utenti attraverso dailyplatform, email o altri strumenti disponibili.
              </p>
              <p>
                Gli Utenti sono invitati a consultare periodicamente la presente pagina facendo riferimento alla data dell'ultimo aggiornamento.
              </p>
              <p>
                Qualora una modifica riguardi trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso quando necessario.
              </p>
            </Block>

            {/* 11. Definizioni e riferimenti legali */}
            <Block>
              <SectionTitle num="11." title="Definizioni e riferimenti legali" />
              <p className="font-bold text-[#2C2C2E]">Dati Personali o Dati</p>
              <p>Qualsiasi informazione relativa a una persona fisica identificata o identificabile.</p>
              <p className="font-bold text-[#2C2C2E]">Dati di Utilizzo</p>
              <p>
                Informazioni raccolte automaticamente attraverso dailyplatform o i servizi utilizzati dalla piattaforma, quali indirizzo IP, orario della richiesta, browser, sistema operativo, dispositivo, durata della sessione, pagine o funzionalità utilizzate ed eventi tecnici associati all'utilizzo del Servizio.
              </p>
              <p className="font-bold text-[#2C2C2E]">Utente</p>
              <p>Il soggetto che utilizza dailyplatform e che, salvo diversa indicazione, coincide con l'Interessato.</p>
              <p className="font-bold text-[#2C2C2E]">Interessato</p>
              <p>La persona fisica cui si riferiscono i Dati Personali.</p>
              <p className="font-bold text-[#2C2C2E]">Responsabile del Trattamento</p>
              <p>Il soggetto che tratta Dati Personali per conto del Titolare.</p>
              <p className="font-bold text-[#2C2C2E]">Titolare del Trattamento</p>
              <p>Il soggetto che determina le finalità e i mezzi del trattamento dei Dati Personali.</p>
              <p className="font-bold text-[#2C2C2E]">Organizzazione cliente</p>
              <p>L'impresa, studio professionale, ente, consulente o altra organizzazione che utilizza dailyplatform per la gestione delle proprie attività.</p>
              <p className="font-bold text-[#2C2C2E]">dailyplatform o Applicazione</p>
              <p>La piattaforma software attraverso la quale vengono erogati i Servizi di Daily Practice 22 S.r.l.</p>
              <p className="font-bold text-[#2C2C2E]">Servizio</p>
              <p>Il servizio fornito attraverso dailyplatform secondo le relative condizioni di utilizzo e il piano attivato dall'Utente.</p>
              <p className="font-bold text-[#2C2C2E]">Piano Free</p>
              <p>La versione gratuita di dailyplatform che consente l'utilizzo delle funzionalità rese disponibili da Daily Practice 22 S.r.l. secondo i limiti e le condizioni applicabili.</p>
              <p className="font-bold text-[#2C2C2E]">Cookie</p>
              <p>Piccole porzioni di informazioni archiviate all'interno del browser o del dispositivo dell'Utente.</p>
              <p className="font-bold text-[#2C2C2E]">Strumento di Tracciamento</p>
              <p>
                Qualsiasi tecnologia che consenta di raccogliere, memorizzare o leggere informazioni sul dispositivo dell'Utente, quali Cookie, identificatori, script o tecnologie analoghe.
              </p>
              <SubTitle>Riferimenti legali</SubTitle>
              <p>
                La presente Privacy Policy è predisposta ai sensi del Regolamento (UE) 2016/679 – GDPR e della normativa italiana applicabile in materia di protezione dei dati personali.
              </p>
              <p>
                Salvo ove diversamente specificato, la presente Privacy Policy riguarda dailyplatform e i relativi servizi erogati da Daily Practice 22 S.r.l.
              </p>
              <p className="font-bold text-[#2C2C2E]">Ultima modifica: 1 ottobre 2026</p>
            </Block>

            {/* Corporate Summary Box */}
            <div className="mt-12 p-6 rounded-2xl bg-[#F0EFEB] border border-[#2C2C2E]/10 text-xs text-[#5E5E62] space-y-1 font-mono">
              <p className="font-bold text-[#2C2C2E]">Daily Practice 22 S.r.l. – P. IVA 09637811218 – Via Coroglio 57, 80124 Napoli</p>
              <p>Privacy Policy · Termini e Condizioni · Cookie Policy · Preferenze Privacy</p>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}