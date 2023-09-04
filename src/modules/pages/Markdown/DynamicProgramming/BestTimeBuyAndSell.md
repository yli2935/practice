<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-25 15:51:10
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

<a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: prices = [7,1,5,3,6,4]

>       Output: 5

>        Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

> 示例 2：

>       Input: prices = [7,6,4,3,1]

>       Output: 0

>       Explanation: In this case, no transactions are done and the max profit = 0.

<br/>

## Java代码
```
    public int maxProfit(int[] prices) {
        int min = prices[0];
        int maxProfile = 0;
        for(int i = 0;i<prices.length;i++){
            if(prices[i] < min){
                min = prices[i];
            }
            maxProfile = Math.max(maxProfile,prices[i] - min);

        }
        return maxProfile;
        
        
        
    }
```
## 总结
> 记录之前遇到过的最小值，然后将当前数值和之前遇到的最小值相减，得到的就是最大收益。
