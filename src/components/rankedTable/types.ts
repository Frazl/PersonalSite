import data from './data.json'

export interface Person {
    name: string
    score: number
}


export interface Week {
    daySubtitle: string
    scores: Person[]
}

export type Weeks = Week[]

export const Sample_Scores_Over_Weeks : Weeks = [
    {
        daySubtitle: "Day 1",
        scores: [
            {name: "Marge", score: 10},
            {name: "Fraz", score: 20},
            {name: "Zach", score: 50},
        ]
    },
    {
        daySubtitle: "Day 2",
        scores: [
            {name: "Marge", score: 10},
            {name: "Fraz", score: 100},
            {name: "Zach", score: 20},
        ]
    },
    {
        daySubtitle: "Day 3",
        scores: [
            {name: "Marge", score: 100},
            {name: "Fraz", score: 0},
            {name: "Zach", score: 0},
        ]
    },
    {
        daySubtitle: "Day 4",
        scores: [
            {name: "Marge", score: -2},
            {name: "Fraz", score: 0},
            {name: "Zach", score: 0},
        ]
    },
]