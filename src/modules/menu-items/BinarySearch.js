/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-25 14:23:35
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-27 19:05:01
 * @FilePath: /practice/src/modules/menu-items/pages.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const BinarySearch = {
  id: 'BinarySearch',
  title: 'Binary Search',
  type: 'group',
  children: [
    {
      id: 'binarySearch-SearchRotatedSortedArray',
      title: 'Search Rotated Array',
      type: 'item',
      url: '/main/code/SearchRotatedSortedArray',
      icon: icons.ProfileOutlined,

    },
    {
      id: 'binarySearch-FindMinimumRotatedSortedArray',
      title: 'Find Minimum Rotated Array',
      type: 'item',
      url: '/main/code/FindMinimumRotatedSortedArray',
      icon: icons.ProfileOutlined,

    }
  ]
};

export default BinarySearch;
