/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-18 14:40:20
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-19 15:00:19
 * @FilePath: /practie/practice/src/modules/menu-items/support.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// assets
import { SortDescendingOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  SortDescendingOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const sort = {
  id: 'Sorting',
  title: 'Sorting',
  type: 'group',
  children: [
    {
        id: 'BubbleSort',
        title: 'Bubble Sort',
        type: 'item',
        url: '/main/Sort/BubbleSort',
        icon: icons.SortDescendingOutlined
    },
    {
        id: 'SelectSort',
        title: 'Select Sort',
        type: 'item',
        url: '/main/Sort/selectionSort',
        icon: icons.SortDescendingOutlined
    },
    {
        id: 'InsertSort',
        title: 'Insert Sort',
        type: 'item',
        url: '/main/Sort/InsertSort',
        icon: icons.SortDescendingOutlined
    },

  ]
};

export default sort;
