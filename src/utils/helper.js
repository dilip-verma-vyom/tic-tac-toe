import { 
    config, 
    winCaseArray, 
    gameWinner 
} from '../constants/appConst';

const { 
    PLAYER_MARK,
    COMPUTER_MARK
} = config;

const {
    PLAYER,
    COMPUTER,
} = gameWinner


const checkWinner = (data) => {

    for (let j = 0; j < winCaseArray.length; j++) {
        const [ eleA, eleB, eleC ] = winCaseArray[j];
        if (data[eleA] && data[eleA] === data[eleB] && data[eleA] === data[eleC]) {
            if (data[eleA] === PLAYER_MARK) {
                return PLAYER;
            } else {
                return COMPUTER;
            }
        }
        
    }
    return null;
}

const possibleCompValues = (data) => {

    const newDataKeys = Object.keys(data);

    const possiblities = [];

    for (let index = 0; index < newDataKeys.length; index++) {
        console.log(index);
        const element = newDataKeys[index];
        if (data[element] !== PLAYER_MARK) {
            possiblities.push({ [`${element}`]: COMPUTER_MARK })
        }
    }

    return possiblities;

}

export {
    checkWinner,
    possibleCompValues
}
