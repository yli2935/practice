/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-21 16:50:33
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-24 15:14:27
 * @FilePath: /practie/practice/src/routes/MainRoutes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from 'react';

// project import
import Loadable from '../modules/components/Loadable';
import MainLayout from '../modules/pages/MainLayout';

import ReverseLinkedList from '../modules/pages/LinkedList/Markdown/ReverseLinkedList.md'
// render - dashboard
const Code = Loadable(lazy(() => import('../modules/pages/Code')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/main',
    element: <MainLayout />,
    children: [
        {
          path: 'code',
          
          children: [
            {
              path: 'ReverseLinkedList',
              element: <Code path='./LinkedList/Markdown/ReverseLinkedList.md' title = "Reverse Linked List"/>
            },
            {
                path: 'MergeTwoSortedLists',
                element: <Code path='./LinkedList/Markdown/MergeTwoSortedLists.md' title = "Merge Two Sorted Lists"/>
            },
          ]
        },
    ]
};
export default MainRoutes;