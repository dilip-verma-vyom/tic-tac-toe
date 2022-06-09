import React, {
    useState,
    useEffect,
    Fragment
} from 'react';
import {  
    Button,
    Grid,
    Typography
} from '@mui/material';
import _ from 'lodash';
import GameTile from './GameTile';
import Xarrow, { Xwrapper } from 'react-xarrows';

const GameTree = (props) => {

    const {
        matrixValues,
        clickCount,
        handleOnClickReset,
        renderWinner
    } = props;

    const [ tiles, setTiles ] = useState([]);

    const [ adj, setAdj ] = useState(0);

    useEffect(() => {
        if (clickCount > 0) {
            setTiles((prevState) => (
                [
                    ...prevState,
                    _.cloneDeep(matrixValues)
    
                ]
            ))
            
        }
    }, [matrixValues]);

    useEffect(() => {
        setAdj(adj + 1);
    })

    const renderTiles = () => {
        return tiles.map((item, index) => 
            {  
                return (
                <Fragment key={index}>
                        <GameTile 
                            matrixvalues={item} 
                            id={`Xarrow${index}`}
                        />

                {
                    tiles.length - 1 >= index && index > 0
                    &&
                    <Xarrow
                        start={`Xarrow${index - 1}`}
                        end={`Xarrow${index}`}
                        strokeWidth={2}
                        zIndex={100}
                        path='smooth'
                        animateDrawing
                    />

                }
                </Fragment>
                );
                
            }
        );
    }

    const onReset = () => {
        handleOnClickReset();
        setTiles([]);
        setAdj(0);
    }

    return (
        <>
            <Xwrapper>

            <Typography>
                Start State
            </Typography>
            <br />
            <br />
            <br />

            <GameTile
                id={'XarrowA'}
            />
            <Grid
                container
                spacing={2}
                direction='row'
                alignItems='center'
                justifyContent='space-evenly'
            >
                {renderTiles()}
            </Grid>

            <br />
            <br />
            <br />
            
            {
                tiles.length > 0
                &&
                <Xarrow
                    start={'XarrowA'}
                    end={'Xarrow0'}
                    strokeWidth={2}
                    zIndex={100}
                    path='straight'
                    animateDrawing
                />

            }

            </Xwrapper>
            <br /> 
            <br /> 
            <br />
            <Button
                onClick={onReset}
                variant='outlined'
            >
                Reset
            </Button>

            <br />
            <br />
            {renderWinner()}
        </>
    );
}

export default GameTree;
