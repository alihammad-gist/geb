export type Asset = {
    caption: string
    file: {
        publicURL: string
        childImageSharp: {
            fluid: {
                aspectRatio: number
                src: string
            }
        }
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
    Cover: Asset
    activity_types: [ActivityType, ...ActivityType[]] // at least one activity type exists
    press_coverages: PressCoverage[]
    Gallery: Asset[]
}

export type QueryResult = {
    data: {
        allStrapiActivity: {
            edges: { node: Activity }[]
        }
    }
}

export type SingleResult = {
    strapiActivity: Activity
}