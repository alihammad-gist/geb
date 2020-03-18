export type Asset = {
    file: {
        publicURL: string
    }
    caption: string
}

export type Member = {
    id: string
    name: string
    Image: Asset
    about: string
    remarks: string
    job_title: string
}

export type QueryResult = {
    allStrapiTeamMember: {
        edges: {
            node: Member
        }[]
    }
}