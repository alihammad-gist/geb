import { Activity } from "../activity/query"
import { Member } from "../team/query"

type Asset = {
    file: {
        publicURL: string
    }
    caption: string
}

type Tag = {
    name: string
}

type Blog = {
    title: string
    slug: string
    cover: Asset
    body: string
    body_abstract: string
    featured: "YES" | "NO"
    activity: Activity
    author: Member
    tags: Tag[]
    created_at: string
    updated_at: string
}

type QueryResult = {
    allStrapiBlog: {
        edges: {
            node: Blog
        }[]
    }
}

type SingleQueryResult = {
    strapiBlog: Blog
}