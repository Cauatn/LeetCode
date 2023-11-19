/*
  minha solução inicial
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  R = grid.length
  C = grid[0].length

  sr = 0
  sc = 0

  rq = []
  rc = []

  count_island = 0

  dr = [-1, 1, 0, 0]
  dc = [0, 0, -1, 1]

  visited = Array(R).fill(undefined)
  for (i in visited) visited[i] = Array(C).fill(false)

  solve()

  return count_island

  function solve() {

    for(row = 0;row < R;row++) {

      for(column = 0;column < C;column++) {

        if(grid[row][column] == '1' && !(visited[row][column])) {
          console.log(row,column)
          rq.unshift(row)
          rc.unshift(column)
          visited[row][column] = true

          while(rq.length > 0) {
            r = rq.pop()
            c = rc.pop()
      
            explore_neighbours(r,c)
          }
          count_island++
        }
      }
    }
    
  }

  function explore_neighbours(r,c) {
    for(i =0; i < 4;i++) {
      rr = r + dr[i]
      cc = c + dc[i]

      if(rr < 0 || cc < 0) continue
      if(rr >= R || cc >= C) continue

      if(visited[rr][cc]) continue
      if(grid[rr][cc] === '0') continue

      rq.unshift(rr)
      rc.unshift(cc)
      visited[rr][cc] = true
    }
  }
}
