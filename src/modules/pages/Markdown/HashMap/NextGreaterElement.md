<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-23 17:22:59
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

<a href="https://leetcode.com/problems/next-greater-element-i/description/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: nums1 = [4,1,2], nums2 = [1,3,4,2]

>       Output: [-1,3,-1]
>       Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
        
> 示例 2：

>       Input: nums1 = [2,4], nums2 = [1,2,3,4]

>      Output: [3,-1]




<br/>



## Java代码
```
public int[] nextGreaterElement(int[] nums1, int[] nums2) {
     HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
     Stack<Integer> stack = new Stack();
     int[] result = new int[nums1.length];
     for(int num : nums2){
         while(!stack.isEmpty() && num > stack.peek()){
             map.put(stack.pop(),num);
         }
         stack.push(num);
     }
     for(int i = 0;i<nums1.length;i++){
         if(map.containsKey(nums1[i])){
             result[i] = map.get(nums1[i]);
         }else{
             result[i] = -1;
         }
     }
     return result;


    }

```
## 总结
>   需要同时用到hashmap和stack，第一次循环是建立一张表，里面存放了nums2数组所有有下一个大于本元素的元素。方法是先把元素push到栈里，下一次循环的时候，如果当前元素比栈中元素大，那么栈中元素的下一个比他大的元素就是当前元素。将这一对放入hashMap，并把当前元素push到栈中。

> Eg：nums1 = [4,1,2], nums2 = [1,3,4,2]
stack:[1]   hashmap:[()]
stack:[3]   hashmap:[(1,3)]
stack:[4]   hashmap:[(1,3),(3,4)]
stack:[4,2]   hashmap:[(1,3),(3,4)]

> 然后第二次循环，如果nums1中的值不存在在hashmap的key，那么说明当前元素后面没有比此元素大的，赋值为-1





    