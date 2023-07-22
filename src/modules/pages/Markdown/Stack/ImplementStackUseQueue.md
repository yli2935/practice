<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-22 17:45:33
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.

<a href="https://leetcode.com/problems/implement-stack-using-queues/" target="_blank">Leetcode Link</a>

<br/>
<br/>

<br/>



## Java代码
```
class MyStack {
    Queue<Integer> q1;
    public MyStack() {
        q1 = new LinkedList<>();
    }
    
    public void push(int x) {
        q1.add(x);
        for(int i=0; i<q1.size()-1; i++){
            q1.add(q1.remove());
        }
    }
    
    public int pop() {
        int removed = q1.remove();
        return removed;
    }
    
    public int top() {
        int peeked = q1.peek();
        return peeked;
    }
    
    public boolean empty() {
        return q1.isEmpty();
    }
}

```
## 总结
>   除了push方法外，其他的都一样。push方法重点在于每次把元素push之后需要把新元素放到queue的首位。每次新元素放进去的时候，除了最后一个新添加的元素位置不对之外其他都是对的，所以，循环队列中元素个数的次数，重新把元素push一遍，这样新元素就会在队列的首位。




