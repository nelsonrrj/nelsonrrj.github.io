import { Experience } from "~/types/experience.types";

const experienceJSON = [
    {
        "company": "Talently",
        "position": "Backend developer",
        "sdate": "2021-02-01",
        "edate": "2024-01-01",
        "description": "Colaboración en equipo para mejorar la plataforma educativa de Talently, añadiendo nuevas funcionalidades y realizando integraciones con herramientas de seguimiento de clientes como Pipedrive y ActiveCampaign. También implementamos una integración con Calendly y Google Calendar para la gestión de reuniones y eventos. Utilizamos Laravel (versiones 6.2 y 9.19) para el backend y Nuxt 2 para el frontend.",
        "stack": [
            "PHP", "Laravel", "Vue", "Nuxt", "Docker"
        ]
    }
]

export const WORK_EXPERIENCE: Experience[] = experienceJSON
    .map((exp) => ({
        company: exp.company,
        position: exp.position,
        sdate: new Date(exp.sdate),
        edate: new Date(exp.edate),
        description: exp.description,
        stack: exp.stack,
    }));

