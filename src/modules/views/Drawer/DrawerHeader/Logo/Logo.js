/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-17 14:27:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-17 17:02:05
 * @FilePath: /practie/practice/src/modules/views/Drawer/DrawerHeader/Logo/Lodo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * 
     *
     */
    <img src={"./static/logo-color.svg"} alt="Mantis" width="140" />
 
  );
};

export default Logo;