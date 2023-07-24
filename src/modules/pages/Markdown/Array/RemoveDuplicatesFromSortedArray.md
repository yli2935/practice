<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-23 13:47:20
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums = [1,1,2]

>       Output: 2, nums = [1,2,_]


        
> 示例 2：

>       Input: nums = [0,0,1,1,1,2,2,3,3,4]

>       Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
>       Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.



<br/>



## Java代码
```
class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0)
            return 0;
        int index = 0;
        for(int i = 1;i<nums.length ;i++){
            if(nums[i] != nums[index]){
                nums[index + 1] = nums[i];
                index++;
            }

        }
        return index + 1;
    }
}

```
## 总结
>  双指针，慢指针指向前面没有重复的末尾，快指针指向和慢指针值不同的地方。
>  Eg，nums = [0(index),0(i),1,1,1,2,2,3,3,4]
>  nums = [0(index),0,1(i),1,1,2,2,3,3,4]
>  nums = [0,1(index),1,1(i),1,2,2,3,3,4]
>  nums = [0,1(index),1,1,1(i),2,2,3,3,4]
>  nums = [0,1(index),1,1,1,2(i),2,3,3,4]
>  nums = [0,1,2(index),1,1,2,2(i),3,3,4]
>  nums = [0,1,2(index),1,1,2,2,3(i),3,4]
>  nums = [0,1,2,3(index),1,2,2,3,3(i),4]
>  nums = [0,1,2,3(index),1,2,2,3,3,4(i)]
>  nums = [0,1,2,3,4(index),2,2,3,3,4,(i)] end