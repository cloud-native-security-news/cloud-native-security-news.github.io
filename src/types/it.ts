export interface IT {
    type: ITType;
    username: string
    address: string
}

export enum ITType {
    Unknown,
    Asciinema,
    Dockerhub,
    PacketStorm,
    ExploitDB,
    SlideShare,
    SpeakerDeck,
}

export const ITType2Text: { [key in ITType]: string } = {
    [ITType.Unknown]: 'Unknown',
    [ITType.Asciinema]: 'Asciinema',
    [ITType.Dockerhub]: 'Dockerhub',
    [ITType.PacketStorm]: 'PacketStorm',
    [ITType.ExploitDB]: 'ExploitDB',
    [ITType.SlideShare]: 'SlideShare',
    [ITType.SpeakerDeck]: 'SpeakerDeck',
}