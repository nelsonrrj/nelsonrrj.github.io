import type { Experience } from '~/types/experience'

const WORK_EXPERIENCE = [
  {
    company: 'Talently',
    position: 'Desarrollador Full Stack',
    sdate: '2021-02-01T00:00:00-04:00',
    edate: '2024-01-01T00:00:00-04:00',
    description: 'Forme parte del equipo de desarrollo de Talently donde:',
    stack: [
      'Laravel',
      'PHP',
      'Phpunit',
      'Nuxt',
      'Vue',
      'JavaScript',
      'Tailwindcss',
      'Docker',
    ],
    location: 'Remoto',
    bulletPoints: [
      'Creé del lado backend el sistema de postulación de la plataforma educativa Talently GO!.',
      'Realice un sistema de pagos en línea con Stripe mediante Laravel Cashier.',
      'Ayudé a mejorar los embudos de marketing y la gestión de clientes mediante la integración de ActiveCampaign y Pipedrive. ',
      'Implementé el servicio de análisis de datos de usuarios, Mixpanel y Google Tag Manager.',
      'Mejoré la visibilidad y asistencia a clases personalizadas y eventos de talently mediante la integración de Google Calendar y Calendly.',
    ],
  },
  {
    company: 'Talently',
    position: 'Tech lead',
    sdate: '2021-12-01T00:00:00-04:00',
    edate: '2023-06-01T00:00:00-04:00',
    description:
      'Lideré técnicamente la plataforma educativa GO! de Talently donde:',
    stack: [],
    location: 'Remoto',
    bulletPoints: [
      'Realicé la revisión técnica y evalúe la viabilidad de nuevas funcionalidades.',
      'Organicé y distribuí tareas para un equipo de desarrolladores, asegurando la entrega puntual y de alta calidad de los proyectos.',
      'Trabajé junto con el equipo de diseño y producto para alinear las funcionalidades con las necesidades del usuario y los objetivos de negocio.',
    ],
  },
  {
    company: 'Sistran',
    position: 'Desarrollador Full Stack',
    sdate: '2020-10-01T00:00:00-04:00',
    edate: '2021-01-01T00:00:00-04:00',
    description:
      'Como profesional independiente en Sistran implementé nuevas funcionalidades y me encargué de la corrección de bugs de las funcionalidades existentes.',
    stack: ['React', 'Nodejs/Express', 'JavaScript'],
    location: 'Remoto',
  },
  {
    company: 'YOSS',
    position: 'Desarrollador Front-End',
    sdate: '2019-10-01T00:00:00-04:00',
    edate: '2020-03-01T00:00:00-04:00',
    description:
      'Como profesional independiente, me integré al equipo de YOSS para renovar las interfaces de usuario y desarrollar nuevas características.',
    stack: ['Angularjs', 'JQuery', 'JavaScript'],
    location: 'Remoto',
    bulletPoints: [],
  },
  {
    company: 'Remote PC solutions',
    position: 'Desarrollador Full Stack',
    sdate: '2019-01-01T00:00:00-04:00',
    edate: '2020-06-01T00:00:00-04:00',
    description: 'Como trabajador de Remote pc solutions:',
    stack: ['Angular', 'Typescript', 'Laravel', 'PHP', 'MySql'],
    location: 'Venezuela',
    bulletPoints: [
      'Desarrollé una página web para la gestión administrativa de proveedores de servicio y clientes, optimizando la eficiencia en el manejo de información.',
      'Colaboré para crear un sistema para la planificación, venta y mantenimiento de proyectos inmobiliarios residenciales.',
    ],
  },
  {
    company: 'Karanta dev',
    position: 'Desarrollador Full Stack',
    sdate: '2017-08-01T00:00:00-04:00',
    edate: '2018-12-01T00:00:00-04:00',
    description:
      'Colaboré en equipo para desarrollar sistemas en la startup Karanta:',
    stack: ['Vue', 'JavaScript', 'Jest', 'Laravel', 'PHP', 'Postgres'],
    location: 'Venezuela',
    bulletPoints: [
      'Creé un sistema de gestión de licencias de software.',
      'Colaboré en la implementación de una plataforma para la gestión de información de pozos petroleros y optimizar el acceso a datos críticos.',
      'Participé en la creación de una librería de componentes reutilizables en Vue.js, para acelerar el desarrollo de proyectos internos.',
      'Tecnologías utilizadas: Laravel (v5.7), Vue (v2.4), PostgreSQL y Jest (v22.4.2) para pruebas unitarias de Vuejs.',
    ],
  },
]

const map: Experience[] = WORK_EXPERIENCE.map((exp) => ({
  company: exp.company,
  position: exp.position,
  sdate: new Date(exp.sdate),
  edate: new Date(exp.edate),
  description: exp.description,
  stack: exp.stack,
  location: exp.location,
  bulletPoints: exp.bulletPoints,
}))

export default map
