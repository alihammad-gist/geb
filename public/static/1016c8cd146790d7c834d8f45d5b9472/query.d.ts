export type Asset = {
    file: {
        publicURL: string
        childImageSharp : {
            fluid: {
                src: string
            }
        }
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
    job_desc: string
    fields: {
        slug: string
    }
    email: string
    phone: string
    linkedIn: string
    twitter: string
}

export type QueryResult = {
    allStrapiTeamMember: {
        edges: {
            node: Member
        }[]
    }
}

export type SingularResult = {
    strapiTeamMember: Member
}

