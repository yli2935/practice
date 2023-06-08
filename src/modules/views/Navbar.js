/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:19:32
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-08 17:35:58
 * @FilePath: /practie/practice/components/Navbar.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
 * 
 */

import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar'
import Toolbar from '../components/Toolbar'
const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};
function Navbar() {
  return (
    <div>
      <AppBar position="fixed" style={{ background: '#28282A' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            {'Algorithm'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: '#FF3236' }}
            >
              {'Sign Up'}
            </Link> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}


export default Navbar