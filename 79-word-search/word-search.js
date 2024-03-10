/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let currWord = ""

    // double for loop to try each square
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j]) {
                currWord += board[i][j]
                board[i][j] = -1
                if (recurse(i, j)) return true
                currWord = currWord.substring(0, currWord.length - 1)
                board[i][j] = word[0]

            }
        }

    }

    // try "recurse" on the square at i j
    function recurse(i, j) {
        if (currWord === word) return true
        if (currWord.length >= word) return false

        // loop through possible directions
        for (let dir = 0; dir < directions.length; dir++) {
            // make sure newLetter is in bounds
            const newCol = i + directions[dir][0]
            const newRow = j + directions[dir][1]
            const nextLetter = word[currWord.length]
            if (acceptableSquare(newCol, newRow) && board[newCol][newRow] === nextLetter) {
                currWord += nextLetter
                board[newCol][newRow] = -1
                if (recurse(newCol, newRow)) return true
                currWord = currWord.substring(0, currWord.length - 1)
                board[newCol][newRow] = nextLetter
            }
        }
        return false
    }

    function acceptableSquare(i, j) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] === -1) return false
        return true
    }
    return false
};

