<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-13 19:28:03
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

<a href="https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/" target="_blank">Leetcode Link</a>
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


        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        if (left>=0 && left < nums.length && nums[left] == target) res[0] = left;

        left = 0;
        right = nums.length - 1;
        while(left <= right){
           int mid = left + (right - left) / 2;
            if (nums[mid] > target) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }

        }
        if (right>=0 && right < nums.length && nums[right] == target)
            res[1] = right;

        return res;

        
    }
}

```
## Java代码(pos)
```
    public static int binarySearchLower(int[] nums,int target){
        int left = 0;
        int right = nums.length - 1;
        int pos = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] == target){
                pos = mid;
                right = mid-1;
            }else if(nums[mid] > target){
                right = mid-1;
            } else{
                left = mid + 1;
            }
        }
        return pos;
    }
    public static int binarySearchHigher(int[] nums,int target){
        int left = 0;
        int right = nums.length - 1;
        int pos = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] == target){
                pos = mid;
                left = mid+1;
            }else if(nums[mid] > target){
                right = mid-1;
            } else{
                left = mid + 1;
            }
        }
        return pos;
    }
```

## 总结
> Binary search variation。分别找到target出现的第一次和以后一次。有如下几个点需要注意
> 1. 注意边界，左闭右闭，所以while循环是<=。
> 2. 同样因为是左闭右闭，left是0，right是nums.length - 1，所以两边都可以达到，在更新left和right的时候需要为left = middle + 1， right = middle - 1
> 3. 如果用第一种方法，因为没有pos值记录targer的位置，所以如果数组中不存在target，就会导致数组越界。在循环结束判定nums[left] == target或者nums[right] == target的时候就会报错，所以在这之前需要判一下left，right的位置
> 4. 为了解决3的问题，可以引入一个pos值，在每次nums[mid] == target的时候除了移动left，right指针之外，还需要记录当前mid的位置，例如，当在寻找左边界的时候，每次nums[mid] == target的时候，right = mid-1，这样就可以向左边压缩而寻找左边界，这时还需要记录mid， pos = mid，在循环进行的过程中，如果遇到了连续的target，pos的值也会持续向左移动，从而找到左边界。




