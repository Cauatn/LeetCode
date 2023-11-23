/**
 * @param {number[][]} grid
 * @return {number}
*/
var maxAreaOfIsland = function(grid) {
    R = grid.length
    C = grid[0].length
    count = 0
    maxCount = 0

    for(i = 0; i < R;i++)
        for(j=0; j < C;j++)
            if(grid[i][j] == 1) {
                explore_island(i,j)
                if(maxCount < count)
                    maxCount = count
                count = 0
            }

   return maxCount > count ? maxCount : count

    function explore_island(r,c) {

        if(r < 0 || c < 0 || r >= R || c >= C || grid[r][c] == 0 || grid[r][c] == 9)
            return

        grid[r][c] = 9

        explore_island(r - 1, c)
        explore_island(r + 1, c)
        explore_island(r , c - 1)
        explore_island(r, c + 1)
        count += 1
    }
                
};
