import React, {
  useState,
  useEffect
} from 'react';
import {  
  Grid,
  Divider,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from '@mui/material';
import _ from 'lodash';
import MContainer from './components/MContainer';
import InputSquare from './components/InputSquare';
import GameTree from './components/GameTree';
import { checkWinner } from './utils/helper';
import { config, gameWinner } from './constants/appConst';


const { 
  PLAYER_MARK,
  COMPUTER_MARK
} = config;

const {
  PLAYER,
  COMPUTER,
  DRAW
} = gameWinner;

const computerLevelChoices = [ 
  {
    name: 'Random',
    value: 'random'
  }, 
  {
    name: 'Pro',
    value: 'pro'
  } 
];

const App = () => {

  const [ matrixValues, setMatrixValues ] = useState({
    _0_0: '',
    _0_1: '',
    _0_2: '',
    _1_0: '',
    _1_1: '',
    _1_2: '',
    _2_0: '',
    _2_1: '',
    _2_2: '',
  });

  const [ computerLevel, setComputerLevel ] = useState('');
  
  const [ winnerName, setWinnerName ] = useState(undefined);

  const [ remainingTile, setRemainingTile ] = useState(9);

  const [ clickCount, setClickCount ] = useState(0);

  useEffect(() => {
    const winnerIs = checkWinner(matrixValues);
    if (winnerIs !== undefined && winnerIs !== null) {
      setWinnerName(winnerIs)
    } else if (winnerIs === null && Object.values(matrixValues).indexOf('') === -1) {
      setWinnerName(DRAW);
    }

  }, [matrixValues]);

  const computerChoice = (newMatrixValue) => {
    return new Promise((resolve, reject) => {
      let newMValue = null;
      const newMatrxKeys = Object.keys(newMatrixValue);
      const emptyMatrxKeys = [];
      for (let index = 0; index < newMatrxKeys.length; index++) {
        const element = newMatrxKeys[index];
        if (newMatrixValue[element] === '') {
          emptyMatrxKeys.push(element);
        }
      }
  
      setMatrixValues((prevMatrixValues) => {
        const updatedMValues =  {
          ...prevMatrixValues,
          [`${emptyMatrxKeys[_.random(0, emptyMatrxKeys.length - 1 )]}`]: COMPUTER_MARK
        }
        newMValue = updatedMValues;
        return updatedMValues;
      });
      
      resolve(newMValue);

    });
  }

  const playerChoice = (e) => {

    return new Promise((resolve, reject) => {
      let updatedMatrixValues = null;
      setMatrixValues((prevMatrixValues) => {
        const newMatrixValue = {
          ...prevMatrixValues,
          [e.target.name]: PLAYER_MARK,
        }
        updatedMatrixValues = newMatrixValue;
        return newMatrixValue;
      })

      resolve(updatedMatrixValues);
    })


  }



  const handleOnClickMatrixBtn = (e) => {

    playerChoice(e)
    .then(result => {
      computerChoice(result);
    });
    
    setClickCount(clickCount + 1)
  }

  const handleOnClickReset = (e) => {
    setMatrixValues({
      _0_0: '',
      _0_1: '',
      _0_2: '',
      _1_0: '',
      _1_1: '',
      _1_2: '',
      _2_0: '',
      _2_1: '',
      _2_2: '',
    });
    setWinnerName(undefined);
    setClickCount(0);
    // window.location.reload(true);
  }

  const handleOnChangeComputerLevel = (e) => {
    setComputerLevel(e.target.value);
  }

  const renderWinner = () => {
    if (winnerName === undefined) {
      return '';
    }
    else if (winnerName !== undefined && winnerName === DRAW) {
      return (
        <Typography variant='h3' color='GrayText' gutterBottom>
          {`It is a ${_.toLower(winnerName)}!!!`}
        </Typography>
      );
    } else if (winnerName !== undefined && winnerName !== DRAW) {
      return (
        <Typography variant='h3' color={winnerName === PLAYER ? 'teal' : 'crimson'} gutterBottom>
          {`${winnerName} win!!!`}
        </Typography>
      );
    }
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          height: '100vh',
          padding: 1
        }}
      >
        <Grid item xs={3}>
          <MContainer>

          <Typography
            variant='h4'
          >
            You
          </Typography>
            <br />

            <FormControl sx={{ width: '50%' }}>
              <InputLabel>Vs</InputLabel>
              <Select
                label='Vs'
                value={computerLevel}
                onChange={handleOnChangeComputerLevel}
              >
                <MenuItem
                  value={''}
                >
                  <em>None</em>
                </MenuItem>
                {
                  computerLevelChoices.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item.value}
                      disabled={item.value === 'pro'}
                    >
                      {item.name}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            <br />
            <br />
            <br />

            <InputSquare  
              matrixValues={matrixValues}
              handleOnClickMatrixBtn={handleOnClickMatrixBtn}
              computerLevel={computerLevel}
              winnerName={winnerName}
            />
              <br />
              <br />
              <br />
            {/* <Button
              variant='outlined'
              sx={{
                width: '55%'
              }}
              onClick={handleOnClickReset}
            >
              Reset
            </Button> */}
              <br />
              <br />
              {/* {renderWinner()} */}

          </MContainer>
        </Grid>

        <Grid item xs={1}>
          <Divider orientation='vertical' />

        </Grid>
        
        <Grid item xs={8} sx={{ display: 'block', height: '100%', width: '100%' }}>
          <MContainer>
            <GameTree 
              matrixValues={matrixValues}
              // remainingTile={remainingTile}
              clickCount={clickCount}
              handleOnClickReset={handleOnClickReset}
              renderWinner={renderWinner}
            />
          </MContainer>
        </Grid>

      </Grid>
    </>
  );
}

export default App;
