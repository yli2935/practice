<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-29 15:51:10
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

<a href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: nums = [3,4,5,1,2]

>       Output: 1
        
>       // Explanation: The original array was [1,2,3,4,5] rotated 3 times.

> 示例 2：

>       Input: nums = [4,5,6,7,0,1,2]

>       Output: 0

>       // Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

> 示例 3：

>       Input: nums = [11,13,15,17]

>       Output: 11

>       // Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
<br/>



## Java代码
```
class Solution {
    public int findMin(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        int left = 0;
        int right = nums.length - 1;
        if (nums[right] > nums[0]) {
            return nums[0];
        }
        while(left <= right){
            int middle = left + (right -left)/2;
            // 如果middle的值大于middle + 1， 那么middle正好处于交界，返回middle + 1
            if(nums[middle] > nums[middle + 1]) return nums[middle + 1];
            // 同理， 如果middle小于middle - 1，也是处于边界，返回middle
            if(nums[middle] < nums[middle -1]) return nums[middle];
            // 如果middle大于第一个元素，那么现在0 -> middle处于单调，最小的值在后半边，所以移动left
            if(nums[middle] > nums[0]) left = middle + 1;
            // 如果如果middle小等于第一个元素， 最小元素在前半部分，移动right
            else right = middle -1;
        }
        return -1;
        
    }
}

```
## 总结
> Binary search variation.最小值一定出现在交界。




