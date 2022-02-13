export interface User {
    id: string,
    login: string,
    avatar?: string,
}

export interface Label {
    id: string,
    color: string,
    name: string
}

export interface Issue {
    body?: string;
    user: User,
    labels: Label[],
    title: string,
    state: string,
    number: number,
    createdAt: string,
}

export interface IssueDetails extends Issue{
    body: string,
}
