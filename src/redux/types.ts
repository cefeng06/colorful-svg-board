export enum EnumActionType {
    SET_DRAW_MODE = 'SET_DRAW_MODE',
    UNDO = 'UNDO',
    RECOVER = 'RECOVER',
    ADD_NEW_FIGURE = 'ADD_NEW_FIGURE'
}

export type TypeAction = {
    type: EnumActionType,
    [key: string]: any
}