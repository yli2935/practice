<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-25 17:25:20
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given a singly linked list, determine if it is a palindrome.

<a href="https://leetcode.com/problems/palindrome-linked-list/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: head = [1,2,2,1]

>       Output: true

>       // 

> 示例 2：

>       Input: head = [1,2]

>       Output: false

>       // 

<br/>

## Java代码
```
 /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode fast, slow;
        fast = head;
        slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        if (fast != null) {
            slow = slow.next;
        }
        slow = reverse(slow);
        fast = head;

        while (fast != null && slow != null) {
            if (fast.val != slow.val) {
                return false;
            }
            fast = fast.next;
            slow = slow.next;
        }
        return true;
    }

    ListNode reverse(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode tmpNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmpNext;
        }
        return prev;
    }
}

```
## 总结
> 由于单链表没有反向指针，因此就需要将链表分为左右两部分进行比较。找中点可以用快满指针，找到之后翻转右边一半的链表，这时就可以进行一对一比较了



