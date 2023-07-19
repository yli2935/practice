<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-19 14:03:04
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.


<a href="https://leetcode.com/problems/sort-an-array/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums = [5,2,3,1]

>       Output: [1,2,3,5]
        
> 示例 2：

>       Input: nums = [5,1,1,2,0,0]

>       Output: [0,0,1,1,2,5]




<br/>



## Java代码
```
public static int[] bubbleSort(int[] arr) {
    for(int i = arr.length-1;i>0;i--){
        for(int j = 0;j<i;j++){
            if(arr[j] > arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;

}

```
## 总结
>   冒泡排序，把最大的放在数组的最后，内层循环每次都会从0开始，然后把最大的值放到数组的最后面。而外层循环控制最后位数




