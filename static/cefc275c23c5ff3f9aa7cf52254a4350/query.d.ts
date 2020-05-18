type Asset = {
    publicURL: string,
    size: number,
}

type Report = {
    id: string
    title: string
    document: Asset
    cover: Asset
    summary: string
    publishing_date: string
}

export type QueryResult = {
    allStrapiReport: {
        edges: {
            node: Report
        }[]
    }
}