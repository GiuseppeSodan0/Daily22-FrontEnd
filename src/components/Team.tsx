import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: 'ILARIA LEONARDIS',
      role: 'CEO & Founder',
      bio: 'Ideatrice del progetto e guida strategica dell\'ecosistema Daily. Coordina team, visione, partnership e sviluppo di soluzioni innovative per la salute e la sicurezza sul lavoro.',
    },
    {
      name: 'RAFFAELE DE FILIPPIS',
      role: 'COO & CTO',
      bio: 'Gestisce la strategia finanziaria e lo sviluppo tecnologico del progetto Daily. Supervisiona l\'infrastruttura software, l\'integrazione dei sensori e l\'implementazione delle soluzioni digitali scalabili.',
    },
    {
      name: 'LOREDANA CASTIGLIA',
      role: 'R&D Manager',
      bio: 'Coordina le attività di ricerca scientifica, guidando lo sviluppo dei moduli innovativi WIDIU, Salvatore e DailyPlatform. Supervisiona l\'integrazione tra dati, dispositivi e modelli predittivi.',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-24 pb-32 bg-gray-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-yellow-400/10 blur-[160px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 space-y-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6 text-gray-600 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">IOT E IA PER LA SALUTE, LA SICUREZZA E LA SOSTENIBILITA' AMBIENTALE.</h2>
            <p className="text-sm sm:text-base">
              Promuoviamo <strong className="text-gray-900">salute, sicurezza e sostenibilità ambientale</strong> attraverso <strong className="text-yellow-600">tecnologie avanzate,</strong> sviluppate per supportare le organizzazioni nell'attuazione di <strong className="text-gray-900">politiche e pratiche HSE</strong> e nell'allineamento ai <strong className="text-yellow-600">principi dell'Agenda 2030 per lo Sviluppo Sostenibile.</strong>
            </p>
            <p className="text-sm sm:text-base">
              La nostra <strong className="text-gray-900">piattaforma daily</strong> si basa sull'integrazione di sensoristica <strong className="text-yellow-600">IoT e intelligenza artificiale,</strong> progettata per rilevare e analizzare in tempo reale i <strong className="text-gray-900">fattori di rischio nei contesti lavorativi, industriali e sportivi.</strong>
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-500">
              <li>anticipare situazioni critiche</li>
              <li>ottimizzare le performance operative</li>
              <li>rafforzare le politiche di prevenzione e compliance</li>
            </ul>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-yellow-600 italic">
                Ilaria Leonardis – CEO – Daily Practice 22
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4 text-gray-600 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">LA TECNOLOGIA CI PROTEGGE MENTRE LA SICUREZZA SI EVOLVE</h3>
            <p className="text-sm">
              La nostra tecnologia si fonda sulla conoscenza concreta del contesto operativo, acquisita attraverso dati reali raccolti dalla nostra sensoristica ambientale e dai dispositivi IoT.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4 text-gray-600 leading-relaxed">
            <h3 className="text-lg font-bold text-gray-900">INNOVARE SIGNIFICA BENESSERE E SOSTENIBILITA'</h3>
            <p className="text-sm">
              Crediamo che l'innovazione responsabile debba partire dalla capacità di integrare salute, sicurezza e sostenibilità già nelle scelte progettuali.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12 font-sans">Il nostro Team.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-yellow-400 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 mx-auto mb-6 flex items-center justify-center border border-yellow-200">
                  <span className="text-3xl font-bold text-yellow-600">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-4 font-mono">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-gray-200">
                  <a href="#" className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-yellow-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
