export interface Opensource {
    role: Type;
}

export enum Type {
    Unknown,
    Creator,
    Maintainer,
    Contributor,
}

export const Role: { [key in Type]: String } = {
    [Type.Unknown]: 'Unknown',
    [Type.Creator]: 'Creator',
    [Type.Maintainer]: 'Maintainer',
    [Type.Contributor]: 'Contributor',
}