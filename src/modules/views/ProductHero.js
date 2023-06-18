/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2023-06-07 11:32:46
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2023-06-18 14:39:37
 * @FilePath: /practie/practice/src/modules/views/ProductHero.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Link from '@mui/material/Link';
const backgroundImage = "https://i.imgur.com/1PeQdB4.jpeg";
// const backgroundImage = "/static/background.jpg"

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d0", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Algorithm and Data Structure Notes
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h6"
        sx={{ mb: 3, mt: { xs: 3, sm: 10  } }}
      >
        <Link
          href="https://github.com/yli2935"
          align="center"
          underline="always"
          target = "_blank"
          style={{ color: "white" }}
        >
          Check more on my github
        </Link>
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/main"
        sx={{ minWidth: 200 }}
      >
        Start
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
