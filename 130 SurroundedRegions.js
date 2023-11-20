/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  R = board.length
  C = board[0].length

  for(i = 0; i < R;i++)
    for(j = 0; j < C;j++) {
      if(i == 0 || j == 0 || (i == R - 1) || (j == C - 1))
        explore_neighbours(i,j)
    }
  
  for(i = 0; i < R;i++)
    for(j = 0; j < C;j++)
      if(board[i][j] == 'W')
        board[i][j] = 'O'
      else
        board[i][j] = 'X'

  console.log(board)

  function explore_neighbours(r,c) {
    if(r < 0 || c < 0 || r >= R || c >= C || board[r][c] == 'X' || board[r][c] == 'W')
      return 

    if(board[r][c] == 'O')
      board[r][c] = 'W'

    explore_neighbours(r - 1,c)
    explore_neighbours(r + 1,c)
    explore_neighbours(r,c - 1)
    explore_neighbours(r,c + 1)

  }  
};

console.log(solve(
  [ ["O","X","X","X","O"],
    ["O","O","O","X","O"],
    ["X","O","X","O","X"],
    ["O","X","O","X","X"],
    ["X","X","O","X","O"]]
))

/* 
    ["O","X","X","X","X"],
    ["O","O","O","X","X"],
    ["X","O","X","O","X"],
    ["O","X","O","O","O"],
    ["X","X","O","X","O"]]

*/
