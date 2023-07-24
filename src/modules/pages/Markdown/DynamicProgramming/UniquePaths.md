<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-24 17:53:25
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.


Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

<a href="https://leetcode.com/problems/unique-paths/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: m = 3, n = 7

>       Output: 28



> 示例 2：

>       Input: m = 3, n = 2

>       Output: 3

>       Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

<br/>

## Java代码
```
    public int uniquePaths(int m, int n) {
        if(m<=0 || n<= 0){
            return 0;
        }
        int[][] dp = new int[m][n];

        for(int i = 0;i<m;i++){
            dp[i][0] = 1;
        }
        for(int i = 0;i<n;i++){
            dp[0][i] = 1;
        }

        for(int i =1;i<m;i++){
            for(int j =1;j<n;j++){
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        return dp[m-1][n-1];
        
    }
```
## 总结
> 动态规划，一共三个步骤，第一步定义数组（一维或者二维）存放状态，第二步，找出每一步之间的关系，第三步，确定初始值。

> 第一步：定义数组
> 一共m*n的网格，每格代表有多少条路可以到这个格子，定义二维数组。dp[m][n]

> 第二步：找出每一步之间的关系
> 只有两种可能到达[i,j]，从左边来或者从上边来。这样到达[i,j]的路径就是[i-1,j]和[i,j-1]的和。dp[i][j] = dp[i-1,j] + dp[i,j-1]

> 第三步：找出初始条件
> 因为只能往下和右走，这里数组中的值是到达该位置的路径数，而最上排只能是从左边来，而最左列是能是从上边来，所以最左列和最上排的值为1。

> 最终返回dp[m-1][n-1]
