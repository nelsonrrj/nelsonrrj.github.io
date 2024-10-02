import type { Experience } from '~/types/experience'

const WORK_EXPERIENCE = [
  {
    company: 'Talently',
    position: 'Tech lead',
    sdate: '2021-02-01',
    edate: '2023-06-01',
    description:
      'Lideré técnicamente la plataforma educativa GO! de Talently, supervisando la revisión técnica y evaluando la viabilidad de nuevas funcionalidades. Organicé y distribuí tareas para un equipo de desarrolladores, asegurando la entrega puntual y de alta calidad de los proyectos. Colaborando con el equipo de diseño y producto para alinear las funcionalidades con las necesidades del usuario y los objetivos de negocio.',
    stack: [],
  },
  {
    company: 'Talently',
    position: 'Desarrollador Full Stack',
    sdate: '2021-02-01',
    edate: '2024-01-01',
    description:
      'Colaboré con un equipo para desarrollar nuevas funcionalidades en diversos servicios de Talently. Creé el sistema de postulación para la plataforma educativa GO! y un sistema de pagos en línea integrando Stripe mediante Laravel Cashier, incluyendo la gestión de cobros recurrentes. Mejoré los embudos de marketing y la gestión de clientes mediante la integración de ActiveCampaign y Pipedrive. Implementé servicios de análisis de usuarios como Mixpanel con Google Tag Manager, y mejoré la visibilidad y asistencia a clases personalizadas y eventos mediante la integración de Google Calendar y Calendly. Utilicé Laravel (versiones 6 y 9) con PHP (7.6 y 8), Nuxt con Vue y JavaScript.',
    stack: ['Laravel', 'PHP', 'Phpunit', 'Nuxt', 'Vue', 'JavaScript', 'Docker'],
  },
  {
    company: 'Sistran',
    position: 'Desarrollador Full Stack',
    sdate: '2020-10-01',
    edate: '2021-01-01',
    description:
      'Como profesional independiente, colaboré en el desarrollo y mejora de la suite de productos de seguros Sistran, implementando nuevas funcionalidades y optimizando las existentes . Utilicé tecnologías React (v16.10) y Node.js (v4.16) para crear interfaces de usuario intuitivas y backend escalables.',
    stack: ['React', 'Nodejs', 'JavaScript'],
  },
  {
    company: 'YOSS',
    position: 'Desarrollador Front-End',
    sdate: '2019-10-01',
    edate: '2020-03-01',
    description:
      'Como profesional independiente, me integré al equipo de desarrollo de YOSS para la renovación de las interfaces de usuario y el desarrollo de nuevas características. Utilizando Angularjs(v1.14).',
    stack: ['Angularjs', 'JQuery', 'JavaScript'],
  },
  {
    company: 'Remote PC solutions',
    position: 'Desarrollador Full Stack',
    sdate: '2019-01-01',
    edate: '2020-06-01',
    description:
      'Desarrollé una página web para la gestión administrativa de proveedores de servicio y clientes, optimizando la eficiencia en el manejo de información. Además, colaboré en equipo para crear un sistema integral para la planificación, venta y mantenimiento de proyectos inmobiliarios residenciales. Para esto utilicé las herramientas Angular (v7), Laravel (v5.7) y MySQL.',
    stack: ['Angular', 'Typescript', 'Laravel', 'PHP', 'MySql'],
  },
  {
    company: 'Karanta dev',
    position: 'Desarrollador Full Stack',
    sdate: '2017-08-01',
    edate: '2028-12-01',
    description:
      'Colaboré en equipo para desarrollar sistemas en la startup Karanta, incluyendo un sistema de gestión de licencias de software y una plataforma para la gestión de información de pozos petroleros, optimizando el acceso a datos críticos. También participé en la creación de una librería de componentes reutilizables en Vue.js, para acelerar el desarrollo de proyectos. Utilicé las herramientas  Laravel (v5.7), Vue (v2.4), PostgreSQL y Jest (v22.4.2) para pruebas unitarias.',
    stack: ['Vue', 'JavaScript', 'Jest', 'Laravel', 'PHP', 'Postgres'],
  },
]

const map: Experience[] = WORK_EXPERIENCE.map((exp) => ({
  company: exp.company,
  position: exp.position,
  sdate: new Date(exp.sdate),
  edate: new Date(exp.edate),
  description: exp.description,
  stack: exp.stack,
}))

export default map
