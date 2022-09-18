export type TypeRootState = {
    projectName: string;
    figureList: TypeFigureItem[],
    drawingMode: TypeDrawingMode,
    isSaveModalVisible: boolean,
    isHistoryModalVisible: boolean,
}

export type TypeFigureItem = TypeDrawingMode & Partial<{
    key: string;
    moveX: number;
    moveY: number;
    endX: number;
    endY: number;
}>

export type TypeDrawingMode = {
    color: string;
    fill: string;
    type: EnumDrawingType;
    width: number;
}

export enum EnumDrawingType {
    PATH = 'Path',
    LINE = 'Line',
    CIRCLE = 'Circle',
    POINT = 'Point'
}