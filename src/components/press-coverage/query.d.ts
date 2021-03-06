type PressCoverage = {
    id: number
    prints: {
        localFile: {
            publicURL: string
            childImageSharp: {
                fluid: {
                    src: string
                }
            }
        }
    }[]
    news_publisher: number | null
    link: string | null
}

type NewsPublisher = {
    name: string
    website: string | null
    strapiId: number
}

type NewPublishersResult = {
    allStrapiNewsPublisher: {
        nodes: NewsPublisher[]
    }
}
