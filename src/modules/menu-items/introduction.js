/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-17 12:45:15
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-21 17:27:24
 * @FilePath: /practie/practice/src/modules/menu-items/dashboard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// assets
import { AreaChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  AreaChartOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const introduction = {
  id: 'group-dashboard',
  // title: 'Introduction',
  type: 'group',
  icon: icons.DashboardOutlined,
  children: [
    {
      id: 'introduction',
      title: 'introduction',
      type: 'item',
      url: '/introduction/default',
      icon: icons.AreaChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default introduction;
