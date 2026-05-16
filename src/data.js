export const data = {
  name: 'Shravan Kumar',
  nameShort: 's.shravan',
  title: 'Business Analyst',
  subtitle: 'Technical Consultant',
  location: 'Hyderabad, India',
  coords: '17.3850° N / 78.4867° E',
  email: 'shravank.1703@gmail.com',
  phone: '+91-88853 41438',
  linkedin: 'https://www.linkedin.com/in/sahukara-shravan-kumar-1703042121211255683/',
  github: 'https://github.com/shravahn',
  bio: `I turn complex business problems into clean, scalable systems. Workday, Zendesk, ClickUp — I've lived inside them. I bridge the gap between stakeholders and engineering, speak both languages fluently, and deliver solutions that actually stick.`,

  experience: [
    {
      role: 'Business Analyst',
      company: 'L5.AI',
      period: 'May 2025 — Present',
      current: true,
      bullets: [
        'End-to-end business process analysis and requirement gathering — translating stakeholder inputs into structured documentation and actionable implementation plans.',
        'Designed ClickUp-based Agile frameworks from scratch: sprint boards, backlog structures, feature pipelines, review workflows.',
        'Architected a Workday–Zendesk integration automating HR workflows — leave requests, onboarding, multi-step ticket orchestration.',
        'Deep Workday HCM: tenant config, business process frameworks, absence management, org structures, reporting.',
        'Documented AS-IS → TO-BE process flows, identified gaps, pushed improvements through to delivery.',
      ],
    },
    {
      role: 'IT Intern',
      company: 'Welspun Group',
      period: 'May — Jun 2024',
      current: false,
      bullets: [
        'Process mapping + IoT implementation across manufacturing ops — 20% downtime reduction, 15% efficiency gain.',
        'Validated WelTrak blockchain ↔ SAP MB56 data sync via ABAP — 30% supply chain traceability improvement.',
        'Built a Flutter mobile app for real-time PLC visualization — 25% faster production monitoring response.',
        'Hands-on with Industry 4.0: IoT sensors, blockchain, ABAP, mobile dev inside enterprise-scale manufacturing.',
      ],
    },
    {
      role: 'Digital Affairs Lead',
      company: 'ASME – KIIT Chapter',
      period: 'Jan 2022 — Dec 2024',
      current: false,
      bullets: [
        'Grew chapter online presence by 200% through structured campaigns and cross-functional coordination.',
        'Led cross-team collaboration on a student EV Bike project showcased at MotoGP industry events.',
      ],
    },
  ],

  projects: [
    {
      id: '001',
      name: 'Workday–Zendesk Integration Platform',
      tags: ['Workflow Automation', 'HR Tech', 'System Integration', 'Workday', 'Zendesk'],
      desc: 'Event-driven integration automating employee onboarding and leave request workflows. Mapped requirements to data flows, defined field-level contracts, built multi-step ticket orchestration across HR and IT.',
      highlight: true,
    },
    {
      id: '002',
      name: 'Internal Task & Time Tracker App',
      tags: ['Full Stack', 'Process Efficiency', 'Internal Tooling'],
      desc: 'Full-stack productivity tool monitoring task assignments, time logs, and workload — replaced manual status updates with a clean reporting dashboard. Spec\'d, designed, and delivered end-to-end.',
      link: null,
    },
    {
      id: '003',
      name: 'Cloud Microservice — Spring Boot + Elasticsearch',
      tags: ['Java', 'Spring Boot', 'MongoDB', 'Docker', 'REST APIs'],
      desc: 'Cloud-native microservice with MongoDB for storage, Elasticsearch for full-text search, RESTful CRUD APIs, Docker deployment. Built for scale.',
      link: 'https://github.com/shravahn/Mongo_Elastic_DemoMaster',
    },
    {
      id: '004',
      name: 'PLC Data Analysis Mobile App',
      tags: ['Flutter', 'Dart', 'Android', 'IoT'],
      desc: 'Flutter app visualizing real-time PLC sensor data — secure login, machine/date filtering, reporting dashboard. Improved engineering team productivity by 15%.',
      link: 'https://github.com/shravahn/App-for-PLC',
    },
  ],

  skills: [
    {
      category: 'Business Analysis',
      items: ['Requirement Gathering', 'Business Process Analysis', 'Gap Analysis', 'Workflow Optimization', 'Stakeholder Management', 'User Story Mapping', 'Agile / Scrum', 'Process Documentation'],
    },
    {
      category: 'Enterprise Platforms',
      items: ['Workday HCM', 'Zendesk', 'ClickUp', 'Jira', 'SAP'],
    },
    {
      category: 'Technical',
      items: ['REST APIs', 'System Integration', 'SQL', 'Docker', 'SDLC', 'Workflow Automation', 'Data Analysis'],
    },
    {
      category: 'Development',
      items: ['Java / Spring Boot', 'JavaScript', 'Python', 'Flutter / Dart', 'ABAP', 'AWS', 'MongoDB'],
    },
  ],

  certs: [
    { name: 'Workday Pro — Human Capital Management', abbr: 'HCM', issuer: 'Workday' },
    { name: 'Workday Pro — Data Loading', abbr: 'DL', issuer: 'Workday' },
  ],

  education: [
    { degree: 'B.Tech', spec: 'Computer Science & Engineering', institute: 'KIIT University', year: '2021–2025', grade: '72%' },
    { degree: 'Inter / PUC', spec: 'Science', institute: 'Narayana PU College', year: '2021', grade: '95%' },
    { degree: 'SSC (ICSE)', spec: '—', institute: 'Santhome Public School', year: '2019', grade: '91%' },
  ],

  ticker: ['Workday Pro HCM', 'Zendesk Integration', 'ClickUp Agile', 'Business Process Analysis', 'Requirement Gathering', 'Flutter Dev', 'Spring Boot', 'Stakeholder Coordination', 'Workflow Automation', 'Data Loading', 'Gap Analysis', 'System Integration'],
}
