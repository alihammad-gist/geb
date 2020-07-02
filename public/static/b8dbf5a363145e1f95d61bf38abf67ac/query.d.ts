
type FileAsset = {
    size: number
    publicURL: string
}

type ExternalPublication = {
    title: string
    cover: FileAsset
    document: FileAsset
}

type QueryList = {
    allStrapiExternalPublication: {
        edges: {
            node: ExternalPublication
        }[]
    }
}

