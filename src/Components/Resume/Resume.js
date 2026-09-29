import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Education from '../Education/Education'
import Navigation from '../NavigationTypeTwo/Navigation'
import ProfessionalSkills from '../ProfessionalSkills/ProfessionalSkills'
import Interveiw from '../Interveiw/Interveiw'
import Achievement from '../Achievement/Achievement'

const Title = styled(Typography)`
color: #3c3e41;
text-align: center;
font-family: 'Montserrat', sans-serif !important;
font-weight: 600 !important;
font-size: 60px !important;

@media (max-width: 600px) {
    font-weight: 600 !important;
    font-size: 32px !important;
}
`

const SubTitle = styled(Typography)`
color: #ff014f;
text-align: center;
text-transform: uppercase;
`
export default function Resume() {

    const [NavItem] = useState([
        {
            itemName: 'Education',
            path: '/',
            isActive: true
        },
        {
            itemName: 'Professional Skills',
            path: '/professional-skills',
            isActive: false
        },
        {
            itemName: 'Experience',
            path: '/experience',
            isActive: false
        },
        {
            itemName: 'Interveiw',
            path: '/interveiw',
            isActive: false
        },
        {
            itemName: 'Achievement',
            path: '/achievement',
            isActive: false
        },
    ]);

    return (
        <div id="resume">
            <SubTitle>
                1+ YEARS OF EXPERIENCE
            </SubTitle>
            <Title>My Resume</Title>
            <BrowserRouter>
                <Navigation sx={{ display: 'flex' }} item={NavItem} />
                <Routes>
                    <Route exact path="/" element={<Education />}>

                    </Route>

                    <Route exact path="/professional-skills" element={<ProfessionalSkills />}>

                    </Route>

                    <Route exact path="/experience" element={<Interveiw />}>

                    </Route>
                    <Route exact path="/interveiw" element={<Interveiw />}>

                    </Route>
                    <Route exact path="/achievement" element={<Achievement />}>

                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
