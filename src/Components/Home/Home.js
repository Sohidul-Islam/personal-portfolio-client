import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
// Icon List start
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//Icon List end

// Custom components start
import ButtonType1 from './../ButtonType1/ButtonType1';
import Banner from './../Banner1/Banner';
// Custom Components end

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: "#ECF0F3",
    color: theme.palette.text.secondary,
    lineHeight: '60px',
    fontFamily: '"Poppins", sans-serif'
}));


const lightTheme = createTheme({ palette: { mode: 'light' } });


const Home = () => {
    const [themeColor] = useState(lightTheme);
    return (
        <ThemeProvider theme={themeColor}>
            <Box sx={{ flexGrow: 1 }} id="home">
                <Grid container spacing={2} sx={{ width: "100%" }}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                p: 2,
                                bgcolor: '#ECF0F3',
                            }}
                        >
                            <Item elevation={0}>
                                <Box sx={{ textAlign: 'left', color: "#000", pt: 4 }}>
                                    <Typography sx={{ fontSize: 24, fontWeight: 400, fontFamily: '"Poppins", sans-serif' }}>
                                        WELCOME TO MY WORLD
                                    </Typography>
                                    <Typography variant="span" sx={{ fontSize: 40, fontWeight: 800, fontFamily: '"Poppins", sans-serif' }}>Hi, I’m <Typography variant="span" sx={{ fontSize: 40, color: '#ff014f' }}>Sohidul Islam
                                    </Typography>
                                        <br></br>
                                        <Typography variant="span" sx={{ fontSize: 40, color: '#ff014f' }}>
                                            a </Typography>
                                    </Typography>
                                    <TypeAnimation
                                        // Same String at the start will only be typed once, initially
                                        sequence={[
                                            'Developer.',
                                            1000,
                                            'Professional Coder.',
                                            1000,
                                            'UI/UX Designer.',
                                            1000,
                                            'Problem Solver.',
                                            1000,
                                        ]}
                                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                        style={{ fontSize: '40px' }}
                                        wrapper="span" // Animation will be rendered as a <span>
                                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                                    />
                                    <Typography sx={{ letterSpacing: 1.25 }}>
                                        As a MERN stack web developer, I specialize in building dynamic and efficient web applications using MongoDB, Express, React, and Node.js. With a strong foundation in JavaScript and a passion for creating intuitive user experiences, I have a proven track record of delivering high-quality projects that meet the needs of both businesses and end-users. Whether building a single-page app or a complex web platform, I am committed to writing clean, maintainable code that is optimized for performance and scalability.
                                    </Typography>
                                    <Box sx={{ pt: 10 }}>
                                        <Grid container spacing={2} sx={{ width: "100%" }} justifyContent="space-between">
                                            <Grid item md={6}>
                                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "left", listStyle: "none", paddingLeft: "0", width: "100%" }}>
                                                    <Typography sx={{ textAlign: 'left', fontSize: "16px", fontWeight: 500, fontFamily: '"Poppins", "Sans-serif"', color: "#1e2125" }}>
                                                        FIND WITH ME
                                                    </Typography>
                                                    <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", paddingLeft: "0", width: "100%" }}>
                                                        <li style={{ marginRight: "24px" }}>
                                                            <ButtonType1 link="https://www.facebook.com/sishufol">
                                                                {/* <FacebookIcon /> */}
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                                            </ButtonType1>
                                                        </li>
                                                        <li style={{ marginRight: "24px" }}>
                                                            <ButtonType1 link="https://www.twitter.com/sishufol">
                                                                <TwitterIcon />
                                                            </ButtonType1>
                                                        </li>
                                                        <li style={{ marginRight: "24px" }}>
                                                            <ButtonType1 link="https://www.linkedin.com/in/sishufol">
                                                                <LinkedInIcon />
                                                            </ButtonType1>
                                                        </li>
                                                    </ul>
                                                </Box>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "left", listStyle: "none", paddingLeft: "0", width: "100%" }}>
                                                    <Typography sx={{ textAlign: 'left', fontSize: "16px", fontWeight: 500, fontFamily: '"Poppins", "Sans-serif"', color: "#1e2125" }}>
                                                        BEST SKILL ON
                                                    </Typography>
                                                    <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none", paddingLeft: "0", width: "100%" }}>
                                                        <li style={{ marginRight: "24px" }}>
                                                            <ButtonType1>
                                                                {/* <FacebookIcon /> */}
                                                                <img decoding="async" src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/icons-03.png" className="attachment-full size-full" alt="figma" loading="lazy"></img>
                                                            </ButtonType1>
                                                        </li>
                                                        <li style={{ marginRight: "24px" }}>
                                                            <ButtonType1>
                                                                {/* <FacebookIcon /> */}
                                                                <img decoding="async" src="https://w7.pngwing.com/pngs/831/155/png-transparent-game-react-native-javascript-android-physics-symmetry-web-application-vuejs-thumbnail.png" className="attachment-full size-full" alt="react" loading="lazy"></img>
                                                            </ButtonType1>
                                                        </li>
                                                        <li style={{ marginRight: "24px" }}>
                                                            <ButtonType1>
                                                                {/* <FacebookIcon /> */}
                                                                <img decoding="async" src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" className="attachment-full size-full" alt="react" loading="lazy"></img>
                                                            </ButtonType1>
                                                        </li>
                                                    </ul>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Item>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>

                        <Box
                            sx={{
                                p: 1,
                                bgcolor: '#ECF0F3',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Item elevation={0}>
                                <Box>
                                    {/* <Box style={{ width: '100%', height: '100%' }}> */}
                                    {/* <img style={{ width: '100%' }} src={img1}></img> */}
                                    <Banner />
                                </Box>
                            </Item>

                        </Box>

                    </Grid>

                </Grid >
            </Box >
        </ThemeProvider>

    )
}

export default Home