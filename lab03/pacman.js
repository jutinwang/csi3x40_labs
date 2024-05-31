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
    board[Math.floor(Math.random() * 11)] = fruit;
    board[Math.floor(Math.random() * 11)] = ghost;

    console.log(board);
    return board;

}

createGame(10);