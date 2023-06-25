<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-23 14:05:40
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-25 17:50:53
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/ReverseLinkedList.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
给你单链表的头节点`head` ，请你反转链表，并返回反转后的链表。

<a href="https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: 1->1->2

>       Output: 1->2

>       // 

> 示例 2：

>       Input: 1->1->2->3->3

>       Output: 1->2->3

>       // 
<br/>
## Java代码（迭代）

```
public ListNode deleteDuplicates(ListNode head) {
    ListNode current = head;
    while (current != null && current.next != null) {
        if (current.next.val == current.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
```
<br/>


