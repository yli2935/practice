/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-18 14:40:20
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-07-02 17:08:53
 * @FilePath: /practie/practice/src/modules/menu-items/support.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// assets
import { PicCenterOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  PicCenterOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const stack = {
  id: 'Stack',
  title: 'Stack',
  type: 'group',
  children: [
    {
      id: 'ValidParentheses',
      title: 'Valid Parentheses',
      type: 'item',
      url: '/main/Stack/ValidParentheses',
      icon: icons.PicCenterOutlined
    },

  ]
};

export default stack;
