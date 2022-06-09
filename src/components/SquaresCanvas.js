import React, {
    useEffect,
    useRef
} from 'react';
import {  
    Grid,
    Button,
} from '@mui/material';
import { initialStartPos } from '../constants/appConst';


const {
    verticalLine_1,
    verticalLine_2,
    horizontalLine_1,
    horizontalLine_2,
    startStatePos
} = initialStartPos;

const style = {
    outline: 'none',
    cursor: 'pointer',
    fontSize: '30px',
    border: 'none',
}

const SquaresCanvas = (props) => {

    const canvas = useRef();
    let ctx = null;

    useEffect(() => {

        const canvasEle = canvas.current;
        canvasEle.width = canvasEle.clientWidth;
        canvasEle.height = canvasEle.clientHeight;
        
        ctx = canvasEle.getContext("2d");
    }, []);

    const drawLine = (info, style = {}) => {
        const { x, y, x1, y1 } = info;
        const { color = 'black', width = 1 } = style;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.stroke();
    }

    const drawText = () => {

        const { text, x, y, color, font } = startStatePos;

        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y)
        ctx.fillStyle = 'black';
    }

    const getCanvasWidthHeight = () => {
        return {
            cWidth: ctx.canvas.width,
            cHeight: ctx.canvas.height
        }
    }

    useEffect(() => {
        
        // const { cWidth, cHeight } = getCanvasWidthHeight();

        // console.log(cWidth);
        // console.log(cHeight);

        // drawLine({ x: cWidth / 2 - 100, y: cHeight / 16, x1: cWidth / 2 -100, y1: cHeight / 16 + 100 });
        // drawLine({ x: cWidth / 2 - 30, y: cHeight / 16, x1: cWidth / 2 -30, y1: cHeight / 16 + 100 });
        // drawLine({ x: cWidth / 2 - 150, y: cHeight / 16 - 100, x1: cWidth / 2 - 150, y1: cHeight / 16 - 100 });
        drawLine(verticalLine_1);
        drawLine(verticalLine_2);
        drawLine(horizontalLine_1);
        drawLine(horizontalLine_2);
        drawText(startStatePos)

    }, [ ])

    return (
        <>
            <canvas 
                ref={canvas} 
                style={{ 
                    border: '1px solid #333',
                }}
            >
            </canvas>

        </>
    )
}

export default SquaresCanvas;