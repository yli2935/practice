<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-29 16:33:06
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.



<a href="https://leetcode.com/problems/find-peak-element/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: nums = [3,4,5,1,2]

>       Output: 1
        
>       // Explanation: The original array was [1,2,3,4,5] rotated 3 times.

> 示例 2：

>       Input: nums = [1,2,3,1]

>       Output: 2

>       // Explanation: 3 is a peak element and your function should return the index number 2.

> 示例 3：

>       Input: nums = [1,2,1,3,5,6,4]

>       Output: 5

>       // Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
<br/>



## Java代码
```
class Solution {
    public int findPeakElement(int[] nums) {
        if(nums == null) return -1;
        if(nums.length == 1) return 0;
        int left = 0;
        int right = nums.length - 1;
        while(left < right){
            int middle = left + (right - left)/2;
            // 本来想这里可以直接return middle。但是注意到数组不是排好序的，所以当出现这种情况，将将右节点变为middle。但是最终返回right
            if(nums[middle] > nums[middle + 1]) right = middle;
            else left = middle + 1;

        }
        return right;
        
    }
}

```
## 总结
> Binary search variation.peak一定出现在middle > middle + 1的位置。middle就是peak




