<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-30 15:03:55
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


<a href="https://leetcode.com/problems/jump-game/description/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums = [2,3,1,1,4]

>       Output: true

>       Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

> 示例 2：

>       Input: nums = [3,2,1,0,4]

>       Output: false

>       Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.




<br/>



## Java代码
```
    public boolean canJump(int[] nums) {
        int reachable = 0;
        for(int i = 0;i<nums.length;i++){
           if(i > reachable) return false;
           reachable = Math.max(reachable,i+nums[i]);
        }
        return true;
    }

```
## 总结
>   贪心算法，设置一个reachable变量，代表可以到达的最大index。每次循环更新reachable变量，变为i+nums[i]，当前位置再加可以跳跃的数字，再和reachable做比较取大。如果发现当前的index比reachable还大，表示到达不了这个index，因为是以数组长度遍历，所以也意味着到达不了最后一个元素。

> Eg：nums = [2,3,1,1,4]
i = 0; reachable = 2;
i = 1; reachable = max((1 + 3),2) = 4;
i = 2; reachable = max((2 + 1),4) = 4;
i = 3; reachable = max((3 + 1),4) = 4;
i = 4; reachable = max((4 + 4),4) = 8;
for loop end, return true

> Eg：nums = [3,2,1,0,4]
i = 0; reachable = 3;
i = 1; reachable = max((1 + 2),3) = 3;
i = 2; reachable = max((2 + 1),3) = 3;
i = 3; reachable = max((3 + 0),3) = 3;
i = 4; reachable = 3 < 4 = i, return false 




    