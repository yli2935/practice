<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-25 17:04:03
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

<a href="https://leetcode.com/problems/merge-two-sorted-lists/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: list1 = [1,2,4], list2 = [1,3,4]

>       Output: [1,1,2,3,4,4]

>       // 

> 示例 2：

>       Input: list1 = [], list2 = [0]

>       Output: [0]

>       // 

<br/>

## Java代码
```
    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode p = dummy;
        while(l1 != null || l2 != null){
            if(l2 == null){
                p.next = l1;
                break;
            }
            if(l1 == null){
                p.next = l2;
                break;
            }
            if(l1.val < l2.val){
                p.next = l1;
                l1 = l1.next;
            } else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next;
        }
        return dummy.next;
    }

```
## 总结
> 先开一个dummy node用来保存头节点，然后while循环，当两个list有一个为空的时候停止。在循环中比较两个节点的大小，然后将小的放到dummy节点后面，然后移动两个节点。当有一个节点为空的时候，把不为空的list接到结果链表后面。然后返回dummy节点



