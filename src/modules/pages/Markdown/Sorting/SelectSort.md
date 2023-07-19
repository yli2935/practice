<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-19 14:12:54
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
    public static int[] selectionSort(int[] arr) {
        int min = 0;
        for(int i = 0;i< arr.length-1;i++){
            min = i;
            for(int j = i+1;j< arr.length;j++){
                if(arr[j]<arr[min]){
                    min = j;
                }
            }
            if(min != i){
                int temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
        return arr;
    }

```
## 总结
>   选择排序，找到数组最小元素的index，然后交换最小元素index和第一个元素的位置。外层循环控制交换的数组第一个位置。内层循环找到从i + 1到结束的最小值的index，然后交换i和min的位置




