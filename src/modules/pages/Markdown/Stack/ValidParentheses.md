<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-30 17:37:49
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
Given a string containing just the characters'(',')','{','}','['and']', determine if the input string is valid.

<a href="https://leetcode.com/problems/search-insert-position/" target="_blank">Leetcode Link</a>

<br/>
<br/>
> 示例 1：

>       Input: "()"

>       Output: true
        
> 示例 2：

>       Input: "(]"

>       Output: false

> 示例 3：

>       Input: "()[]{}"

>       Output: true


<br/>



## Java代码
```
class Solution {
    public boolean isValid(String s) {
        if (s == null) {
            return false;
        }
        Stack < Character > stack = new Stack < Character > ();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (!stack.isEmpty() && match(stack.peek(), ch)) {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
        return stack.isEmpty();
    }
    boolean match(char ch1, char ch2) {
        return (ch1 == '(' && ch2 == ')') ||
            (ch1 == '[' && ch2 == ']') ||
            (ch1 == '{' && ch2 == '}');
    }
}

```
## 总结
>   这种先入后出的特性很适合用栈Stack，因此利用一个stack来记录之每个字符，遍历每个字符，如果下一个字符是可以closed栈顶字符的同类括号，则出栈；最终结果就是检测这个栈是否为空




