/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:25:59
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-07 11:26:08
 * @FilePath: /practie/practice/src/modules/components/AppBar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
  return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

export default AppBar;