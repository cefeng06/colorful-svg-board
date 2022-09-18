import React, { useState, FC } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumDrawingType, TypeFigureItem } from "../../types";
import { LineBrush } from "../../utils/painter/lineBrush";
import { getUid } from "../../utils/mathUtil";
import { EnumActionType } from "../../redux/types";
import './style.css';


export const DrawingPanel: FC = () => {
    const dispatch = useDispatch();
    const drawingMode = useSelector((state) => state.drawingMode);
    const figureList = useSelector((state) => state.figureList);
    const [currFigure, setCurrFigure] = useState<TypeFigureItem>({ ...drawingMode });
    const [onPainting, setPainting] = useState(false);

    const getPaintBrush = (type: EnumDrawingType) => {
        switch (type) {
            case EnumDrawingType.PATH:
                return LineBrush;
            case EnumDrawingType.POINT:
                return LineBrush;
            default:
                return LineBrush;
        }
    };

    let brushInstance = useMemo(() => {
        return getPaintBrush(drawingMode.type);
    }, [drawingMode.type]);

    const getRenderMethod = (type: EnumDrawingType) => {
        let render = (item: TypeFigureItem) => { };
        switch (type) {
            case EnumDrawingType.PATH:
                render = LineBrush.render;
                break;
            case EnumDrawingType.POINT:
                render = LineBrush.render;
                break;
            case EnumDrawingType.LINE:
                render = LineBrush.render;
                break;
        }
        return render;
    }

    const handleTouchEnd = () => {

    };

    const handleTouchMove = () => {

    };

    const handleMouseDown = (event: React.MouseEvent) => {
        setPainting(true);
        const { clientX, clientY } = event;
        initCurrFigure(clientX, clientY);
    };

    const handleMouseUp = (event: React.MouseEvent) => {
        setPainting(false);
        dispatch({ type: EnumActionType.ADD_NEW_FIGURE, figure: currFigure });
    };

    const initCurrFigure = (x: number, y: number) => {
        const key = getUid(5);
        const endX = x;
        const endY = y;
        setCurrFigure({ ...drawingMode, key, endX, endY });
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (!onPainting) return;
        brushInstance.draw(event, currFigure);
        requestAnimationFrame(updatePanel);
    };

    const handleMouseLeave = () => {
        setPainting(false);
    };

    const updatePanel = () => {
        setCurrFigure({ ...currFigure });
    };

    return (<svg
        className='drawing-panel'
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
    >
        {figureList.map(item => getRenderMethod(item.type)(item))}
        {brushInstance.render(currFigure)}
    </svg>)
}