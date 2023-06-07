/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:35:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-07 11:39:11
 * @FilePath: /practie/practice/src/modules/pages/Home.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';

import ProductHero from '../views/ProductHero';
import ProductCategories from '../views/ProductCategories';
import AppFooter from '../views/AppFooter';
import withRoot from '../withRoot';

function Home() {
  return (
    <React.Fragment>

      <ProductHero />
      <ProductCategories />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);