declare module "ProjectDescriptionExcerpt" {

    export interface Media {
        id: string;
        publicURL: string;
        size: number;
        ext: string;
    }

    export interface Outcome {
        id: number;
        title: string;
        cover: Media;
        body: string;
        slider_background: Media;
    }

    export interface Node {
        title: string;
        introduction: string;
        outcomes: Outcome[];
        background: string;
        objectives: string;
        achievements: string;
        next: string;
    }

    export interface Edge {
        node: Node;
    }

    export interface AllStrapiProjectDescription {
        edges: Edge[];
    }

    export interface Data {
        allStrapiProjectDescription: AllStrapiProjectDescription;
    }

    export interface QueryResult {
        data: Data;
    }

    export interface SingularResult {
        strapiProjectDescription: Node
    }

}

