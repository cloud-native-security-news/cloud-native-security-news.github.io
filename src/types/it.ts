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
    HackerOne,
    Hackmd,
    Milw0rm,
    KeyBase,
    PyPI,
    Terraform,
    SourceForge
}

export const ITType2Icon: { [key in ITType]: string } = {
    [ITType.Unknown]: "icon-unknown",
    [ITType.Asciinema]: "icon-asciinema",
    [ITType.Dockerhub]: "icon-dockerhub",
    [ITType.PacketStorm]: "icon-packetstorm",
    [ITType.ExploitDB]: "icon-exploitdb",
    [ITType.SlideShare]: "icon-slideshare",
    [ITType.SpeakerDeck]: "icon-speaker-deck",
    [ITType.HackerOne]: "icon-hackerone",
    [ITType.Hackmd]: "icon-hackmd",
    [ITType.Milw0rm]: "icon-milw0rm",
    [ITType.KeyBase]: "icon-keybase",
    [ITType.PyPI]: "icon-pypi",
    [ITType.Terraform]: "icon-terraform",
    [ITType.SourceForge]: "icon-sourceforge",
}

export const ITType2Text: { [key in ITType]: string } = {
    [ITType.Unknown]: '?',
    [ITType.Asciinema]: 'Asciinema',
    [ITType.Dockerhub]: 'Dockerhub',
    [ITType.PacketStorm]: 'PacketStorm',
    [ITType.ExploitDB]: 'ExploitDB',
    [ITType.SlideShare]: 'SlideShare',
    [ITType.SpeakerDeck]: 'SpeakerDeck',
    [ITType.HackerOne]: 'HackerOne',
    [ITType.Hackmd]: 'Hackmd',
    [ITType.Milw0rm]: 'milw0rm',
    [ITType.KeyBase]: 'KeyBase',
    [ITType.PyPI]: 'PyPI',
    [ITType.Terraform]: 'Terraform',
    [ITType.SourceForge]: 'SourceForge',
}