import { TypeFigureItem } from '../../types/index';
import PaintBrush from './painter';

class LinePainter extends PaintBrush {

    /** 根据交互事件创建的绘制函数 */
    draw(event: React.MouseEvent, figure: TypeFigureItem) {
        const { clientX, clientY } = event;
        figure.moveX = clientX;
        figure.moveY = clientY;
    }

    /** svg渲染函数 */
    render(figure: TypeFigureItem) {
        const { moveX, moveY, endX, endY, key, color, width, fill } = figure;
        if (!moveX || !moveY) return;
        return (
            <line
                key={key}
                x1={endX}
                y1={endY}
                x2={moveX}
                y2={moveY}
                stroke={color}
                fill={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={width}
            />
        )
    }
}

export const LineBrush = new LinePainter();