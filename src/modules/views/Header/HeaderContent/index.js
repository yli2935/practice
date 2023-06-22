/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-18 14:29:07
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-21 16:12:27
 * @FilePath: /practie/practice/src/modules/views/Header/HeaderContent/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';



// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      <IconButton
        component={Link}
        href="https://github.com/yli2935"
        target="_blank"
        disableRipple
        color="secondary"
        title="yaguang's github"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton>

    </>
  );
};

export default HeaderContent;