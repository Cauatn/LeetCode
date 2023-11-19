/* 
  Solução mais eficiente
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  R = grid.length
  C = grid[0].length
  count = 0

  for(i = 0; i < R;i++)
    for(j = 0; j < C;j++)
      if(grid[i][j] == '1') {
        count++
        explore_neighbours(i,j)
      } 


  function explore_neighbours(r,c) {
    if(r < 0 || c < 0 || r >= R || c >= C || grid[r][c] == '0')
      return 
      
    grid[r][c] = '0'

    explore_neighbours(r - 1,c)
    explore_neighbours(r + 1,c)
    explore_neighbours(r,c - 1)
    explore_neighbours(r,c + 1)

  }    
      

  return count
}



console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "0", "1"],
  ["1", "1", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
]))
