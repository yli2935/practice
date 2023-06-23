<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-23 14:05:40
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-23 14:39:33
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/ReverseLinkedList.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
给你单链表的头节点`head` ，请你反转链表，并返回反转后的链表。
示例 1：
![原题.png](https://upload-images.jianshu.io/upload_images/14626984-b7facbf22abbcd83.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>输入：head = [1,2,3,4,5]，输出：[5,4,3,2,1]


<br/>
## Java代码（迭代）

```
class Solution {
    public ListNode reverseList(ListNode head) {
         //保存当前节点的前置节点
         ListNode prev = null;
         //保存当前节点的后一个节点
         ListNode next;
         //当前节点为current
         ListNode current = head;
         while(current != null){
             //先保存当前节点的下一个节点
             next = current.next;
             //让current的next指针指向上一个节点
             current.next = prev;
             //在开始下一次循环前将prev向前移动一步
             prev = current;
             //在开始下一次循环前将当前节点向前移动一步
             current = next;

          }
         //因为移动到current为null时循环停止，所以要返回prev
         return prev;
    }
}
```
<br/>
## Java代码（递归）
```
//如上图，想将链表反转，那么我们需要将5节点的next指向4，同时切断4的next指向5
class Solution {
    public ListNode reverseList(ListNode head) {
          if(head == null || head.next == null){
               //当head.next为null当前head为5，返回5节点
               return head;
          }
          //第一次执行到这，说明head.next不为空，那么当前head为4，reverseList返回的为5号节点
          ListNode new_head = reverseList(head.next);

          //四号节点next的next为5号节点的next，将5号节点的next指向四号节点
          head.next.next = head;
          //将四号节点的next置为null
          head.next = null;
          //在节点5时返回第五号节点，之后每次递归都会返回new_head都会是第五号节点也就是新的头节点
          return new_head;
          
    }
}
```

