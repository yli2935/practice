<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-25 15:47:02
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

<a href="https://leetcode.com/problems/middle-of-the-linked-list/" target="_blank">Leetcode Link</a>
<br/>
<br/>


> 示例 1：

>       Input: head = [1,2,3,4,5]

>       Output: [3,4,5]

>       // Explanation: The middle node of the list is node 3.

<br/>


> 示例 1：

>       Input: head = [1,2,3,4,5,6]

>       Output: [4,5,6]

>       // Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

<br/>

## Java代码
```
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

```
## 总结
> 使用快慢指针方法，快指针一次走两步，慢指针一次走一步。这样当快指针到尾部的时候，慢指针正好在中间



