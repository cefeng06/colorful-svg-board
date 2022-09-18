import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChromePicker, ColorResult } from "react-color";
import { EnumActionType } from "../../redux/types";

export const ColorPicker: FC = () => {
    const dispatch = useDispatch();
    const drawingMode = useSelector((state) => state.drawingMode);
    const [color, setColor] = useState(drawingMode.color);

    const handleColorChange = (color: ColorResult) => {
        setColor(color.hex);
    };

    const handleColorChangeComplete = (color: ColorResult) => {
        const mode = { ...drawingMode, color: color.hex }
        dispatch({ type: EnumActionType.SET_DRAW_MODE, mode });
    };

    return <div>
        <ChromePicker
            color={color}
            onChange={handleColorChange}
            onChangeComplete={handleColorChangeComplete}
        />
    </div>
}