/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-17 12:45:15
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-17 17:08:45
 * @FilePath: /practie/practice/src/modules/menu-items/dashboard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Linked List',
  type: 'group',
  icon: icons.DashboardOutlined,
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
