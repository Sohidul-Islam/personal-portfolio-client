import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';
export default function Card({ feature }) {


    const IconBox1 = styled.div`
    color: #f9004d;
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
    `
    const IconBox2 = styled.div`
    color: #f9004d;
    width: 60px;
    height: 60px;
    margin: 32px 0px 0px 0px;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.4s ease-in-out;
    `
    const FeatureDescription = styled.p`
    fontSize: 16px;
    color: #343a40;
    margin-bottom: 0px;
    `;

    const Overlay = styled.div`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    background: linear-gradient(145deg, #6a67ce,#fc636b);
    z-index:-1;
    transition: all 0.2s ease-in;
    `
    const CardBody = styled.div`
    transform: translateY(0px);
    transition: all 0.4s ease-in-out;
    `;

    const FeatureTitle = styled.h3`
    font-size: 28px; 
    color: #1e2125;
    margin-top: 0px;
    margin-bottom: 24px;
    `;

    const Cardbox = styled.div`
    position: relative;
    top:0;
    left:0;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    padding: 40px;
    height: 100%;
    z-index: 2;
    cursor: default;
    border-radius: 6px;
    tranisition: background 0.5s ease-in;
    &:hover{
        color: #fff !important;
    }
    &:hover ${Overlay} {
        opacity: 1;
        visibility: visible;
        border-radius: 6px;
    }
    &:hover ${IconBox1} {
    color: #fff;
    }
    &:hover ${IconBox2} {
    color: #fff;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
    }
    &:hover ${CardBody} {
       transform: translateY(-10px);
    }
    &:hover ${FeatureTitle} {
       color: #fff;
    }
    &:hover ${FeatureDescription} {
       color: #fff;
    }

    `


    return (
        <Cardbox>
            <CardBody>
                <IconBox1>
                    {feature.icon}
                </IconBox1>
                <FeatureTitle sx={{ fontSize: "28px", color: "#1e2125", mb: 3 }}>
                    {feature.title}
                </FeatureTitle>
                <FeatureDescription>
                    {feature.desc}
                </FeatureDescription>
                <IconBox2>
                    <ArrowForwardIcon sx={{ width: "60px", height: "60px" }} />
                </IconBox2>
            </CardBody>


            <Overlay>

            </Overlay>
        </Cardbox>
    )
}
