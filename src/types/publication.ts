export interface Publication {
    type: Type;
    name: string;
    url: string;
    published: string;
}

export enum Type {
    Unknown,
    Paper,
    Book,
    Article,
    AuditReport
}

export const PublicationType: { [key in Type]: String } = {
    [Type.Unknown]: 'Unknown',
    [Type.Paper]: 'Paper',
    [Type.Book]: 'Book',
    [Type.Article]: 'Article',
    [Type.AuditReport]: 'AuditReport',
}