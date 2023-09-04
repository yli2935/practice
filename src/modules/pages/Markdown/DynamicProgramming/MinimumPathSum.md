<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-25 13:17:24
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.


Note: You can only move either down or right at any point in time.

<a href="https://leetcode.com/problems/minimum-path-sum/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: grid = [[1,3,1],[1,5,1],[4,2,1]]

>       Output: 7

>       Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.



> 示例 2：

>       Input: grid = [[1,2,3],[4,5,6]]

>       Output: 12



<br/>

## Java代码
```
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        if(m <=0 || n <= 0) return 0;
        int[][] dp = new int[m][n];
        dp[0][0] = grid[0][0];
        for(int i = 1;i< m ;i++){
            dp[i][0] = grid[i][0] + dp[i-1][0];
        }
        for(int i = 1;i< n ;i++){
            dp[0][i] = grid[0][i] + dp[0][i-1];
        }
        for(int i = 1;i<m;i++){
            for(int j = 1;j<n;j++){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
            }
        }
        return dp[m-1][n-1];
        
    }
```
## 总结
> 动态规划，一共三个步骤，第一步定义数组（一维或者二维）存放状态，第二步，找出每一步之间的关系，第三步，确定初始值。

> 第一步：定义数组
> 一共m*n的网格，每格代表到达这个格子的最小路程，定义二维数组。dp[m][n]

> 第二步：找出每一步之间的关系
> 只有两种可能到达[i,j]，从左边来或者从上边来。这样到达[i,j]的最短路程就是[i-1,j]和[i,j-1]路程中小的那一个再加上[i,j]的值。dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];

> 第三步：找出初始条件
> 因为只能往下和右走，而最上排只能是从左边来，而最左列是能是从上边来，所以最左边一列是上面格子的最短路径加上这个格子的数值，dp[i][0] = grid[i][0] + dp[i-1][0]。最上面格子同理，只能从左边来，所以是左边格子的最短路径加上这个格子的数值，dp[0][i] = grid[0][i] + dp[0][i-1]

> 最终返回dp[m-1][n-1]
