export type Profile = {
    name: { ja: string; en: string }
    affiliation: string
    title: string
    bio: string
    residence: string
    birthYearMonth: string
    avatarSrc: string
    githubLogin: string
}

export type Activity = {
    period: {
        start: string | null
        end: string | null
    }
    title: string
    subtitle: string
    description: string
    links?: ActivityLink[]
    tags?: Tag[]
}

export type ActivityLink = {
    label: string
    url: string
}

export const TAGS = [
    'Go',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'LLM',
    'BigQuery',
    'Laravel',
    'AWS',
    'Docker',
    'Observability',
    'Architecture',
    'Testing',
] as const

export type Tag = typeof TAGS[number]
