export interface Social {
    type: Type;
    username: string
    address: string
}

export enum Type {
    Unknown,
    Twitter,
    Mastodon,
    Telegram,
    Reddit,
    Facebook,
    ResearchGate,
    LinkedIn,
    Youtube,
    Instagram
}
