import React, { useState } from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import { animateScroll as scroll } from 'react-scroll'
import styled from 'styled-components';
const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    const scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    const ScrollingTopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    width: 60px;
    height: 60px;
    font-size: 18px;
    border: none;
    outline: none;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;
    color: #f9004d;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.4s ease-in;
    animation: float 6s ease-in-out infinite;
    &:hover{
        background-image: linear-gradient(145deg, #6a67ce,#fc636b) !important;
        transform: translateY(-3px);
        color: #fff;
        font-weight: 600;
    }

    @keyframes float {
        0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
        50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translatey(-10px);
        }
        100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translatey(0px);
        }
    }
    `

    return (
        <>
            {visible ?
                <ScrollingTopButton onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
                    <NavigationIcon style={{ margin: "0 0" }} />
                </ScrollingTopButton>
                :
                <ScrollingTopButton onClick={scrollToBottom} style={{ display: visible === false ? 'block' : 'none' }}>
                    <NavigationIcon style={{ transform: "Rotate(180deg)", margin: "4px 0" }} />
                </ScrollingTopButton>
            }
        </>

    );
}

export default ScrollButton;