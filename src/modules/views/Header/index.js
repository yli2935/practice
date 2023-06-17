/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-17 17:20:37
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-17 17:21:05
 * @FilePath: /practie/practice/src/modules/views/Header/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, useMediaQuery } from '@mui/material';

const Header = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
};

Header.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func
  };
  
  export default Header;