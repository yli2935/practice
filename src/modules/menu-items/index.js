/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-17 12:45:15
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-17 14:09:05
 * @FilePath: /practie/practice/src/modules/menu-items/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A,
 */
// project import
import pages from './pages';
import introduction from './introduction';
import utilities from './utilities';
import support from './support';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [introduction, utilities, pages, support]
};

export default menuItems;
