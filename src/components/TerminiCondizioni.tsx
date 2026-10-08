import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

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

function ArticleTitle({ num, title }: { num: string; title: string }) {
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

export default function TerminiCondizioni() {
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
                <FileText className="w-6 h-6 text-[#2C2C2E]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2C2C2E]/60 font-mono block">
                  Termini e Condizioni di Servizio di dailyplatform
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold font-sans text-[#2C2C2E] tracking-tight uppercase">
                  Termini e Condizioni
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed">
              Ultimo aggiornamento: 1 ottobre 2026
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed mt-2">
              Benvenuti su dailyplatform, la piattaforma digitale sviluppata da Daily Practice 22 S.r.l. per supportare aziende, professionisti, consulenti e organizzazioni nella gestione di attività aziendali, documentali, organizzative, di compliance e di salute e sicurezza sul lavoro, anche mediante funzionalità basate su Intelligenza Artificiale.
            </p>
            <p className="text-xs sm:text-sm text-[#5E5E62] font-mono leading-relaxed mt-2">
              L'accesso, la registrazione e l'utilizzo di dailyplatform comportano l'accettazione dei presenti Termini e Condizioni di Servizio.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="p-8 sm:p-12 card-premium space-y-10 text-xs sm:text-sm font-mono text-[#5E5E62] leading-relaxed">

            {/* Premesse */}
            <Block>
              <ArticleTitle num="—" title="Premesso che" />
              <p>
                Daily Practice 22 S.r.l. sviluppa e commercializza servizi applicativi accessibili online secondo il modello Software as a Service ("SaaS"), dei quali detiene o utilizza legittimamente i relativi diritti.
              </p>
              <p>
                dailyplatform è progettata per supportare aziende, studi di consulenza, professionisti e organizzazioni nella gestione di processi, documenti, scadenze, attività, dati e strumenti di supporto alla compliance e alla salute e sicurezza sul lavoro.
              </p>
              <p>
                dailyplatform può essere resa disponibile attraverso differenti piani di utilizzo, inclusi un Piano Free e uno o più piani a pagamento, tra cui Plus e Pro, con funzionalità, limiti e condizioni differenti.
              </p>
              <p>
                Il Cliente intende utilizzare dailyplatform nell'ambito della propria attività professionale, imprenditoriale o organizzativa.
              </p>
              <p>
                Il Cliente dichiara di aver preso visione delle informazioni relative alle caratteristiche e alle funzionalità del Servizio rese disponibili da Daily Practice 22 S.r.l.
              </p>
              <p>
                È responsabilità del Cliente verificare che le funzionalità della piattaforma siano adeguate alle proprie esigenze professionali e organizzative.
              </p>
              <p className="font-bold text-[#2C2C2E]">
                Tutto ciò premesso, si conviene quanto segue.
              </p>
            </Block>

            {/* ARTICOLO 1 – DEFINIZIONI */}
            <Block>
              <ArticleTitle num="ARTICOLO 1" title="Definizioni" />
              <p>
                Ai fini dei presenti Termini e Condizioni, i termini di seguito indicati assumono il significato specificato.
              </p>
              <p className="font-bold text-[#2C2C2E]">Account</p>
              <p>L'insieme delle credenziali e delle informazioni associate a un Utente che consentono l'accesso a dailyplatform.</p>
              <p className="font-bold text-[#2C2C2E]">Aggiornamenti</p>
              <p>Le modifiche, correzioni, aggiornamenti, miglioramenti o adattamenti apportati da Daily Practice 22 S.r.l. alle funzionalità esistenti della piattaforma.</p>
              <p className="font-bold text-[#2C2C2E]">Assistenza</p>
              <p>Il servizio eventualmente fornito da Daily Practice 22 S.r.l. per supportare il Cliente nell'utilizzo di dailyplatform e nella gestione di eventuali malfunzionamenti.</p>
              <p className="font-bold text-[#2C2C2E]">Cliente</p>
              <p>La persona fisica o giuridica, impresa, professionista, studio, ente od organizzazione che crea un'organizzazione su dailyplatform o attiva uno dei Piani disponibili.</p>
              <p className="font-bold text-[#2C2C2E]">Contratto</p>
              <p>L'insieme costituito dai presenti Termini e Condizioni, dalle caratteristiche del Piano selezionato, dall'eventuale ordine o proposta commerciale e dagli ulteriori documenti espressamente richiamati.</p>
              <p className="font-bold text-[#2C2C2E]">Dati del Cliente</p>
              <p>Qualsiasi informazione, dato, documento o contenuto che il Cliente o gli Utenti autorizzati inseriscono, caricano, registrano, elaborano o memorizzano mediante dailyplatform.</p>
              <p className="font-bold text-[#2C2C2E]">Dati Personali</p>
              <p>I dati personali come definiti dal Regolamento (UE) 2016/679 – GDPR.</p>
              <p className="font-bold text-[#2C2C2E]">Documentazione</p>
              <p>Le informazioni, guide, istruzioni e materiali messi a disposizione da Daily Practice 22 S.r.l. per descrivere o facilitare l'utilizzo di dailyplatform.</p>
              <p className="font-bold text-[#2C2C2E]">Funzionalità IA</p>
              <p>Le funzionalità della piattaforma basate su sistemi di Intelligenza Artificiale che possono generare analisi, testi, suggerimenti, riepiloghi, classificazioni, indicatori, alert o altri output.</p>
              <p className="font-bold text-[#2C2C2E]">Interazione IA</p>
              <p>Ogni richiesta, prompt, comando o elaborazione effettuata dall'Utente attraverso una funzionalità di Intelligenza Artificiale.</p>
              <p className="font-bold text-[#2C2C2E]">Organizzazione</p>
              <p>L'ambiente digitale creato all'interno di dailyplatform per rappresentare un'impresa, uno studio, un professionista, un ente o un altro soggetto utilizzatore del Servizio.</p>
              <p className="font-bold text-[#2C2C2E]">Piano Free</p>
              <p>Il piano gratuito di dailyplatform che consente al Cliente di accedere alle funzionalità rese disponibili da Daily Practice 22 S.r.l. entro i relativi limiti di utilizzo.</p>
              <p className="font-bold text-[#2C2C2E]">Piano Plus</p>
              <p>Il piano a pagamento che consente l'accesso alle funzionalità indicate nelle condizioni commerciali applicabili.</p>
              <p className="font-bold text-[#2C2C2E]">Piano Pro</p>
              <p>Il piano a pagamento che consente l'accesso alle funzionalità avanzate indicate nelle condizioni commerciali applicabili.</p>
              <p className="font-bold text-[#2C2C2E]">Piano</p>
              <p>Uno dei livelli di servizio messi a disposizione da Daily Practice 22 S.r.l., gratuito o a pagamento.</p>
              <p className="font-bold text-[#2C2C2E]">Servizio</p>
              <p>dailyplatform, comprese le relative funzionalità, gli aggiornamenti e gli eventuali servizi accessori.</p>
              <p className="font-bold text-[#2C2C2E]">Utente</p>
              <p>La persona fisica autorizzata ad accedere a dailyplatform attraverso credenziali personali.</p>
              <p className="font-bold text-[#2C2C2E]">Amministratore</p>
              <p>L'Utente dotato di privilegi che gli consentono di gestire l'Organizzazione, invitare o rimuovere Utenti, attribuire ruoli e configurare determinate funzionalità.</p>
              <p className="font-bold text-[#2C2C2E]">Token o Crediti IA</p>
              <p>Le eventuali unità utilizzate per misurare, limitare o gestire l'accesso alle funzionalità basate su Intelligenza Artificiale.</p>
            </Block>

            {/* ARTICOLO 2 – ACCETTAZIONE DEL CONTRATTO E OGGETTO */}
            <Block>
              <ArticleTitle num="ARTICOLO 2" title="Accettazione del Contratto e oggetto" />
              <SubTitle>2.1 Accettazione</SubTitle>
              <p>
                Il Cliente dichiara di aver letto e accettato i presenti Termini e Condizioni prima della registrazione o dell'attivazione del Servizio.
              </p>
              <p>Il Contratto può essere concluso mediante procedura telematica.</p>
              <p>L'accettazione elettronica dei Termini e Condizioni ha efficacia tra le Parti secondo la normativa applicabile.</p>
              <p>
                Daily Practice 22 S.r.l. può conservare evidenza elettronica dell'accettazione, compresi data, ora, versione del documento e informazioni tecniche necessarie a documentare l'operazione.
              </p>
              <SubTitle>2.2 Oggetto</SubTitle>
              <p>
                I presenti Termini disciplinano le condizioni in base alle quali Daily Practice 22 S.r.l. mette a disposizione del Cliente dailyplatform.
              </p>
            </Block>

            {/* ARTICOLO 3 – ATTIVAZIONE DEL SERVIZIO */}
            <Block>
              <ArticleTitle num="ARTICOLO 3" title="Attivazione del Servizio" />
              <p>
                Il Servizio è attivato al completamento della registrazione e alla creazione dell'Account oppure secondo le differenti modalità eventualmente previste per specifici Piani.
              </p>
              <p>
                Per il Piano Free, l'accesso può avvenire senza pagamento e senza obbligo di inserimento di un metodo di pagamento, salvo diversa indicazione espressamente mostrata all'Utente prima dell'attivazione.
              </p>
              <p>
                L'utilizzo del Piano Free non comporta automaticamente l'attivazione di un Piano a pagamento.
              </p>
            </Block>

            {/* ARTICOLO 4 – PIANO FREE */}
            <Block>
              <ArticleTitle num="ARTICOLO 4" title="Piano Free" />
              <p>
                Il Piano Free consente al Cliente di utilizzare gratuitamente le funzionalità espressamente indicate da Daily Practice 22 S.r.l., entro i limiti previsti per tale Piano.
              </p>
              <p>
                Il Piano Free consente l'utilizzo delle funzionalità di Intelligenza Artificiale per un massimo di 5 interrogazioni complessive.
              </p>
              <p>
                Per "interrogazione" si intende ogni richiesta, prompt o comando inviato dall'Utente alla funzionalità di Intelligenza Artificiale che comporti l'elaborazione e la generazione di una risposta.
              </p>
              <p>
                Una volta utilizzate le 5 interrogazioni incluse nel Piano Free, l'Utente non potrà effettuare ulteriori interrogazioni all'Intelligenza Artificiale nell'ambito del Piano Free.
              </p>
              <p>
                L'esaurimento delle interrogazioni non comporta la cancellazione dell'Account né la perdita automatica dell'accesso alle altre funzionalità disponibili nel Piano Free.
              </p>
              <p>
                Per continuare a utilizzare le funzionalità di Intelligenza Artificiale, l'Utente potrà effettuare l'upgrade a uno dei Piani a pagamento resi disponibili da Daily Practice 22 S.r.l.
              </p>
              <p>Il Piano Free può prevedere ulteriori limiti relativi, a titolo esemplificativo, a:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>numero di Utenti;</li>
                <li>numero di aziende o organizzazioni gestibili;</li>
                <li>numero di documenti;</li>
                <li>spazio disponibile;</li>
                <li>funzionalità;</li>
                <li>moduli disponibili;</li>
                <li>esportazioni;</li>
                <li>integrazioni;</li>
                <li>assistenza;</li>
                <li>ulteriori risorse tecniche.</li>
              </ul>
              <p>
                I limiti applicabili sono visualizzati all'interno della piattaforma o nella pagina di descrizione del Piano.
              </p>
              <p>
                Il Piano Free non costituisce una prova gratuita di un Piano a pagamento.
              </p>
              <p>
                Non è prevista alcuna conversione automatica dal Piano Free a Plus o Pro.
              </p>
              <p>
                Qualsiasi passaggio a un Piano a pagamento deve essere espressamente richiesto e confermato dal Cliente.
              </p>
            </Block>

            {/* ARTICOLO 5 – PIANI PLUS E PRO */}
            <Block>
              <ArticleTitle num="ARTICOLO 5" title="Piani Plus e Pro" />
              <p>
                Daily Practice 22 S.r.l. può rendere disponibili Piani a pagamento con funzionalità e limiti superiori rispetto al Piano Free.
              </p>
              <p>Prima dell'acquisto saranno indicati:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>prezzo;</li>
                <li>durata;</li>
                <li>modalità di pagamento;</li>
                <li>funzionalità incluse;</li>
                <li>eventuali limiti di utilizzo;</li>
                <li>numero di Utenti inclusi;</li>
                <li>Token o Crediti IA disponibili;</li>
                <li>modalità di rinnovo;</li>
                <li>condizioni di disdetta.</li>
              </ul>
              <p>
                Il passaggio da Free a Plus o Pro avviene esclusivamente a seguito di una scelta espressa del Cliente.
              </p>
            </Block>

            {/* ARTICOLO 6 – MODIFICA DEL PIANO */}
            <Block>
              <ArticleTitle num="ARTICOLO 6" title="Modifica del Piano" />
              <p>
                Il Cliente può richiedere l'upgrade del proprio Piano secondo le modalità messe a disposizione dalla piattaforma.
              </p>
              <p>
                L'eventuale downgrade è soggetto alle condizioni del Piano sottoscritto e può comportare la perdita dell'accesso a funzionalità precedentemente disponibili.
              </p>
              <p>
                Prima di un downgrade il Cliente è tenuto a verificare eventuali limitazioni relative a dati, documenti, utenti o funzionalità.
              </p>
            </Block>

            {/* ARTICOLO 7 – FUNZIONALITÀ E SVILUPPO DEL SERVIZIO */}
            <Block>
              <ArticleTitle num="ARTICOLO 7" title="Funzionalità e sviluppo del Servizio" />
              <p>
                Daily Practice 22 S.r.l. determina l'architettura, le caratteristiche e l'evoluzione tecnologica di dailyplatform.
              </p>
              <p>La Società può:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>introdurre nuove funzionalità;</li>
                <li>migliorare quelle esistenti;</li>
                <li>modificare l'interfaccia;</li>
                <li>correggere errori;</li>
                <li>modificare processi tecnici;</li>
                <li>introdurre nuovi moduli;</li>
                <li>eliminare funzionalità obsolete;</li>
                <li>modificare la collocazione di determinate funzionalità tra i diversi Piani.</li>
              </ul>
              <p>
                Nuove funzionalità possono essere rese disponibili gratuitamente, temporaneamente, in beta, in anteprima o a scopo promozionale.
              </p>
              <p>
                La disponibilità gratuita temporanea di una funzione non attribuisce al Cliente alcun diritto alla sua disponibilità permanente.
              </p>
            </Block>

            {/* ARTICOLO 8 – DIRITTO DI ACCESSO */}
            <Block>
              <ArticleTitle num="ARTICOLO 8" title="Diritto di accesso" />
              <p>
                Daily Practice 22 S.r.l. concede al Cliente un diritto limitato, non esclusivo, non trasferibile e revocabile di utilizzare dailyplatform secondo i presenti Termini e il Piano attivato.
              </p>
              <p>
                Le credenziali di accesso sono personali.
              </p>
              <p>Ogni Utente deve utilizzare il proprio Account.</p>
              <p>
                Non è consentito condividere le credenziali con soggetti diversi dall'Utente cui sono assegnate.
              </p>
              <p>
                Il Cliente è responsabile della corretta gestione degli Utenti autorizzati all'accesso alla propria Organizzazione.
              </p>
            </Block>

            {/* ARTICOLO 9 – OBBLIGHI DELL'UTENTE E DEL CLIENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 9" title="Obblighi dell'Utente e del Cliente" />
              <p>
                Il Cliente si impegna a utilizzare dailyplatform esclusivamente per finalità lecite e professionali.
              </p>
              <p>È vietato:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>utilizzare account appartenenti ad altri soggetti;</li>
                <li>condividere abusivamente credenziali;</li>
                <li>tentare di accedere a dati o organizzazioni non autorizzate;</li>
                <li>interferire con la sicurezza della piattaforma;</li>
                <li>aggirare limiti tecnici o contrattuali;</li>
                <li>utilizzare sistemi automatizzati non autorizzati per estrarre dati dalla piattaforma;</li>
                <li>effettuare reverse engineering nei limiti vietati dalla legge;</li>
                <li>riprodurre o utilizzare il software per realizzare prodotti concorrenti;</li>
                <li>introdurre malware o codice dannoso;</li>
                <li>utilizzare il Servizio per attività illecite;</li>
                <li>caricare contenuti dei quali il Cliente non abbia diritto di disporre.</li>
              </ul>
              <p>Il Cliente è responsabile delle attività svolte dai propri Utenti.</p>
            </Block>

            {/* ARTICOLO 10 – DATI E CONTENUTI DEL CLIENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 10" title="Dati e contenuti del Cliente" />
              <p>Il Cliente conserva la titolarità e la disponibilità dei propri Dati.</p>
              <p>
                Daily Practice 22 S.r.l. non acquisisce alcun diritto di proprietà sui Dati del Cliente per effetto del loro caricamento sulla piattaforma.
              </p>
              <p>Il Cliente è responsabile:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>della liceità dei Dati inseriti;</li>
                <li>della loro correttezza;</li>
                <li>della loro completezza;</li>
                <li>della relativa base giuridica;</li>
                <li>delle autorizzazioni necessarie;</li>
                <li>del rispetto della normativa applicabile.</li>
              </ul>
              <p>
                Quando Daily Practice 22 S.r.l. tratta Dati Personali per conto del Cliente, opera quale Responsabile del trattamento secondo quanto previsto dal DPA.
              </p>
            </Block>

            {/* ARTICOLO 11 – DATI SANITARI E CATEGORIE PARTICOLARI */}
            <Block>
              <ArticleTitle num="ARTICOLO 11" title="Dati sanitari e categorie particolari" />
              <p>
                Il Cliente deve utilizzare particolare cautela nel trattamento di categorie particolari di Dati Personali.
              </p>
              <p>
                Nel Piano Free, salvo diversa indicazione relativa a una specifica funzionalità, non devono essere inseriti diagnosi, cartelle cliniche, referti sanitari o informazioni sanitarie eccedenti rispetto alle finalità della piattaforma.
              </p>
              <p>
                L'eventuale trattamento attraverso moduli specificamente predisposti sarà disciplinato dalle condizioni e informative applicabili.
              </p>
            </Block>

            {/* ARTICOLO 12 – INTELLIGENZA ARTIFICIALE */}
            <Block>
              <ArticleTitle num="ARTICOLO 12" title="Intelligenza Artificiale" />
              <p>
                dailyplatform può integrare funzionalità basate su Intelligenza Artificiale.
              </p>
              <p>
                Nel Piano Free, l'Utente può utilizzare tali funzionalità per un massimo di 5 interrogazioni complessive.
              </p>
              <p>Le interrogazioni possono essere utilizzate per ottenere, a titolo esemplificativo:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>suggerimenti;</li>
                <li>bozze;</li>
                <li>analisi;</li>
                <li>riepiloghi;</li>
                <li>classificazioni;</li>
                <li>controlli;</li>
                <li>indicatori;</li>
                <li>proposte di miglioramento;</li>
                <li>supporto alla lettura e interpretazione dei dati presenti nella piattaforma.</li>
              </ul>
              <p>
                Al raggiungimento della quinta interrogazione, la funzionalità IA viene resa non più interrogabile nell'ambito del Piano Free.
              </p>
              <p>
                L'Utente potrà continuare a consultare, ove tecnicamente disponibile, le precedenti conversazioni e gli output già generati.
              </p>
              <p>
                Per effettuare nuove interrogazioni IA sarà necessario effettuare l'upgrade a un Piano a pagamento che includa ulteriori capacità di utilizzo dell'Intelligenza Artificiale.
              </p>
            </Block>

            {/* ARTICOLO 13 – CONTROLLO UMANO DEGLI OUTPUT IA */}
            <Block>
              <ArticleTitle num="ARTICOLO 13" title="Controllo umano degli output IA" />
              <p>
                Il Cliente prende atto che gli output generati mediante Intelligenza Artificiale devono essere sottoposti a verifica umana prima del loro utilizzo.
              </p>
              <p>Il Cliente è tenuto a verificarne:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>correttezza;</li>
                <li>completezza;</li>
                <li>pertinenza;</li>
                <li>aggiornamento normativo;</li>
                <li>coerenza con il contesto aziendale;</li>
                <li>coerenza con i dati e i documenti effettivi;</li>
                <li>idoneità rispetto allo specifico utilizzo.</li>
              </ul>
              <p>
                Le funzionalità IA di dailyplatform hanno funzione di supporto e non sostituiscono le valutazioni e le responsabilità attribuite dalla normativa al datore di lavoro, RSPP, medico competente, professionisti, consulenti o altri soggetti competenti.
              </p>
              <p>
                La presenza di una funzionalità, di un alert o di un suggerimento non costituisce certificazione della conformità dell'azienda.
              </p>
            </Block>

            {/* ARTICOLO 14 – NESSUN ADDESTRAMENTO DEI MODELLI CON I DATI DEL CLIENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 14" title="Nessun addestramento dei modelli con i Dati del Cliente" />
              <p>
                Daily Practice 22 S.r.l. non utilizza i Dati e i documenti del Cliente per addestrare modelli generativi destinati a finalità generali, salvo specifico accordo con il Cliente e presenza di un'idonea base giuridica.
              </p>
              <p>
                I dati eventualmente trasmessi ai provider tecnologici necessari all'esecuzione di una Funzionalità IA vengono trattati secondo le condizioni applicabili ai relativi servizi.
              </p>
            </Block>

            {/* ARTICOLO 15 – LIMITI DELLE FUNZIONALITÀ IA */}
            <Block>
              <ArticleTitle num="ARTICOLO 15" title="Limiti delle funzionalità IA" />
              <p>
                Nel Piano Free sono incluse 5 interrogazioni IA complessive.
              </p>
              <p>Le interrogazioni incluse:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>non hanno valore monetario;</li>
                <li>non possono essere convertite in denaro;</li>
                <li>non possono essere cedute a terzi;</li>
                <li>non possono essere trasferite ad altri Account;</li>
                <li>non danno diritto ad alcun rimborso;</li>
                <li>una volta utilizzate, non vengono ripristinate salvo diversa decisione espressa di Daily Practice 22 S.r.l.</li>
              </ul>
              <p>
                Daily Practice 22 S.r.l. può mostrare all'Utente, all'interno della piattaforma, il numero di interrogazioni utilizzate e quelle residue.
              </p>
              <p>
                Al raggiungimento del limite, la piattaforma può mostrare una funzione di upgrade a un Piano a pagamento.
              </p>
            </Block>

            {/* ARTICOLO 16 – PROPRIETÀ INTELLETTUALE */}
            <Block>
              <ArticleTitle num="ARTICOLO 16" title="Proprietà intellettuale" />
              <p>
                Daily Practice 22 S.r.l. mantiene tutti i diritti relativi a dailyplatform, compresi, ove applicabili:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>software;</li>
                <li>codice;</li>
                <li>database;</li>
                <li>interfacce;</li>
                <li>architetture;</li>
                <li>workflow;</li>
                <li>design;</li>
                <li>denominazioni;</li>
                <li>marchi;</li>
                <li>contenuti proprietari;</li>
                <li>modelli;</li>
                <li>configurazioni;</li>
                <li>know-how.</li>
              </ul>
              <p>
                L'accesso al Servizio non trasferisce al Cliente alcun diritto di proprietà intellettuale sulla piattaforma.
              </p>
              <p>
                Il Cliente non può copiare, riprodurre, commercializzare, concedere in licenza, effettuare reverse engineering o utilizzare parti della piattaforma per creare servizi concorrenti, salvo quanto inderogabilmente consentito dalla legge.
              </p>
            </Block>

            {/* ARTICOLO 17 – PROPRIETÀ DEI DATI */}
            <Block>
              <ArticleTitle num="ARTICOLO 17" title="Proprietà dei Dati" />
              <p>I Dati del Cliente restano di proprietà o disponibilità del Cliente.</p>
              <p>
                Daily Practice 22 S.r.l. si astiene dall'utilizzare, cedere o trasferire i Dati del Cliente per finalità estranee all'erogazione del Servizio, salvo obblighi di legge o specifico accordo.
              </p>
            </Block>

            {/* ARTICOLO 18 – PROTEZIONE DEI DATI PERSONALI */}
            <Block>
              <ArticleTitle num="ARTICOLO 18" title="Protezione dei Dati Personali" />
              <p>
                Il trattamento dei Dati Personali è disciplinato dalla Privacy Policy di dailyplatform.
              </p>
              <p>
                Quando Daily Practice 22 S.r.l. tratta Dati Personali per conto del Cliente, le Parti applicano il Data Processing Agreement – DPA, ai sensi dell'art. 28 GDPR.
              </p>
              <p>
                In caso di contrasto relativamente alle modalità del trattamento effettuato per conto del Cliente, prevalgono le disposizioni del DPA.
              </p>
            </Block>

            {/* ARTICOLO 19 – SUB-RESPONSABILI */}
            <Block>
              <ArticleTitle num="ARTICOLO 19" title="Sub-responsabili" />
              <p>
                Daily Practice 22 S.r.l. può utilizzare fornitori e Sub-responsabili per l'erogazione del Servizio.
              </p>
              <p>
                L'elenco aggiornato può essere reso disponibile nell'area Privacy di dailyplatform o su apposita pagina del sito.
              </p>
            </Block>

            {/* ARTICOLO 20 – SICUREZZA */}
            <Block>
              <ArticleTitle num="ARTICOLO 20" title="Sicurezza" />
              <p>
                Daily Practice 22 S.r.l. adotta misure tecniche e organizzative adeguate al rischio per proteggere il Servizio e i Dati trattati.
              </p>
              <p>Le misure possono comprendere:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>autenticazione;</li>
                <li>gestione degli accessi;</li>
                <li>separazione logica dei dati;</li>
                <li>protezione delle comunicazioni;</li>
                <li>logging;</li>
                <li>backup;</li>
                <li>monitoraggio;</li>
                <li>procedure di gestione degli incidenti;</li>
                <li>sistemi di sicurezza infrastrutturale.</li>
              </ul>
              <p>
                Il Cliente è responsabile della sicurezza delle proprie credenziali e delle apparecchiature utilizzate per accedere al Servizio.
              </p>
            </Block>

            {/* ARTICOLO 21 – DISPONIBILITÀ DEL SERVIZIO */}
            <Block>
              <ArticleTitle num="ARTICOLO 21" title="Disponibilità del Servizio" />
              <p>
                Daily Practice 22 S.r.l. si impegna a mantenere dailyplatform ragionevolmente disponibile e funzionante.
              </p>
              <p>
                Il Cliente riconosce tuttavia che il Servizio può essere temporaneamente indisponibile per:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>manutenzione;</li>
                <li>aggiornamenti;</li>
                <li>problemi infrastrutturali;</li>
                <li>problemi di rete;</li>
                <li>interventi di sicurezza;</li>
                <li>cause di forza maggiore;</li>
                <li>malfunzionamenti di fornitori esterni;</li>
                <li>eventi tecnici non ragionevolmente prevedibili.</li>
              </ul>
              <p>
                La disponibilità continuativa e priva di interruzioni non è garantita, salvo quanto diversamente previsto in specifici accordi SLA.
              </p>
            </Block>

            {/* ARTICOLO 22 – ASSISTENZA */}
            <Block>
              <ArticleTitle num="ARTICOLO 22" title="Assistenza" />
              <p>
                Daily Practice 22 S.r.l. può fornire assistenza attraverso i canali indicati sulla piattaforma.
              </p>
              <p>
                Modalità, tempi di risposta e livello di assistenza possono variare in funzione del Piano.
              </p>
              <p>
                Il Piano Free può prevedere un livello di assistenza diverso o più limitato rispetto ai Piani Plus e Pro.
              </p>
            </Block>

            {/* ARTICOLO 23 – AGGIORNAMENTI NORMATIVI */}
            <Block>
              <ArticleTitle num="ARTICOLO 23" title="Aggiornamenti normativi" />
              <p>
                dailyplatform può includere funzionalità finalizzate a supportare il Cliente nella gestione della compliance.
              </p>
              <p>
                Daily Practice 22 S.r.l. può aggiornare tali funzionalità in relazione a modifiche normative o interpretative.
              </p>
              <p>
                La piattaforma non sostituisce tuttavia l'attività professionale necessaria per verificare l'effettiva applicabilità delle disposizioni normative allo specifico Cliente.
              </p>
            </Block>

            {/* ARTICOLO 24 – RESPONSABILITÀ DEL CLIENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 24" title="Responsabilità del Cliente" />
              <p>Il Servizio è utilizzato sotto la responsabilità del Cliente.</p>
              <p>Il Cliente è responsabile:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>delle informazioni inserite;</li>
                <li>delle decisioni adottate;</li>
                <li>degli Utenti autorizzati;</li>
                <li>della verifica degli output;</li>
                <li>dell'applicazione delle misure di sicurezza;</li>
                <li>dell'utilizzo professionale della piattaforma;</li>
                <li>della conformità dei propri trattamenti di dati;</li>
                <li>della correttezza dei documenti finali utilizzati.</li>
              </ul>
            </Block>

            {/* ARTICOLO 25 – LIMITAZIONE DI RESPONSABILITÀ */}
            <Block>
              <ArticleTitle num="ARTICOLO 25" title="Limitazione di responsabilità" />
              <p>
                Nei limiti consentiti dalla legge, Daily Practice 22 S.r.l. non è responsabile per danni derivanti da:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>uso non corretto della piattaforma;</li>
                <li>dati errati o incompleti forniti dal Cliente;</li>
                <li>mancata verifica di output IA;</li>
                <li>utilizzo di documenti generati senza adeguato controllo;</li>
                <li>accessi effettuati mediante credenziali condivise;</li>
                <li>attività di terzi;</li>
                <li>indisponibilità dipendenti da fornitori esterni;</li>
                <li>eventi di forza maggiore.</li>
              </ul>
              <p>Restano salve le responsabilità inderogabili previste dalla legge.</p>
            </Block>

            {/* ARTICOLO 26 – SOSPENSIONE DEL SERVIZIO */}
            <Block>
              <ArticleTitle num="ARTICOLO 26" title="Sospensione del Servizio" />
              <p>
                Daily Practice 22 S.r.l. può sospendere l'accesso al Servizio quando necessario in caso di:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>violazione dei presenti Termini;</li>
                <li>utilizzo illecito;</li>
                <li>minaccia alla sicurezza;</li>
                <li>tentativo di accesso abusivo;</li>
                <li>utilizzo fraudolento;</li>
                <li>compromissione delle credenziali;</li>
                <li>comportamento idoneo a compromettere il funzionamento della piattaforma;</li>
                <li>mancato pagamento di un Piano a pagamento;</li>
                <li>obbligo imposto da una pubblica autorità.</li>
              </ul>
              <p>Quando ragionevolmente possibile, il Cliente viene informato della sospensione.</p>
            </Block>

            {/* ARTICOLO 27 – FAIR USE */}
            <Block>
              <ArticleTitle num="ARTICOLO 27" title="Fair Use" />
              <p>
                Il Piano Free e gli altri Piani devono essere utilizzati secondo criteri di buona fede e ragionevolezza.
              </p>
              <p>
                Non è consentito utilizzare strumenti automatizzati o tecniche finalizzate ad aggirare:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>limiti delle interrogazioni IA;</li>
                <li>limiti documentali;</li>
                <li>limiti di Account;</li>
                <li>limiti di utilizzo;</li>
                <li>restrizioni tecniche;</li>
                <li>limitazioni del Piano.</li>
              </ul>
              <p>
                In caso di utilizzo anomalo o abusivo Daily Practice 22 S.r.l. può limitare temporaneamente o sospendere il Servizio.
              </p>
            </Block>

            {/* ARTICOLO 28 – PREZZI */}
            <Block>
              <ArticleTitle num="ARTICOLO 28" title="Prezzi" />
              <p>
                Il Piano Free è fornito gratuitamente secondo le caratteristiche e i limiti indicati nella piattaforma.
              </p>
              <p>
                I prezzi relativi ai Piani Plus, Pro e agli eventuali servizi accessori sono indicati prima dell'acquisto.
              </p>
              <p>
                Salvo diversa indicazione, i prezzi dei servizi professionali sono espressi al netto dell'IVA.
              </p>
            </Block>

            {/* ARTICOLO 29 – PAGAMENTO */}
            <Block>
              <ArticleTitle num="ARTICOLO 29" title="Pagamento" />
              <p>
                Per i Piani a pagamento, il Cliente è tenuto al pagamento dei corrispettivi secondo le modalità e le scadenze indicate al momento dell'acquisto o nella proposta commerciale.
              </p>
              <p>
                Daily Practice 22 S.r.l. può utilizzare provider esterni per la gestione dei pagamenti.
              </p>
            </Block>

            {/* ARTICOLO 30 – MANCATO PAGAMENTO */}
            <Block>
              <ArticleTitle num="ARTICOLO 30" title="Mancato pagamento" />
              <p>
                In caso di mancato pagamento di un importo dovuto, Daily Practice 22 S.r.l. può, previa comunicazione ove richiesta:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>sospendere le funzionalità a pagamento;</li>
                <li>limitare l'accesso al Servizio;</li>
                <li>richiedere il pagamento degli importi scaduti;</li>
                <li>risolvere il Contratto nei casi consentiti dalla legge.</li>
              </ul>
            </Block>

            {/* ARTICOLO 31 – ESPORTAZIONE DEI DATI NEL PIANO FREE */}
            <Block>
              <ArticleTitle num="ARTICOLO 31" title="Esportazione dei Dati nel Piano Free" />
              <p>
                Nel Piano Free, l'Utente può esportare direttamente dalla chat IA i dati e i contenuti resi disponibili attraverso tale funzionalità, nei formati e secondo le modalità tecnicamente previste dalla piattaforma.
              </p>
              <p>L'esportazione può riguardare, ove disponibile:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>contenuti generati dalla chat;</li>
                <li>riepiloghi;</li>
                <li>risposte;</li>
                <li>analisi;</li>
                <li>dati restituiti dalla piattaforma attraverso l'interazione IA.</li>
              </ul>
              <p>
                La possibilità di esportazione direttamente dalla chat IA costituisce la modalità di esportazione prevista per il Piano Free.
              </p>
              <p>
                Eventuali ulteriori modalità di esportazione, esportazioni massive, esportazioni di database, archivi documentali o dati strutturati possono essere riservate ai Piani a pagamento.
              </p>
              <p>
                L'esaurimento delle 5 interrogazioni IA non pregiudica, ove tecnicamente consentito, la possibilità di esportare i contenuti già generati prima del raggiungimento del limite.
              </p>
            </Block>

            {/* ARTICOLO 32 – CANCELLAZIONE DELL'ACCOUNT SU RICHIESTA DELL'UTENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 32" title="Cancellazione dell'Account su richiesta dell'Utente" />
              <p>
                L'Utente può richiedere la cancellazione del proprio Account secondo le modalità disponibili nella piattaforma.
              </p>
              <p>
                La cancellazione dell'Account personale non determina automaticamente la cancellazione dell'Organizzazione né dei Dati del Cliente.
              </p>
              <p>
                Qualora l'Utente sia l'unico Amministratore dell'Organizzazione, può essere necessario trasferire preventivamente il relativo ruolo.
              </p>
              <p>
                Prima della cancellazione, l'Utente è invitato a recuperare o esportare i Dati che intende conservare.
              </p>
            </Block>

            {/* ARTICOLO 33 – ACCOUNT INATTIVI – PIANO FREE */}
            <Block>
              <ArticleTitle num="ARTICOLO 33" title="Account inattivi – Piano Free" />
              <p>
                Daily Practice 22 S.r.l. si riserva la facoltà di disattivare e successivamente cancellare gli Account e le Organizzazioni associati al Piano Free che risultino inattivi per un periodo continuativo di almeno 12 mesi.
              </p>
              <p>
                Per inattività si intende l'assenza di accessi o di attività rilevanti dell'Utente sull'Account per l'intero periodo indicato.
              </p>
              <p>
                Prima della cancellazione, Daily Practice 22 S.r.l. invierà all'indirizzo email associato all'Account una comunicazione con un preavviso di almeno 30 giorni, invitando l'Utente ad accedere alla piattaforma o a recuperare ed esportare i Dati che intende conservare.
              </p>
              <p>
                Qualsiasi nuovo accesso effettuato durante il periodo di preavviso interrompe la procedura di cancellazione e mantiene attivo l'Account.
              </p>
              <p>
                Decorso il periodo di preavviso senza alcun accesso o altra attività dell'Utente, Daily Practice 22 S.r.l. potrà disattivare l'Account e procedere alla successiva cancellazione dei relativi Dati secondo i tempi tecnici e le politiche di backup applicabili, fatti salvi i Dati che debbano essere conservati per obbligo di legge o per la tutela dei diritti di Daily Practice 22 S.r.l.
              </p>
              <p>
                Prima della cancellazione definitiva, l'Utente del Piano Free può, ove tecnicamente disponibile, recuperare ed esportare dalla chat IA i dati e gli output già generati.
              </p>
            </Block>

            {/* ARTICOLO 34 – CANCELLAZIONE DELL'ORGANIZZAZIONE */}
            <Block>
              <ArticleTitle num="ARTICOLO 34" title="Cancellazione dell'Organizzazione" />
              <p>
                La cancellazione dell'Organizzazione può essere richiesta esclusivamente da un soggetto dotato delle necessarie autorizzazioni.
              </p>
              <p>
                Prima della cancellazione definitiva può essere consentita l'esportazione dei Dati.
              </p>
              <p>
                Daily Practice 22 S.r.l. può verificare l'identità e i poteri del richiedente prima di procedere.
              </p>
              <p>
                Daily Practice 22 S.r.l. può mantenere eventuali informazioni la cui conservazione sia richiesta dalla legge o necessaria per la tutela dei propri diritti.
              </p>
            </Block>

            {/* ARTICOLO 35 – SCADENZA O RISOLUZIONE DEL CONTRATTO E RECUPERO DEI DATI */}
            <Block>
              <ArticleTitle num="ARTICOLO 35" title="Scadenza o risoluzione del Contratto e recupero dei Dati" />
              <p>
                Alla scadenza, cessazione o risoluzione del Contratto, l'accesso al Servizio può essere interrotto dalla data di efficacia della cessazione.
              </p>
              <p>
                Prima della scadenza o della risoluzione, il Cliente è tenuto a recuperare ed esportare i Dati del Cliente che intende conservare utilizzando le funzionalità disponibili all'interno di dailyplatform.
              </p>
              <p>
                Per il Piano Free, ove applicabile, il recupero dei Dati può essere effettuato anche mediante le funzionalità di esportazione disponibili direttamente dalla chat IA.
              </p>
              <p>
                Per i Piani a pagamento possono essere previste ulteriori modalità di esportazione o restituzione dei Dati secondo le condizioni del relativo Piano.
              </p>
              <p>
                Daily Practice 22 S.r.l. può inoltre mettere a disposizione del Cliente, ove tecnicamente previsto, un periodo limitato successivo alla cessazione durante il quale recuperare i Dati.
              </p>
            </Block>

            {/* ARTICOLO 36 – CANCELLAZIONE DEI DATI DOPO LA CESSAZIONE DEL CONTRATTO */}
            <Block>
              <ArticleTitle num="ARTICOLO 36" title="Cancellazione dei Dati dopo la cessazione del Contratto" />
              <p>
                A seguito della scadenza, cessazione o risoluzione del Contratto, Daily Practice 22 S.r.l. manterrà i Dati del Cliente per un periodo massimo di 60 giorni, al fine di consentire il recupero o l'esportazione dei Dati, salvo termini differenti previsti dalla legge, dal DPA o da specifiche condizioni contrattuali.
              </p>
              <p>
                Durante tale periodo, il Cliente potrà richiedere o effettuare, secondo le funzionalità disponibili, il recupero dei Dati che intende conservare.
              </p>
              <p>
                Decorso il termine di 60 giorni dalla data di effettiva cessazione del Servizio, Daily Practice 22 S.r.l. inizierà la cancellazione dei Dati del Cliente presenti nei sistemi attivi e delle relative copie di backup, secondo le proprie procedure tecniche di conservazione e cancellazione.
              </p>
              <p>
                Restano esclusi dalla cancellazione i Dati che Daily Practice 22 S.r.l. sia tenuta a conservare per obblighi di legge, ordini dell'autorità, tutela dei propri diritti o altre basi giuridiche applicabili.
              </p>
              <p>
                Una volta completata la cancellazione, i Dati non potranno più essere recuperati.
              </p>
            </Block>

            {/* ARTICOLO 37 – RISOLUZIONE DEL CONTRATTO */}
            <Block>
              <ArticleTitle num="ARTICOLO 37" title="Risoluzione del Contratto" />
              <p>
                Fatti salvi gli ulteriori rimedi previsti dalla legge e dai presenti Termini, Daily Practice 22 S.r.l. può risolvere il Contratto in caso di grave o reiterata violazione delle condizioni di utilizzo.
              </p>
              <p>
                Costituiscono, a titolo esemplificativo, possibili cause di sospensione o risoluzione:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>utilizzo illecito del Servizio;</li>
                <li>utilizzo fraudolento;</li>
                <li>accesso non autorizzato;</li>
                <li>condivisione abusiva delle credenziali;</li>
                <li>aggiramento dei limiti del Piano;</li>
                <li>compromissione della sicurezza;</li>
                <li>caricamento sistematico di contenuti illeciti;</li>
                <li>violazione grave dei diritti di Daily Practice 22 S.r.l. o di terzi;</li>
                <li>mancato pagamento dei corrispettivi dovuti per i Piani a pagamento.</li>
              </ul>
              <p>
                Quando la natura della violazione lo consente, Daily Practice 22 S.r.l. può richiedere al Cliente di porre rimedio prima di procedere alla risoluzione.
              </p>
              <p>
                Alla risoluzione si applicano le disposizioni relative al recupero e alla cancellazione dei Dati previste dagli articoli precedenti.
              </p>
            </Block>

            {/* ARTICOLO 38 – RISERVATEZZA */}
            <Block>
              <ArticleTitle num="ARTICOLO 38" title="Riservatezza" />
              <p>
                Le Parti si impegnano a mantenere riservate le informazioni tecniche, organizzative, commerciali e aziendali non pubbliche apprese nell'ambito del rapporto.
              </p>
              <p>
                Le informazioni riservate non possono essere utilizzate per finalità estranee all'esecuzione del Contratto né comunicate a terzi se non quando necessario per l'erogazione del Servizio o richiesto dalla legge.
              </p>
            </Block>

            {/* ARTICOLO 39 – FORZA MAGGIORE */}
            <Block>
              <ArticleTitle num="ARTICOLO 39" title="Forza maggiore" />
              <p>
                Nessuna Parte è responsabile per ritardi o inadempimenti dovuti a eventi non ragionevolmente controllabili, quali calamità naturali, interruzioni delle reti, provvedimenti delle autorità, eventi bellici, attacchi informatici su larga scala, indisponibilità generalizzate di infrastrutture essenziali o altri eventi di forza maggiore.
              </p>
            </Block>

            {/* ARTICOLO 40 – DURATA DEL PIANO FREE */}
            <Block>
              <ArticleTitle num="ARTICOLO 40" title="Durata del Piano Free" />
              <p>Il Piano Free rimane attivo fino a quando:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>il Cliente mantiene il proprio Account;</li>
                <li>Daily Practice 22 S.r.l. continua a rendere disponibile tale Piano;</li>
                <li>non ricorre una causa di sospensione, inattività, cessazione o risoluzione prevista dai presenti Termini.</li>
              </ul>
              <p>
                Il Piano Free non attribuisce al Cliente un diritto irrevocabile alla disponibilità permanente e immutabile del Servizio.
              </p>
              <p>
                Qualora Daily Practice 22 S.r.l. modifichi in modo significativo o cessi il Piano Free, ne darà comunicazione agli Utenti con modalità adeguate e con ragionevole preavviso, salvo esigenze di sicurezza, obblighi normativi o altre circostanze urgenti.
              </p>
            </Block>

            {/* ARTICOLO 41 – MODIFICHE DEI TERMINI */}
            <Block>
              <ArticleTitle num="ARTICOLO 41" title="Modifiche dei Termini" />
              <p>
                Daily Practice 22 S.r.l. può aggiornare i presenti Termini per adeguarli a:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#2C2C2E]">
                <li>modifiche normative;</li>
                <li>evoluzioni del Servizio;</li>
                <li>introduzione di nuove funzionalità;</li>
                <li>modifiche commerciali;</li>
                <li>esigenze di sicurezza;</li>
                <li>evoluzioni tecnologiche.</li>
              </ul>
              <p>Le nuove condizioni saranno rese disponibili sul sito o nella piattaforma.</p>
              <p>
                Quando la natura della modifica lo richiede, Daily Practice 22 S.r.l. potrà richiedere una nuova accettazione.
              </p>
            </Block>

            {/* ARTICOLO 42 – CESSAZIONE DA PARTE DEL CLIENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 42" title="Cessazione da parte del Cliente" />
              <p>
                Il Cliente può cessare l'utilizzo del Piano Free eliminando il proprio Account o richiedendo la cessazione dell'Organizzazione.
              </p>
              <p>
                Per i Piani a pagamento si applicano le specifiche condizioni di durata, rinnovo e recesso comunicate al momento della sottoscrizione.
              </p>
              <p>
                Alla cessazione si applicano le disposizioni previste dagli articoli relativi al recupero e alla cancellazione dei Dati.
              </p>
            </Block>

            {/* ARTICOLO 43 – INDIPENDENZA DELLE PARTI */}
            <Block>
              <ArticleTitle num="ARTICOLO 43" title="Indipendenza delle Parti" />
              <p>
                Daily Practice 22 S.r.l. e il Cliente sono soggetti indipendenti.
              </p>
              <p>
                I presenti Termini non costituiscono partnership, società, mandato, agenzia, associazione o rapporto di lavoro tra le Parti.
              </p>
            </Block>

            {/* ARTICOLO 44 – NULLITÀ PARZIALE */}
            <Block>
              <ArticleTitle num="ARTICOLO 44" title="Nullità parziale" />
              <p>
                Qualora una disposizione dei presenti Termini sia dichiarata invalida o inefficace, le restanti disposizioni rimarranno valide ed efficaci.
              </p>
            </Block>

            {/* ARTICOLO 45 – MANCATA RINUNCIA */}
            <Block>
              <ArticleTitle num="ARTICOLO 45" title="Mancata rinuncia" />
              <p>
                Il mancato esercizio di un diritto previsto dal Contratto non costituisce rinuncia allo stesso.
              </p>
            </Block>

            {/* ARTICOLO 46 – KNOW-HOW */}
            <Block>
              <ArticleTitle num="ARTICOLO 46" title="Know-how" />
              <p>
                Ciascuna Parte mantiene la proprietà del know-how posseduto prima dell'inizio del rapporto o sviluppato autonomamente.
              </p>
              <p>
                Daily Practice 22 S.r.l. rimane libera di utilizzare il proprio know-how e di fornire servizi analoghi ad altri clienti.
              </p>
            </Block>

            {/* ARTICOLO 47 – INTERO ACCORDO */}
            <Block>
              <ArticleTitle num="ARTICOLO 47" title="Intero accordo" />
              <p>
                I presenti Termini, unitamente alla Privacy Policy, al DPA ove applicabile, alle condizioni del Piano e agli eventuali documenti richiamati, costituiscono l'accordo applicabile all'utilizzo di dailyplatform.
              </p>
            </Block>

            {/* ARTICOLO 48 – LEGGE APPLICABILE */}
            <Block>
              <ArticleTitle num="ARTICOLO 48" title="Legge applicabile" />
              <p>Il Contratto è regolato dalla legge italiana.</p>
            </Block>

            {/* ARTICOLO 49 – FORO COMPETENTE */}
            <Block>
              <ArticleTitle num="ARTICOLO 49" title="Foro competente" />
              <p>
                Per le controversie relative all'interpretazione, esecuzione o validità del Contratto sarà competente il foro individuato secondo la normativa applicabile e le specifiche condizioni contrattuali del rapporto.
              </p>
            </Block>

            {/* ARTICOLO 50 – CONTATTI */}
            <Block>
              <ArticleTitle num="ARTICOLO 50" title="Contatti" />
              <div className="p-5 rounded-2xl bg-[#F0EFEB]/80 border border-[#2C2C2E]/10 space-y-1 text-[#2C2C2E]">
                <p className="font-bold font-sans text-sm">Daily Practice 22 S.r.l.</p>
                <p>P. IVA 09637811218</p>
                <p>Via Coroglio 57</p>
                <p>80124 Napoli – Italia</p>
                <p>Sito: <a href="https://daily22.it" className="font-bold hover:underline">daily22.it</a></p>
                <p>Email: <a href="mailto:assistenza@dailyplatform.it" className="font-bold hover:underline">assistenza@dailyplatform.it</a></p>
              </div>
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