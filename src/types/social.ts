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
    Instagram,
    Matrix,
    Crunchbase,
}

export const SocialType2Icon: { [key in Type]: string } = {
    [Type.Unknown]: "icon-unknown",
    [Type.Twitter]: "icon-Twitter",
    [Type.Mastodon]: "icon-mastodon",
    [Type.Telegram]: "icon-telegram",
    [Type.Reddit]: "icon-reddit",
    [Type.Facebook]: "icon-facebook",
    [Type.ResearchGate]: "icon-researchgate",
    [Type.LinkedIn]: "icon-linkedin",
    [Type.Youtube]: "icon-youtube",
    [Type.Instagram]: "icon-instagram",
    [Type.Matrix]: "icon-matrix",
    [Type.Crunchbase]: "icon-crunchbase",
}

export const SocialType2Text: { [key in Type]: string } = {
    [Type.Unknown]: "Unknown",
    [Type.Twitter]: "Twitter",
    [Type.Mastodon]: "Mastodon",
    [Type.Telegram]: "Telegram",
    [Type.Reddit]: "Reddit",
    [Type.Facebook]: "Facebook",
    [Type.ResearchGate]: "ResearchGate",
    [Type.LinkedIn]: "LinkedIn",
    [Type.Youtube]: "Youtube",
    [Type.Instagram]: "Instagram",
    [Type.Matrix]: "Matrix",
    [Type.Crunchbase]: "Crunchbase",
}