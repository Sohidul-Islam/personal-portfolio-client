import { Box, Grid, Grow, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import TimeLine from '../Timeline/TimeLine'

export default function Achievement() {

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

    const academic = [
        {
            title: " Bangla Speech Emotion Recognition Using Machine Learning and Deep Learning Methods",
            subtitle: "a piece of thesis work (2023)",
            badge: "Awards",
            desc: "I conducted research on using machine learning and deep learning algorithms for emotion recognition in Bangla speech. With a CNN model, I achieved an impressive 92.29% accuracy in identifying emotions, demonstrating the potential of these technologies to accurately analyze and understand speech in non-English languages."
        },
        {
            title: "I achieved 3rd position in the Patriotic Song Competition.",
            subtitle: "at Moulavi Samsul karim college",
            badge: "Awards",
            desc: "I am proud to announce that I achieved the 3rd position in the Patriotic Song Competition, which took place on 2017 at Moulavi Samsul karim college, Feni, Bangladesh. It was an incredible experience to perform alongside other talented participants, and I am grateful for the opportunity to showcase my passion for music and love for my country."
        },
        {
            title: "I achieved 3rd position in the Patriotic Song Competition.",
            subtitle: "at Chhagalnaiya Acedemy",
            badge: "Awards",
            desc: "I am proud to announce that I achieved the 3rd position in the Patriotic Song Competition, which took place on 2016 at Chhagalnaiya Acedemy, Feni, Bangladesh. It was an incredible experience to perform alongside other talented participants, and I am grateful for the opportunity to showcase my passion for music and love for my country."
        },

    ]
    const others = [
        {
            title: "I achieved 3rd position in online Programming Competition.",
            subtitle: "at HackerRank (Feb-17, 2023)",
            badge: "Awards",
            desc: 'I am pleased to announce that I achieved the 3rd position in the online programming competition "Faang starts from here" on HackerRank. It was a challenging yet rewarding experience, and I am proud of my performance. Competing with skilled programmers from around the world has helped me develop my skills and broaden my knowledge. I look forward to participating in more programming competitions and continuing to push myself to new heights.',
            link: "https://www.hackerrank.com/faang-aspiration-starts-from-here"
        },
    ]
    return (
        <Grow
            in={!false}
            style={{ transformOrigin: '0 0 0' }}
            {...(!false ? { timeout: 1000 } : {})}>
            <Box sx={{ my: 4 }}>
                <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12, xl: 12 }} >
                    <Grid item xs={4} sm={4} md={6} xl={6} >
                        <TextBox>
                            <Text1>2016-2023</Text1>
                            <Text2>Academic Achievement</Text2>
                        </TextBox>
                        <TimeLine data={academic}></TimeLine>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6} xl={6} >
                        <TextBox>
                            <Text1>2016-present</Text1>
                            <Text2>Others Achievement</Text2>
                        </TextBox>
                        <TimeLine data={others}></TimeLine>
                    </Grid>
                </Grid>
            </Box>
        </Grow>
    )
}
