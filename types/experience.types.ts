import experienceJSON from '~/data/workExperience.json'

export interface Experience {
  company: string
  position: string
  sdate: Date
  edate?: Date
  description: string
  stack: Array<string>
}

export const WORK_EXPERIENCE: Experience[] = experienceJSON.map((exp) => ({
  company: exp.company,
  position: exp.position,
  sdate: new Date(exp.sdate),
  edate: new Date(exp.edate),
  description: exp.description,
  stack: exp.stack,
}))
