import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnumActionType } from "../../redux/types";
import { Box, Slider } from "@mui/material";

export const WidthSlider: FC = () => {
    const dispatch = useDispatch();
    const drawingMode = useSelector((state) => state.drawingMode);
    const [width, setWidth] = useState(drawingMode.width);

    const handleWidthChange = (event: Event, val: number | number[], activeThumb: number) => {
        if (typeof val === 'number') {
            setWidth(val);
        }
        return;
    };

    const handleWidthChangeComplete = (event: Event | React.SyntheticEvent<Element, Event>, val: number | number[]) => {
        const mode = { ...drawingMode, width: val }
        dispatch({ type: EnumActionType.SET_DRAW_MODE, mode });
    };

    return <Box sx={{ width: '200px' }}>
        <Slider
            aria-label="Stroke Width"
            color={"secondary"}
            value={width}
            step={1}
            marks
            min={1}
            max={10}
            onChange={handleWidthChange}
            onChangeCommitted={handleWidthChangeComplete}
        />
    </Box>
}