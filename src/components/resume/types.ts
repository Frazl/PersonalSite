export interface ResumeLink {
    name: string
    href: string
}

export interface WorkExperience {
    company: string
    location: string
    positions: Position[]
}

export interface Position {
    name: string
    location?: string
    start: Date
    end?: Date
    points: string[]
}

export interface Education{
    name: string
    title: string
    location: string,
    start: Date
    end?: Date
    points: string[]
}

export interface Project {
    name: string 
    link?: string
    points: string[]
}

export interface Resume {
    name: string
    email: string
    number: string
    location: string,
    links: ResumeLink[]
    experience: WorkExperience[]
    projects: Project[]
    education: Education[]
    languages: string[]
    frameworks: string[]
    technology: string[]
    testing: String[]
    interests: String[]
}