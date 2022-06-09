import React from 'react';
import {  
    Grid,
    Button,
} from '@mui/material';

import './component.css';

const style = {
    minHeight: '4rem',
    minWidth: '4rem',
    fontSize: 24,
    borderRadius: 0,
}

const styleBdrRight = {
    borderRight: '1px solid #000',
}

const styleBdrBtm = {
    borderBottom: '1px solid #000',
}

const InputSquare = ({ 
    matrixValues, 
    handleOnClickMatrixBtn, 
    computerLevel,
    winnerName 
}) => {

    return (
        <>
            <Grid 
                container
                spacing={0}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={12}>
                    <Button
                        name='_0_0'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._0_0 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                    >
                        {matrixValues._0_0}
                    </Button>
                    
                    <Button
                        name='_0_1'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._0_1 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                    >
                        {matrixValues._0_1}
                    </Button>

                    <Button
                        name='_0_2'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._0_2 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrBtm }}
                    >
                        {matrixValues._0_2}
                    </Button>

                </Grid>

                <Grid item xs={12}>
            
                    <Button
                        name='_1_0'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._1_0 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                    >
                        {matrixValues._1_0}
                    </Button>

                    <Button
                        name='_1_1'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._1_1 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrRight, ...styleBdrBtm }}
                    >
                        {matrixValues._1_1}
                    </Button>

                    <Button
                        name='_1_2'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._1_2 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrBtm }}
                    >
                        {matrixValues._1_2}
                    </Button>

                </Grid>

                <Grid item xs={12}>
                    <Button
                        name='_2_0'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._2_0 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrRight}}
                    >
                        {matrixValues._2_0}
                    </Button>
                    
                    <Button
                        name='_2_1'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._2_1 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style, ...styleBdrRight }}
                    >
                        {matrixValues._2_1}
                    </Button>

                    <Button
                        name='_2_2'
                        onClick={handleOnClickMatrixBtn}
                        disabled={matrixValues._2_2 !== '' || computerLevel === '' || winnerName !== undefined}
                        sx={{ ...style }}
                    >
                        {matrixValues._2_2}
                    </Button>

                </Grid>

            </Grid>

        </>
    )
}

export default InputSquare;