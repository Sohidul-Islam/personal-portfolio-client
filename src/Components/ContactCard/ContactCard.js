import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import styled from 'styled-components';
import image from '../../images/shufol.jpg'
import FindWithMe from '../FindWithMe/FindWithMe';

const ContactCard = () => {

    const Container = styled(Box)`
    width:100%;
    position:relative;
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
    &:hover{
    color: #ff014f;
    & span {
        opacity: 1;
        visibility: visible;
    }
    }
    `;
    const CardSubTitle = styled(Typography)`
    font-size: 16px !important;
    line-height: 16px;
    font-weight: 400 !important;
    display: block;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    & span {
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }
    &:hover{
    color: #ff014f;
    & span {
        opacity: 1;
        visibility: visible;
    }
    }
    `;
    const ImageBox = styled(Box)`
    width:100%;
    // margin-bottom: 16px;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    overflow:hidden;
    `;
    const CardImg = styled.img`
    width: 100%;
    border-radius: 10px;
    transform: scale(1);
    object-fit: cover;
    position: relative;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    &:hover{
        transform: scale(1.2);
     }
    `;

    const CardBox = styled(Box)`
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
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
                    <ImageBox sx={{ mb: 2 }}>
                        <CardImg src={image}></CardImg>
                    </ImageBox>
                    <CardTitle sx={{ mb: 1 }}>Sohidul Islam <span>&#129157;</span></CardTitle>
                    <CardSubTitle>Full Stack Web Developer</CardSubTitle>
                    <p>I am seeking a job. Contact with me via and call in my account</p>
                    <p>Phone: +8801854107699</p>
                    <p>Email: shufol.cse@gmail.com,
                        sishufol.sim@gmail.com
                    </p>
                    <FindWithMe />
                </CardBody>

            </CardBox>
        </Container >
    )
}

export default ContactCard;