<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-27 15:14:53
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given a linked list, remove the n-th node from the end of list and return its head.

<a href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/" target="_blank">Leetcode Link</a>
<br/>
<br/>


> 示例 1：

>       Input: head = [1,2,3,4,5], n = 2

>       Output: [1,2,3,5]

>       

> 示例 2：

>       Input: head = [1], n = 1

>       Output: []

>   

> 示例 3：

>       Input: head = [1,2], n = 1

>       Output: [1]

>   

<br/>

## Java代码
```
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode fast = dummy;
        ListNode slow = dummy;
        // 这里要注意fast node 要走n+1步，因为这样slow node才可以停在要删除的node前一个节点
        for(int i = 0;i<n+1;i++){
            fast = fast.next;

        }
        while(fast != null){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummy.next;

        
    }
}

```
## 总结
> 双指针，先让快指针走`n+1`步,然后再让快满指针同时前进，这样当快指针走到null的时候，慢指针走到要删除的指针的前一个。



