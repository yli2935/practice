/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-29 14:54:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-09-13 19:29:14
 * @FilePath: /practice/src/routes/BinarySearchRoutes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from 'react';

// project import
import Loadable from '../modules/components/Loadable';
const Code = Loadable(lazy(() => import('../modules/pages/Code')));

const BinarySeearchRoutes = [
    {
      path: 'BinarySearchIntro',
      element: <Code path='./Markdown/BinarySearch/BinarySearch.md' title = "Intro to Linked List" />
    },
    {
      path: 'SearchRotatedSortedArray',
      element: <Code path='./Markdown/BinarySearch/SearchRotatedSortedArray.md' title = "Search in Rotated Sorted Array" difficulty = {3}/>
    },
    {
        path: 'FindMinimumRotatedSortedArray',
        element: <Code path='./Markdown/BinarySearch/FindMinimumRotatedSortedArray.md' title = "Find Minimum in Rotated Sorted Array" difficulty = {4}/>
    },
    {
        path: 'FindPeakElements',
        element: <Code path='./Markdown/BinarySearch/FindPeakElements.md' title = "Find Peak Elements" difficulty = {3}/>
    },
    {
        path: 'FirstBadVersion',
        element: <Code path='./Markdown/BinarySearch/FirstBadVersion.md' title = "First Bad Version" difficulty = {1}/>
    },
    {
        path: 'searchRange',
        element: <Code path='./Markdown/BinarySearch/SearchForRange.md' title = "Search For Range" difficulty = {2}/>
    },
    {
        path: 'SearchInsertPosition',
        element: <Code path='./Markdown/BinarySearch/SearchInsertPosition.md' title = "Search Insert Position" difficulty = {2}/>
    },
    {
        path: 'FindFirstAndLastPosition',
        element: <Code path='./Markdown/BinarySearch/FindFistAndLastPosition.md' title = "Find First And Last Position" difficulty = {3}/>
    },
    
  ]

  export default BinarySeearchRoutes;