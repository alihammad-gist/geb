export type Cover = {
    captions: string
    file: {
        publicURL: string
    }
}

type ActivityType = {
    name: string
}

export type Activity = {
    id: string
    title: string
    date: string
    venue: string
    description: string
    Cover: Cover
    activity_types: [ActivityType, ...ActivityType[]] // at least one activity type exists
    press_coverages: PressCoverage[]
}

export type QueryResult = {
    data: {
        allStrapiActivity: {
            edges: { node: Activity }[]
        }
    }
}