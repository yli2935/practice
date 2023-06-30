/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-27 19:07:18
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-29 15:06:34
 * @FilePath: /practice/src/routes/LinkedListRoutes.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from 'react';

// project import
import Loadable from '../modules/components/Loadable';
const Code = Loadable(lazy(() => import('../modules/pages/Code')));

const LinkedListRoutes = [
    {
      path: 'linkedListIntro',
      element: <Code path='./Markdown/LinkedList/LinkedList.md' title = "Intro to Linked List" />
    },
    {
      path: 'ReverseLinkedList',
      element: <Code path='./Markdown/LinkedList/ReverseLinkedList.md' title = "Reverse Linked List" difficulty = {2}/>
    },
    {
      path: 'MiddleOfTheLinkedList',
      element: <Code path='./Markdown/LinkedList/MiddleOfTheLinkedList.md' title = "Middle Of The LinkedList" difficulty = {1}/>
    },
    {
      path: 'linkedListPalindrome',
      element: <Code path='./Markdown/LinkedList/LinkedListPalindrome.md' title = "Linked List Palindrome" difficulty = {3}/>
    },
    {
        path: 'MergeTwoSortedLists',
        element: <Code path='./Markdown/LinkedList/MergeTwoSortedLists.md' title = "Merge Two Sorted Lists" difficulty = {2}/>
    },

    {
      path: 'RemoveLinkedListElements',
      element: <Code path='./Markdown/LinkedList/RemoveLinkedListElements.md' title = "Remove Linked List Elements" difficulty = {2}/>
    },
    {
      path: 'MoveNNodeFromEnd',
      element: <Code path='./Markdown/LinkedList/MoveNNodeFromEnd.md' title = "Move Nth Node From End" difficulty = {3}/>
    },
    {
      path: 'LinkedListCycle',
      element: <Code path='./Markdown/LinkedList/LinkedListCycle.md' title = "Linked List Cycle" difficulty = {1}/>
    },
    {
      path: 'AddTwoNumber',
      element: <Code path='./Markdown/LinkedList/AddTwoNumber.md' title = "Add Two Number" difficulty = {2}/>
    },

  ]

  export default LinkedListRoutes;
