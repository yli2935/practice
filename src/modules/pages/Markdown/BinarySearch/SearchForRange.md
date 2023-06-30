<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-29 19:29:32
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given an array of integersnumssorted in ascending order, find the starting and ending position of a giventargetvalue.


<a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums = [5,7,7,8,8,10], target = 8

>       Output: [3,4]
        
> 示例 2：

>       Input: nums = [5,7,7,8,8,10], target = 6

>       Output: [-1,-1]

> 示例 3：

>       Input: nums = [], target = 0

>       Output: [-1,-1]


<br/>



## Java代码
```
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] res = new int[] {-1, -1};
        if (nums == null || nums.length == 0) return res;

        int left = 0;
        int right = nums.length - 1;
        // 在这里寻找左边界，所以如果当middle落在target范围的时候，移动右节点，这样最终left会落到target的最左边
        while(left < right){
            int middle = left + (right - left)/2;
            if(nums[middle] < target) left = middle + 1;
            else right = middle - 1;
        }
        if (nums[left] == target) res[0] = left;
        // 重制之后寻找右边界，这里也是一样，当middle落在target范围内的时候移动左边，这样right就会停留在target范围右边
        left = 0;
        right = nums.length - 1;
        while(left < right){
            int middle = left + (right - left)/2;
            if(nums[middle] > target) right = middle - 1;
            else left = middle;

        }
        if (nums[right] == target)
            res[1] = right;

        return res;

        
    }
}

```
## 总结
>   左右范围分开来找，




