function createGame(n) {
    let pellet = ".";
    let fruit = "@";
    let ghost = "^";
    let pacman = "C";
    let half = Math.floor(n/2)
    let board = [];

    for (let x = 0; x < n; x++) {
        board.push(pellet);
    }

    board[half] = pacman;
    board[Math.floor(Math.random() * (n + 1))] = fruit;
    board[Math.floor(Math.random() * (n + 1))] = ghost;

    console.log(board);
    return board;

}

function moveLeft(game) {
    let pacman = "C";
    let pacmanLocation = game.indexOf("C");
    if (pacmanLocation == -1) {
        pacmanLocation = game.indexOf("C.");
    }
    
    if (pacmanLocation - 1 != 0) {
        game[pacmanLocation] = "";
        pacman += game[pacmanLocation - 1];
        game[pacmanLocation - 1] = pacman;
        pacman = "C";
    }

    console.log(game);

}

function moveRight(game) {
    let pacman = "C";
    let pacmanLocation = game.indexOf("C");
    if (pacmanLocation == -1) {
        pacmanLocation = game.indexOf("C.");
    }
    
    if (pacmanLocation + 1 != game.length) {
        game[pacmanLocation] = "";
        pacman += game[pacmanLocation + 1];
        game[pacmanLocation + 1] = pacman;
        pacman = "C";
    }

    console.log(game);
}

let gameBoard = createGame(10);
moveLeft(gameBoard);
moveRight(gameBoard);