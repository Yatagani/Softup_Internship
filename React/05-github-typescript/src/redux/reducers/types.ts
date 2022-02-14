export interface Action {
    type: string,
    status: string,
    payload?: any,
}

export interface ActionStatus {
    STARTED: 'Started',
    SUCCEDED: 'Succeded',
    FAILED: 'Failed',
}
