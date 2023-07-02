/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-29 14:54:01
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-02 17:09:37
 * @FilePath: /practice/src/routes/BinarySearchRoutes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from 'react';

// project import
import Loadable from '../modules/components/Loadable';
const Code = Loadable(lazy(() => import('../modules/pages/Code')));

const StackRoutes = [
    {
      path: 'ValidParentheses',
      element: <Code path='./Markdown/Stack/ValidParentheses.md' title = "Valid Parentheses" difficulty = {2}/>
    },
   
    
  ]

  export default StackRoutes;