export type Cover = {
    captions: string
    file: {
        publicURL: string
    }
}

export type Activity = {
    id: string
    title: string
    date: string
    venue: string
    description: string
    Cover: Cover
}

export type QueryResult = {
    data: {
        allStrapiActivity: {
            edges: { node: Activity }[]
        }
    }
}