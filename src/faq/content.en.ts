import type {FaqGroupId, FaqItem, FaqItemId} from './content';

export const englishCopy = {
  heading: 'Frequently asked questions about daily',
  title: 'daily FAQ | Workplace safety, AI, IoT and dailyplatform',
  description: 'Find answers about daily, dailyplatform, Salvatore, WIDIU and Vera, and learn how AI, IoT and sensors support workplace safety and risk prevention.',
  intro: 'Find answers about the daily ecosystem for workplace safety. Learn how dailyplatform and related services use artificial intelligence, IoT and sensors to help prevent workplace risks.',
  contactHeading: 'Still looking for an answer?',
  contactText: 'Get in touch to ask about our services or discuss what your company needs.',
  contactLabel: 'Contact daily',
  logoAlt: 'daily logo',
  locale: 'en-GB',
};

export const englishGroupTitles: Record<FaqGroupId, string> = {
  ecosistema: 'daily and its ecosystem',
  piattaforma: 'dailyplatform',
  'intelligenza-artificiale': 'Artificial intelligence and Salvatore',
  sensoristica: 'WIDIU and sensors',
  iot: 'Vera and IoT',
  app: 'dailybydaily',
  prevenzione: 'Prevention, data and support',
};

export const englishQuestions: Record<FaqItemId, Omit<FaqItem, 'id'>> = {
  'cos-e-daily': {
    question: 'What is daily?',
    answer: [
      'daily develops technology and services for workplace safety and risk prevention. It combines artificial intelligence, IoT, sensors and health, safety and environment (HSE) expertise to help companies and workers recognise signs of risk and manage safety in their day-to-day work.',
    ],
  },
  'come-funziona-ecosistema': {
    question: 'How does the daily ecosystem work?',
    answer: [
      'dailyplatform brings safety data, documents and activities together. WIDIU collects readings at work and Vera organises data from connected devices. Salvatore helps users find procedures and training materials, while dailybydaily apps support specific tasks such as checklists and questionnaires. The ',
      {label: 'overview of daily services', to: '/servizi'},
      ' explains what each solution does.',
    ],
  },
  'consulenza-formazione': {
    question: 'Does daily also offer safety consultancy and training?',
    answer: [
      'Yes. ',
      {label: 'Daily Safety Lab', to: '/daily-safety-lab'},
      ' is the daily division that provides HSE consultancy and training. It also helps companies assess risks and set up management systems for day-to-day prevention work.',
    ],
  },
  'cos-e-dailyplatform': {
    question: 'What is dailyplatform?',
    answer: [
      {label: 'dailyplatform', to: '/dailyplatform'},
      ' is the daily digital platform for managing workplace safety. It brings company data, documents, deadlines, indicators and tasks together. It can also integrate readings from sensors and wearables so safety teams can review them alongside other company information.',
    ],
  },
  'destinatari-dailyplatform': {
    question: 'Who is dailyplatform for?',
    answer: [
      'dailyplatform is designed for people who coordinate or oversee workplace safety, including employers, safety leads, HSE managers, supervisors, site managers and consultants. It also supports organisations that manage safety across several locations or worksites.',
    ],
  },
  'documentazione-hse': {
    question: 'Which safety documents can I manage with dailyplatform?',
    answer: [
      'dailyplatform brings together risk assessments (DVR), site safety plans (POS), shared-work risk assessments (DUVRI), operating procedures and safety data sheets. The platform lets users link documents to evidence and information collected on site.',
    ],
  },
  'scadenze-hse': {
    question: 'How can I keep track of workplace safety deadlines?',
    answer: [
      'The dailyplatform scheduler tracks training and occupational health deadlines, such as when training certificates expire and when health surveillance is due. Safety teams can review upcoming deadlines alongside company data and safety indicators.',
    ],
  },
  'daily-ia': {
    question: 'What is daily IA used for?',
    answer: [
      'daily IA is the HSE artificial intelligence component described in ',
      {label: 'dailyplatform', to: '/dailyplatform'},
      '. It helps users summarise documents, review regulatory material and gather information to support workplace safety decisions.',
    ],
  },
  'cos-e-salvatore': {
    question: 'What is Salvatore?',
    answer: [
      {label: 'Salvatore', to: '/salvatore'},
      ' is the daily governed AI agent for workplace safety. Workers, companies and safety teams can ask questions in everyday language to better understand risks, instructions, safe working practices and training materials.',
    ],
  },
  'procedure-aziendali': {
    question: 'Can Salvatore help me find a company procedure?',
    answer: [
      'Yes. Salvatore helps users consult company procedures and documents uploaded to dailyplatform, such as risk assessments (DVR), site safety plans (POS) and shared-work risk assessments (DUVRI). The AI agent helps users find and understand the instructions relevant to their task.',
    ],
  },
  'responsabilita-prevenzione': {
    question: 'What is the role of HSE professionals when using Salvatore?',
    answer: [
      'The responsible workplace safety professionals remain in charge of safety assessments and decisions. Salvatore supports their work by making procedures, operating instructions and training materials easier to consult.',
    ],
  },
  'cos-e-widiu': {
    question: 'What is WIDIU?',
    answer: [
      {label: 'WIDIU', to: '/widiu'},
      ' is the daily smartwatch for workplace risk prevention. Worn on the wrist, it collects biometric, movement and environmental readings. The readings can be integrated into dailyplatform for safety monitoring.',
    ],
  },
  'dati-widiu': {
    question: 'What data does WIDIU collect?',
    answer: [
      'WIDIU collects readings such as heart rate, skin temperature, acceleration, posture and local environmental conditions. These readings help track changes in working conditions. Fatigue is estimated from the signals the device collects.',
    ],
  },
  'cos-e-vera': {
    question: 'What is Vera?',
    answer: [
      {label: 'Vera', to: '/vera'},
      ' is the daily IoT gateway software. It collects and standardises data streams from sensors, wearables and connected machinery so dailyplatform, monitoring dashboards and analytics systems can use them.',
    ],
  },
  'sensori-dailyplatform': {
    question: 'How does sensor data reach dailyplatform?',
    answer: [
      'Vera collects measurements from connected devices, standardises their data formats and sends the data to the platform. dailyplatform can then combine environmental readings from a site or facility with safety information such as job duties, risk factors and operating activities.',
    ],
  },
  'cos-e-dailybydaily': {
    question: 'What is dailybydaily?',
    answer: [
      'dailybydaily is a collection of apps for specific safety, compliance, wellbeing and prevention tasks. Depending on the app, users can complete checklists and questionnaires, report issues or access relevant material. The services page describes the ',
      {label: 'dailybydaily apps', to: '/servizi'},
      '.',
    ],
  },
  'app-compliance': {
    question: 'Which daily app helps manage compliance tasks?',
    answer: [
      'daily4compliance is the dailybydaily app that helps companies and consultants manage obligations, requirements and deadlines. It offers guided workflows by sector and activity and supports the management of checklists, documents, tasks and reviews.',
    ],
  },
  'dati-per-prevenzione': {
    question: 'How does daily use data to support workplace risk prevention?',
    answer: [
      'dailyplatform connects readings from the workplace with job duties and company risk factors. Dashboards, indicators and alerts help safety teams identify changes in working conditions, set priorities and follow up on preventive actions.',
    ],
  },
  'informazioni-privacy': {
    question: 'Where can I find information about how daily handles personal data?',
    answer: [
      'The daily ',
      {label: 'privacy policy', to: '/privacy-policy'},
      ' explains how personal data is processed and which rights people can exercise. You can contact the daily team with questions about a particular solution or how it would be used in your company.',
    ],
  },
  'informazioni-commerciali': {
    question: 'How do I find the right daily solution for my company?',
    answer: [
      'Tell the daily team about your company’s needs using the ',
      {label: 'contact form', to: '/contatti'},
      '. To learn more about dailyplatform, you can also review the ',
      {label: 'plans on the platform page', to: '/dailyplatform'},
      '.',
    ],
  },
};
