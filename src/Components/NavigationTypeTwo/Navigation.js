import { Box } from '@mui/system';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../../Utilities/Responsive';

const [, , device2] = Responsive;
const NavContainer = styled(Box)`
    display: flex;
    background: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;

    @media ${device2.tablet}{
        width: 100%;
        flex-direction: column;
    }
    `;
const NavItemBox = styled(Box)`
    display: flex;
    flex-basis: 20%;
    
    `;
const NavItem = styled(Link)`
    text-decoration: none;
    width:100%;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    padding: 30px 10px;
    margin-bottom: -1px
    transition: all 0.4s ease-in-out;
    
    &:hover,&:active{
    color: #ff014f;
    margin-bottom: -2px
    }

    &:hover,&:active ${NavItemBox}{
    background-color: linear-gradient(145deg, #e2e8ec, #ffffff);
    box-shadow: 10px 5px 15px #D1D9E6, -10px -5px 15px #ffffff;
    border-radius: 8px;
    }
    `;
export default function Navigation({ item }) {

    const [navItem, setNavItem] = useState(item);
    const isActiveFunction = async (id) => {
        setNavItem([]);
        let prev = await navItem.findIndex(x => x.isActive === true);
        let tmp = navItem;
        tmp[prev].isActive = false;
        tmp[id].isActive = true;
        const newNavItem = tmp;
        setNavItem(newNavItem);
    }
    return (
        <>

            <NavContainer>
                {navItem.map((data, key) => (
                    <NavItemBox style={{
                        color: data.isActive === true ? "#ff014f" : "#1e2125",
                        background: data.isActive === true ? "#linear-gradient(145deg, #e2e8ec, #ffffff)" : "",
                        boxShadow: data.isActive === true ? "10px 5px 15px #D1D9E6, -10px -5px 15px #ffffff" : "",
                        borderRadius: data.isActive === true ? "8px" : "",

                    }} key={key}>
                        <NavItem style={{
                            color: data.isActive === true ? "#ff014f" : "#1e2125",
                            fontWeight: data.isActive === true ? "600" : "400",
                        }} onClick={() => { isActiveFunction(key) }} to={data.path}>{data.itemName}
                        </NavItem>
                    </NavItemBox>

                ))
                }
            </NavContainer >
        </>

    )
}
