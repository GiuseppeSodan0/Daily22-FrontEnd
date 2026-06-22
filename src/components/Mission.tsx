import React from 'react';

export default function Mission() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6 text-gray-600 leading-relaxed">
          <blockquote className="text-lg font-light text-gray-900 border-l-4 border-yellow-500 pl-6 italic">
            Vogliamo costruire un futuro in cui <strong className="text-yellow-600">sicurezza, salute e benessere</strong> siano parte integrante della cultura aziendale e sociale
          </blockquote>

          <p className="text-sm sm:text-base">
            <strong className="text-gray-900">Daily</strong> nasce con una visione chiara: <strong className="text-yellow-600">trasformare i dati in consapevolezza, la tecnologia in protezione e l'innovazione in valore umano.</strong>
          </p>

          <p className="text-sm sm:text-base">
            Attraverso <strong className="text-gray-900">dailyplatform</strong>, la nostra piattaforma integrata, conversazionale e dotata di intelligenza artificiale, e <strong className="text-gray-900">WIDIU</strong>, il sistema indossabile che monitora in tempo reale parametri biometrici e ambientali, traduciamo le informazioni in <strong className="text-yellow-600">modelli predittivi di rischio</strong> capaci di anticipare le criticità e migliorare la prevenzione.
          </p>

          <p className="text-sm sm:text-base">
            Al centro del nostro ecosistema c'è <strong className="text-gray-900">Salvatore</strong>, l'avatar conversazionale che abbatte le barriere linguistiche, culturali e psicologiche, accompagnando lavoratori e aziende nei percorsi di <strong className="text-yellow-600">formazione, prevenzione e decisione consapevole</strong> per la sicurezza quotidiana.
          </p>

          <p className="text-sm sm:text-base">
            Crediamo in un'innovazione <strong className="text-yellow-600">etica e sostenibile</strong>, dove la tecnologia <strong className="text-yellow-600">serve le persone, non le sostituisce.</strong> Uniamo <strong className="text-gray-900">scienza, responsabilità ed empatia</strong> per costruire ambienti di lavoro più sicuri, più intelligenti e più umani.
          </p>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-yellow-600 italic">
              Daily – La sicurezza diventa conoscenza, la conoscenza diventa prevenzione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
