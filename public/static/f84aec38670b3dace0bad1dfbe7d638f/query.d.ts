import { Member } from "../team/query";

type Quote = {
    message: string
    team_member: Member
}

type SingleRes = {
    strapiQuote: Quote
}