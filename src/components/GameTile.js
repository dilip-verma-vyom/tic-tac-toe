import React from 'react';
import {
    Button,
} from '@mui/material';



const style = {
    minHeight: 35,
    minWidth: 35,
    borderRadius: 0,
    backgroundColor: '#fafafa',
    fontSize: 12.5,
}
const styleBdrRight = {
    borderRight: '1px solid #000',
}

const styleBdrBtm = {
    borderBottom: '1px solid #000',
}

const GameTile = (props) => {

    const {
        matrixvalues,
        id,
    } = props;

    return (
        
        <div id={id} {...props}>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                >
                    {matrixvalues && matrixvalues._0_0}
                </Button>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                >
                    {matrixvalues && matrixvalues._0_1}   
                </Button>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrBtm }}
                >
                    
                    {matrixvalues && matrixvalues._0_2}   
                </Button>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                >
                    {matrixvalues && matrixvalues._1_0}
                </Button>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                >
                    {matrixvalues && matrixvalues._1_1}
                </Button>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrBtm }}
                >
                    {matrixvalues && matrixvalues._1_2}
                </Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrRight }}
                >
                    {matrixvalues && matrixvalues._2_0}
                </Button>
                <Button 
                    disabled 
                    sx={{ ...style, ...styleBdrRight }}
                >
                    {matrixvalues && matrixvalues._2_1}
                </Button>
                <Button 
                    disabled 
                    sx={{ ...style }}
                >
                    {matrixvalues && matrixvalues._2_2}
                </Button>
            </div>
            
            
        </div>
    )
}

export default GameTile;
