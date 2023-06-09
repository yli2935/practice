/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-09 11:28:10
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-09 12:57:32
 * @FilePath: /practie/practice/src/modules/pages/Term.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from '../components/Markdown';
import Typography from '../components/Typography';
import AppFooter from '../views/AppFooter';
import withRoot from '../withRoot';
import terms from '../views/terms.md';

function Terms() {
    const [post,setPost] = React.useState('');
  React.useEffect(()=>{
    import('../views/terms.md')
    .then(res => {

        fetch(res.default).then(res =>{

            res.text()
        }).then(res => console.log(res))
    })
  })
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>

          <Markdown>{terms}</Markdown>


        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);