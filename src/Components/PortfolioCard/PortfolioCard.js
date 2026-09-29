import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styled from "styled-components";
import Heart from "@mui/icons-material/Favorite";

const PortfolioCard = ({ data }) => {
  const [like, setLIke] = useState(parseInt(Math.random() * 100));
  const [isLike, setIsLike] = useState(false);
  const Container = styled(Box)`
    width: 100%;
    position: relative;
  `;

  const CardBody = styled(Box)`
    width: 100%;
    position: relative;
  `;
  const CardTitle = styled(Typography)`
    font-size: 20px !important;
    line-height: 30px;
    font-weight: 600 !important;
    display: block;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    & span {
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: #ff014f;
      & span {
        opacity: 1;
        visibility: visible;
      }
    }
  `;
  const ImageBox = styled(Box)`
    width: 100%;
    // margin-bottom: 16px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    overflow: hidden;
  `;
  const CardImg = styled.img`
    width: 100%;
    border-radius: 10px;
    transform: scale(1);
    object-fit: cover;
    position: relative;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  `;
  const CardButtonBox = styled(Box)``;
  const CardButton = styled.a`
    font-size: 16px !important;
    line-height: 30px;
    font-weight: 600;
    text-decoration: none;
    color: #ff014f;
    text-transform: uppercase;
    margin-right: 16px;
  `;
  const CardLikeButton = styled.button((props) => {
    return `
    font-size: 20px !important;
    background: transparent;
    border: none;
    cursor: pointer;
    line-height: 30px;
    font-weight: 600;
    text-decoration: none;
    color: ${props?.like ? "blue" : "#ff014f"};
    float: right;
    text-transform: uppercase;
    margin-right: 16px;
    transition: all 0.3s ease-in-out;
    transform: translateY(5px);
    &:hover,
    &:active {
      transform: translateY(3px);
      color: blue;
    }
  `
  });

  const CardBox = styled(Box)`
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff;
    padding: 30px;
    text-align: left;
    border-radius: 20px;
    position: relative;
    z-index: 1;
    height: 100%;
    transition: 0.5s all ease-in-out;
  `;


  return (
    <Container>
      <CardBox>
        <CardBody>
          <ImageBox>
            <CardImg src={data.image}></CardImg>
          </ImageBox>
          <CardButtonBox></CardButtonBox>
          <CardButton href={data.live}>Live</CardButton>
          <CardButton href={data.files}>Files</CardButton>
          <CardLikeButton
            like={isLike}
            onClick={() => {
              setIsLike((old) => {
                const temp = !old;

                if (temp) {
                  setLIke((prev) => {
                    return prev + 1;
                  });
                } else {
                  setLIke((prev) => {
                    return prev - 1;
                  });
                }
                return temp;
              });

              return data;
            }}
          >
            <Heart /> {like}
          </CardLikeButton>
          <CardTitle>
            {data.title} <span>&#129157;</span>
          </CardTitle>
        </CardBody>
      </CardBox>
    </Container>
  );
};

export default PortfolioCard;
