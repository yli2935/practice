<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-22 17:35:11
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


<a href="https://leetcode.com/problems/rotate-array/description/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums = [1,2,3,4,5,6,7], k = 3

>       Output: [5,6,7,1,2,3,4]

>       Explanation:
        rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]
        
> 示例 2：

>       Input: nums = [-1,-100,3,99], k = 2

>       Output: [3,99,-1,-100]
>       Explanation:
        rotate 1 steps to the right: [99,-1,-100,3]
        rotate 2 steps to the right: [3,99,-1,-100]


<br/>



## Java代码
```
    public void rotate(int[] nums, int k) {
        k%= nums.length;
        reverse(nums,0,nums.length-1);
        reverse(nums,0,k - 1);
        reverse(nums,k,nums.length-1);
        
    }
    
    public void reverse(int[] nums,int start,int end){
        while(end>start){
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

```
## 总结
>  Eg.[1,2,3,4,5,6,7]
>  先把整个数组反转[7,6,5,4,3,2,1]
>  然后把0 -> k-1反转[5,6,7,4,3,2,1]
>  然后把k -> end反转[5,6,7,1,2,3,4]
>  如果不考虑时间复杂度，可以两层循环来做
## Java代码（循环）
```
    public void rotate(int[] nums, int k) {
        k%= nums.length;
        for(int i = 0; i<k;i++){
            int temp = nums[nums.length -1];
            for(int j = nums.length -2;j>=0;j--){
                nums[j+1] = nums[j];
            }
            
            nums[0] = temp;
        }
        
    }

```



