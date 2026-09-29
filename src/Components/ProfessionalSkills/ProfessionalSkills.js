import { Grid, Grow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import Loader from '../Loader/Loader'

const Text1 = styled(Typography)`
    font-size: 18px !important;
    color: #ff014f;
    font-weight: 400 !important;
    font-family: "Poppins", sans-serif !important;
    `
const Text2 = styled(Typography)`
    font-size: 30px !important;
    color: #000;
    font-weight: 800 !important;
    font-family: "Montserrat", sans-serif !important;
    `
const TextBox = styled(Box)`
    margin: 40px 0px;
    `
const ProfessionalSkills = () => {
    const DesignSkill = [
        {
            label: "ADOBE PHOTOSHOP",
            percentage: "60%"
        },
        {
            label: "ADOBE ILLUSTRATOR",
            percentage: "60%"
        },
        {
            label: "Figma",
            percentage: "70%"
        },
        {
            label: "DESIGN",
            percentage: "80%"
        },
        {
            label: "HTML",
            percentage: "80%"
        },
        {
            label: "CSS",
            percentage: "80%"
        },
        {
            label: "BOOTSTRAP",
            percentage: "80%"
        },
        {
            label: "TAILWIND CSS",
            percentage: "80%"
        },
        {
            label: "MATERIAL UI",
            percentage: "80%"
        },
    ]
    const DevelopmentSkill = [
        {
            label: "JS",
            percentage: "70%"
        },
        {
            label: "NodeJs",
            percentage: "70%"
        },
        {
            label: "Expres Js",
            percentage: "70%"
        },
        {
            label: "ReactJs",
            percentage: "80%"
        },
        {
            label: "MongoDb",
            percentage: "70%"
        },
        {
            label: "MySql",
            percentage: "70%"
        },
        {
            label: "ReduxJs",
            percentage: "70%"
        },
        {
            label: "NextJs",
            percentage: "70%"
        },
    ]

    return (
        <Grow
            in={!false}
            style={{ transformOrigin: '0 0 0' }}
            {...(!false ? { timeout: 1000 } : {})}
        >
            <Box sx={{ my: 4 }}>
                <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} >
                    <Grid item xs={4} sm={4} md={6} xl={6} >
                        <TextBox>
                            <Text1>Features</Text1>
                            <Text2>Design Skill</Text2>
                        </TextBox>

                        {DesignSkill.map((data, index) => <Loader key={index} label={data.label} percentage={data.percentage}></Loader>)}
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} xl={6} >
                        <TextBox>
                            <Text1>Features</Text1>
                            <Text2>Development Skill</Text2>
                        </TextBox>

                        {DevelopmentSkill.map((data, index) => <Loader key={index} label={data.label} percentage={data.percentage}></Loader>)}
                    </Grid>
                </Grid>
            </Box>
        </Grow>
    )
}

export default ProfessionalSkills;
