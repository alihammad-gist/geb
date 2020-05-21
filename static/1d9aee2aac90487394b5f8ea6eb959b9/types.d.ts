export type Image = {
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