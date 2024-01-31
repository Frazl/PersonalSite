import { Education, Position, Project, Resume, ResumeLink, WorkExperience } from "./types"

const toMonthYear = (month: string, year: number) => new Date(Date.parse(`01 ${month} ${year} 00:00:00 GMT`))

// Links 

const links: ResumeLink[] =  [
    {name: "Sean.Fradl@gmail.com", href: "mailto:sean.fradl@Gmail.com"},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/seanfradl/"},
    {name: "GitHub", href: "https://www.github.com/Frazl"}
]

// Experience 


const sapSeniorDev: Position = {
    name: "Senior Developer (T3)",
    location: "Dublin, Ireland",
    start: toMonthYear('Mar', 2023),
    points: [
        'Working as part of the extended Data Integration and Calculations team for SAP Analytics Cloud.',
        'Responsible for driving innovation and business critical topics.',
        'Contribute by leading new feature architecture and development.',
        'Designed and developed an innovative open source SAC Story Widget that allows users, for the first time in SAC, to upload model data directly from an SAC analytical story. This has been adopted by large customers such as John Deere, ',
        'Improved data export service API functionality with the design and development of delta based replication to avoid full load replication. Reducing customer replication scenarios from hours to minutes. Led conversations with leading customers driving adoption of new functionality. e.g. BMW, ST Micro, BHP, Colgate.'
    ]
}

const sapDev: Position = {
    name: "Developer (T2)",
    start: toMonthYear('Jun', 2021),
    end: toMonthYear('Mar', 2023),
    points: [
        'Working on high throughput public data export and import APIs critical to planning data replication and import scenarios.',
        'Converted to full time hire upon graduating university to work as part of the Data Integration & Extensions team for SAP Analytics Cloud.',
    ]
}

const sapStudent: Position = {
    name: "Vocational Training Student",
    start: toMonthYear('May', 2019),
    end: toMonthYear('Jun', 2021),
    points: [
        'Worked within the Augmented BI Analytics Team in SAP Ireland. Was actively working with React, Typescript, Robot Framework, and HANA DB to enhance and maintain SAP Analytics Cloud (SAC), in particular Smart Discovery.',
    ]
}

const sapWorkExperience: WorkExperience = {
    company: "SAP SE",
    location: "Dublin, Ireland",
    positions: [sapSeniorDev, sapDev, sapStudent]
}

const experience: WorkExperience[] = [
    sapWorkExperience
]

// Projects 

const equineAppProject: Project = {
    name: "Equine App",
    link: "https://equine.app",
    points: [
        "Designed, developed and actively maintain Equine App. Equine App is actively simplifying everyday equine nutrition processes for breeders, trainers and equine feed manufacturers through a web based cloud application. It is currently sold to feed manufacturers for an annual license fee.",
        "Won DCU President's Award for Innovation.",
        "Won Enterprise Ireland Student Entrepreneur Awards - Merit Award.",
        ],
    
}

const projects: Project[] = [
    equineAppProject,

]

// Education 

const education: Education = {
    name: "Dublin City University",
    title: "B.Sc. Computer Science",
    location: "Dublin, Ireland",
    start: toMonthYear("Sep", 2017),
    end: toMonthYear("Jun", 2021),
    points: [
        '3rd in class out of 150+ students.',
        'Achieved a first class honours degree.',
        'Elected class representative 2019-21.',
        'Elected chairperson of DCU startup society 2020-21.',
    ]
}

// Misc Tech

const languages = [
    'Java',
    'JavaScript',
    'Python',
    'NodeJS',
    'Go'
]

const frameworks = [
    'Spring',
    'Maven',
    'React',
    'Redux',
    'ExpressJs',
    'Typescript',
]


const technology = [
    'Docker',
    'Elastic Search',
    'Grafana',
    'OAuth',
    'Jenkins',
    'Git{Lab,Hub}'
]


const testing = [
    'Junit',
    'Mockito',
    'PyUnit',
    'Robot Framework',
    'Postman'
]


// Interests 

const interests = ['3D Printing', 'Web Application Development', 'Drones', 'Scuba Diving', 'Video Games']

// Fully built object 

const myResume: Resume = {
    name: "Seán Fradl",
    email: "Sean.Fradl@gmail.com",
    location: "Dublin, Ireland",
    number: "",
    links,
    experience,
    projects,
    education: [education],
    languages,
    frameworks,
    technology,
    testing,
    interests
}

export default myResume 