import type { NavBarItem } from '~/types/navBarItem.types'

export default {
  ABOUT: {
    title: 'Sobre mí',
    id: 'about',
    link: '/#about',
  },
  EXPERIENCE: {
    title: 'Experiencia laboral',
    id: 'experience',
    link: '/#experience',
  },
  BLOG: {
    title: 'Blog',
    id: 'blog',
    link: '/#blog',
  },
  PROJECTS: {
    title: 'Projects',
    id: 'projects',
    link: '/#projects',
  },
} as { [key: string]: NavBarItem }
