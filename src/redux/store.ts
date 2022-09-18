import { DefaultRootState } from "react-redux";
import { createStore, combineReducers } from "redux";
import { EnumDrawingType, TypeRootState } from "../types";
import { EnumActionType, TypeAction } from "./types";

declare module "react-redux" {
    interface DefaultRootState extends TypeRootState { }
    export function useDispatch(): <T extends TypeAction>(action: T) => T;
}

const initialState: DefaultRootState = {
    projectName: 'my-svg-picture',
    figureList: [],
    drawingMode: {
        color: '#FF6617',
        fill: 'transparent',
        type: EnumDrawingType.LINE,
        width: 6
    },
    isSaveModalVisible: false,
    isHistoryModalVisible: false,
}

const editReducer = (state: DefaultRootState = initialState, action: TypeAction): DefaultRootState => {
    const { type } = action;
    switch (type) {
        case EnumActionType.ADD_NEW_FIGURE:
            state.figureList.push(action.figure);
            return { ...state };
        case EnumActionType.SET_DRAW_MODE:
            state.drawingMode = action.mode;
            return { ...state };
        case EnumActionType.UNDO:
            break;
        case EnumActionType.RECOVER:
            break;
        default:
            return state;
    }
    return state;
}

export default createStore(editReducer)