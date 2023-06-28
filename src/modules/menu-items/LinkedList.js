/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-23 15:46:51
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-27 17:19:10
 * @FilePath: /practie/practice/src/modules/menu-items/LinkedList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const linkedList = {
  id: 'linkedList',
  title: 'Linked List',
  type: 'group',
  children: [
    {
      id: 'linkedList-intro',
      title: 'Intro to Linked List',
      type: 'item',
      url: '/main/code/linkedListIntro',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-LinkedListCycle',
      title: 'Linked List Cycle',
      type: 'item',
      url: '/main/code/LinkedListCycle',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-MiddleOfTheLinkedList',
      title: 'Middle Of The Linked List',
      type: 'item',
      url: '/main/code/MiddleOfTheLinkedList',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-MoveNNodeFromEnd',
      title: 'Move Nth Node From End',
      type: 'item',
      url: '/main/code/MoveNNodeFromEnd',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-AddTwoNumber',
      title: 'Add Two Number',
      type: 'item',
      url: '/main/code/AddTwoNumber',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-mergeTwoSortedLists',
      title: 'Merge Two Sorted Lists',
      type: 'item',
      url: '/main/code/MergeTwoSortedLists',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-RemoveLinkedListElements',
      title: 'Remove Elements',
      type: 'item',
      url: '/main/code/RemoveLinkedListElements',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-reverseLinkedList',
      title: 'Reverse Linked List',
      type: 'item',
      url: '/main/code/ReverseLinkedList',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-palindrome',
      title: 'palindrome',
      type: 'item',
      url: '/main/code/linkedListPalindrome',
      icon: icons.FontSizeOutlined
    },


  ]
};

export default linkedList;
