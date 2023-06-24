/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-23 15:46:51
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-24 15:17:25
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
      id: 'linkedList-reverseLinkedList',
      title: 'Reverse Linked List',
      type: 'item',
      url: '/main/code/ReverseLinkedList',
      icon: icons.FontSizeOutlined
    },
    {
      id: 'linkedList-mergeTwoSortedLists',
      title: 'Merge Two Sorted Lists',
      type: 'item',
      url: '/main/code/MergeTwoSortedLists',
      icon: icons.BgColorsOutlined
    },
    {
      id: 'util-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/shadow',
      icon: icons.BarcodeOutlined
    },
    {
      id: 'ant-icons',
      title: 'Ant Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default linkedList;
