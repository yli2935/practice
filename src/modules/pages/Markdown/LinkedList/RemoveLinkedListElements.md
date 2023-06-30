<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-26 13:20:57
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

<a href="https://leetcode.com/problems/remove-linked-list-elements/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: head = [1,2,6,3,4,5,6], val = 6

>       Output: [1,2,3,4,5]

>       // 

> 示例 2：

>       Input: head = [7,7,7,7], val = 7

>       Output: []

>       // 

<br/>

## Java代码
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        if (head == null) {
            return null;
        }

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode result = dummy;

        while(dummy.next != null){
            if(dummy.next.val == val){
                dummy.next = dummy.next.next;
            }else {
                // 这里要注意，dummy = dummy.next;必须在else里面，不然会跳过连续的val值，例如前面例子中[7,7,7,7]就只会删除两个7
                dummy = dummy.next;
            }
             
        }
        return result.next;
        
    }
}

```
## 总结
> In this solution, we create a dummy node and set dummy.next = head. This node helps us keep track of the new head in case the existing head has to be removed.
Since we are not using a previous pointer, we will set the current (cur) node to the dummy node.
The list on the left side, including the cur node, has been solved. We now need to solve the list on the right side of the cur node.

We will check the following two conditions while iterating over the list:

* If cur.next.val == val, then we will remove the cur.next node by setting cur.next = cur.next.next. Please note, we will not move the current pointer in this step as new cur.next has not be validated yet.
* If cur.next.val != val, then we can safely move the cur pointer to next node, as next node is a valid node. cur = cur.next.
Time Complexity: O(N) --> Each Node in the list is visited once.
Space Complexity: O(1) --> Contant space is used for this solution
Where, N = Length of the input list.


