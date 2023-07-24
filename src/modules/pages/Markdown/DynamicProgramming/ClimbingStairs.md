<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-24 16:41:09
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


<a href="https://leetcode.com/problems/climbing-stairs/description/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: n = 2

>       Output: 2

>        Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

> 示例 2：

>       Input: n = 3

>       Output: 3

>       // Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

<br/>

## Java代码
```
    public int climbStairs(int n) {
        if(n==1) return 1;
        if(n==2) return 2;
        int[] result = new int[n];
        result[0] = 1;
        result[1] = 2;
        for(int i = 2;i<n;i++){
            result[i] =  result[i-1] + result[i-2];
        }
        return result[n-1];

        
    }
```
## 总结
> 动态规划，一共三个步骤，第一步定义数组（一维或者二维）存放状态，第二步，找出每一步之间的关系，第三步，确定初始值。

> 第一步：定义数组
> 一共n阶台阶，每一阶代表数组中的一个元素，存放每一阶的个数。dp[n]

> 第二步：找出每一步之间的关系
> 一共n阶台阶，在最后一步的时候只有两种方法，第一种从n-1阶上来，第二种从n-2上来，因为需要所有的跳法，所以dp[n] = dp[n-1] + dp[n-2]

> 第三步：找出初始条件
> 第一层只有一种可能dp[0] = 1，第二层有两种可能dp[1] = 2，从第三层开始就可以使用dp[2] = dp[1] + dp[0]

> 最终返回dp[n-1]
