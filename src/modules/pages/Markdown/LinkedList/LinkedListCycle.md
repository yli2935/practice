<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-27 15:59:34
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle in the linked list. Otherwise, return false.

<a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: head = [3,2,0,-4], pos = 1

>       Output: true

>       // Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

> 示例 2：

>       Input: head = [1,2], pos = 0

>       Output: true

>       // Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

<br/>

## Java代码
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head == null || head.next == null) return false;
        ListNode slow = head;
        ListNode fast = head;

        while(true){
            if(fast == null || fast.next == null) return false;

            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow) return true;
        }
        
    }
}

```
## 总结
> 由于单链表没有反向指针，因此就需要将链表分为左右两部分进行比较。找中点可以用快满指针，找到之后翻转右边一半的链表，这时就可以进行一对一比较了


<br/>
## Advanced
Given a linked list, return the node where the cycle begins. If there is no cycle, returnnull.

<a href="https://leetcode.com/problems/linked-list-cycle-ii/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: head = [3,2,0,-4], pos = 1

>       Output: tail connects to node index 1

>       // Explanation: There is a cycle in the linked list, where tail connects to the second node.

> 示例 2：

>       Input: head = [1,2], pos = 0

>       Output: tail connects to node index 0

>       // Explanation: There is a cycle in the linked list, where tail connects to the first node.

<br/>

## Java代码
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
         if (head == null || head.next == null) return null;
        ListNode slow = head;
        ListNode fast = head;
        while (slow != null && fast != null) {
            slow = slow.next;
            if (fast.next == null) return null;
            fast = fast.next.next;
            if (slow == fast) break;
        }
        slow = head;
        if (fast != null) {
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
        return null;
    }
}

```
## 总结
> 可以先判断Linked List是否有Cycle，利用two pointers可以很快得到。接下来就要分析，快慢指针第一次相遇时，位置、步数和环的关系。

>        a          b
>     A ------ B --------+
>              |         |
>            c |         |
>              +-------- C

>    * A: 起始点
>    * B: Cycle Begins
>    * C: 1st 快慢指针相遇点


>    * A->B: a
>    * B->C: b
>    * C->B: c
>    * 环的长度 (b+c) 为 R

第一次相遇时，慢指针所走步数为
a + b
快指针走的步数为
a + b + nR
我们知道快指针是慢指针速度的2倍，因此
2(a + b) = a + b + nR
那么
a + b = nR
同时
b + c = R
所以
a = (n - 1)R + c;
也就是说，从A点和C点同时出发，以相同的速度前进，那么下一次相遇的位置将是B。