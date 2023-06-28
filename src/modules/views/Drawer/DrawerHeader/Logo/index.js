/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-17 14:24:19
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-27 14:23:01
 * @FilePath: /practie/practice/src/modules/views/Drawer/DrawerHeader/Logo/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { activeItem } from '../../../../../store/reducers/menu';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? '/main' : to}
      sx={sx}

    >
      <img src={"./static/logo-color.svg"} alt="Mantis" width="140" />
      
    </ButtonBase>

    
  );


};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;