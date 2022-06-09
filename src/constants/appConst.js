const config = {
    PLAYER_MARK: 'X',
    COMPUTER_MARK: 'O',
};

const winCases1 = '00 01 02';
const winCases2 = '00 10 20';
const winCases3 = '00 11 22';
const winCases4 = '01 11 21';
const winCases5 = '02 12 22';
const winCases6 = '02 11 20';
const winCases7 = '10 11 12';
const winCases8 = '10 00 20';
const winCases9 = '11 01 21';
const winCases10 = '11 10 12';
const winCases11 = '20 10 00';
const winCases12 = '20 21 22';
const winCases13 = '20 11 02';
const winCases14 = '21 11 01';
const winCases15 = '21 20 22';
const winCases16 = '22 21 20';
const winCases17 = '22 12 02';
const winCases18 = '22 11 00';


const winCaseArray = [
    ['_0_0', '_0_1', '_0_2'],
    ['_1_0', '_1_1', '_1_2'],
    ['_2_0', '_2_1', '_2_2'],
    ['_0_0', '_1_0', '_2_0'],
    ['_0_1', '_1_1', '_2_1'],
    ['_0_2', '_1_2', '_2_2'],
    ['_0_0', '_1_1', '_2_2'],
    ['_0_2', '_1_1', '_2_0'],
];

const gameWinner = {
    PLAYER: 'You',
    COMPUTER: 'Computer',
    DRAW: 'Draw'
}

const initialStartPos = {
    verticalLine_1: { x: 450, y: 80, x1: 450, y1: 180 },
    verticalLine_2: { x: 500, y: 80, x1: 500, y1: 180 },
    horizontalLine_1: { x: 400, y: 110, x1: 550, y1: 110 },
    horizontalLine_2: { x: 400, y: 150, x1: 550, y1: 150 },
    startStatePos: {text: 'Start State', x: 600, y: 130, color: 'grey', font: '30px Arial'}
}


export {
    config,
    winCaseArray,
    gameWinner,
    initialStartPos
};
