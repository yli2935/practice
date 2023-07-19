<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-19 14:55:17
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
    public static int[] insertionSort(int[] arr) {
        for(int i = 1;i < arr.length;i++){
            int val = arr[i];
            int pos = i;
            while(pos>0 && val < arr[pos - 1]){
                arr[pos] = arr[pos-1];
                pos--;
            }
            arr[pos] = val;
        }
        return arr;

    }

```
## 总结
>   插入排序，类似抽扑克牌排序，外层循环从1开始，因为抽第0张牌的时候不需要排序，从1开始的时候先保存抽到的元素，然后比较抽到的元素和i-1的大小，如果抽到的元素小，那么把i - 1的值往后移，给抽到的元素让位，循环执行上面的逻辑，直到遇到抽到的元素的值比pos - 1大，那么pos就是抽到的元素应该在的位置，将arr[pos] = val




