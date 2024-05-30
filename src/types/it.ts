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
}

export const ITTypeName: { [key in ITType]: String } = {
    [ITType.Unknown]: 'Unknown',
    [ITType.Asciinema]: 'Asciinema',
    [ITType.Dockerhub]: 'Dockerhub',
    [ITType.PacketStorm]: 'PacketStorm',
}