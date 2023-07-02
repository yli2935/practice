<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-30 14:57:02
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

<a href="https://leetcode.com/problems/search-insert-position/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums = [1,3,5,6], target = 5

>       Output: 2
        
> 示例 2：

>       Input: nums = [1,3,5,6], target = 2

>       Output: 1

> 示例 3：

>       Input: nums = [1,3,5,6], target = 7

>       Output: 4


<br/>



## Java代码
```
class Solution {
    public int searchInsert(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        // 在最后一次循环中，start等于en
        while(start <= end){
            int middle = (start + end)/2;
            if(nums[middle] == target) return middle;
            if(target < nums[middle]) end = middle -1;
            if(target > nums[middle]) start = middle+1;

        }
        return start;

    }
}

```
## 总结
>   




