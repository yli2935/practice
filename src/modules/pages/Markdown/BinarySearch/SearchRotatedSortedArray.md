<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-29 15:40:30
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

<a href="https://leetcode.com/problems/search-in-rotated-sorted-array/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: nums = [4,5,6,7,0,1,2], target = 0

>       Output: 4

>       

> 示例 2：

>       Input: nums = [4,5,6,7,0,1,2], target = 3

>       Output: -1

>       // 

> 示例 3：

>       Input: nums = [1], target = 0

>       Output: -1

>       // 
<br/>



## Java代码
```
class Solution {
    public int search(int[] nums, int target) {
        if(nums == null || nums.length == 0) return -1;

        int left = 0;
        int right = nums.length -1;
        while(left <= right){
            int middle = left + (right - left )/2;
            if(nums[middle] == target) return middle;
            // 先根据nums[mid] 与 nums[right] 的大小关系，先判断中点mid相对pivot的位置
            if(nums[middle] > nums[right]){
                // 判断target的位置
                // 如果nums[left] <= target && nums[middle] > target 那么说明target在前面单调的位置，就可以直接用BinarySearch
                if(nums[left] <= target && nums[middle] > target){
                    right = middle - 1;
                } else{
                    // 如果target在转换的位置，就将左边节点设置为middle
                    left = middle + 1;
                }
            } else{
                if(nums[middle] < target && nums[right] >= target){
                    left = middle + 1;
                }else{
                    right = middle - 1;
                }
            }
        }
        return -1;
        
    }
}

```
## 总结
> Binary search variation.
因为有pivot，rotate过的sorted array无法直接用标准binary search，在判断和修改搜索区间时需要做一些改变。



