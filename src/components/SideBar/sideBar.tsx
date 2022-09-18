import { FC } from "react";
import { ColorPicker } from "../ColorPicker/colorPicker";
import { WidthSlider } from "../WidthSlider/widthSlider";
import './style.css'

export const SideBar: FC = () => {

    return (
        <div className="side-bar">
            <ColorPicker />
            <WidthSlider />
        </div>
    )
}