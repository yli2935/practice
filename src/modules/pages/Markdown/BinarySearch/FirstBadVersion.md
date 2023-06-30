<!--
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-24 15:13:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-29 18:09:10
 * @FilePath: /practie/practice/src/modules/pages/LinkedList/Markdown/MergeTwoSortedLists.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 题目详情
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you havenversions[1, 2, ..., n]and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an APIbool isBadVersion(version)which will return whetherversionis bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.



<a href="https://leetcode.com/problems/first-bad-version/" target="_blank">Leetcode Link</a>
<br/>
<br/>
> 示例 1：

>       Input: n = 5, bad = 4

>       Output: 4
        
>       //  Explanation:
>            call isBadVersion(3) -> false
>            call isBadVersion(5) -> true
>            call isBadVersion(4) -> true
>            Then 4 is the first bad version.


<br/>



## Java代码
```
public class FirstBadVersion extends VersionControl{
    public int firstBadVersion(int n) {
        int low= 1;
        int high = n;
        while(low <= high){
            int middle = low + (high - low)/2;
            if(isBadVersion(middle)){
                high = middle - 1;
            } else{
                low = middle + 1;
            }


        }
        return low;

    }
}

class VersionControl{
    public boolean isBadVersion(int num){
        int bad = 10;
        return num == bad;
    }

}

```
## 总结
> 如果不是bad version那么左边节点变为middle，如果是bad version右边节点变为middle




