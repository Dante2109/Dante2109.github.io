import { Box, Image, Text} from '@chakra-ui/react';
import React from 'react';
import a from "../assets/TechStack/317755_badge_html_html5_achievement_award_icon.svg"
import b from "../assets/TechStack/javascript_3.svg"
import d from "../assets/TechStack/4202020_css3_html_logo_social_social media_icon.svg"
import c from "../assets/TechStack/1012818_code_development_logo_nodejs_icon.svg"
import f from "../assets/TechStack/9118036_nextjs_fill_icon.svg"
import g from "../assets/TechStack/icons8-chakra-ui.svg"
import h from "../assets/TechStack/icons8-express-js.svg"
import i from "../assets/TechStack/icons8-mongodb-a-cross-platform-document-oriented-database-program-48.png"
import j from "../assets/TechStack/icons8-mongoose.svg"
import k from "../assets/TechStack/redux.svg"

import a1 from "../assets/TechTools/9035134_logo_vercel_icon.svg"
import a2 from "../assets/TechTools/icons8-git.svg"
import a3 from "../assets/TechTools/icons8-github.svg"
import a4 from "../assets/TechTools/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-48.png"
import a5 from "../assets/TechTools/icons8-npm.svg"
import a6 from "../assets/TechTools/icons8-postman-is-the-only-complete-api-development-environment-48.png"
import a7 from "../assets/TechTools/icons8-visual-studio-code-2019.svg"
import AOS from 'aos';

const TechSS = ({t}) => {
    React.useEffect(() => {
        AOS.init();
      }, [])
    const boxstyle={
        display:"flex",
        fontSize:"30px",
        fontWeight:"600",
        alignItems:"center",
        gap:"20px"
    }
    const parentBox={
        display:"flex",
        flexDirection:"column",
        gap:"20px"
    }
    const headText={
        fontWeight:"700"
    }
    const Heading={
        margin:"auto",
        textAlign:"center" ,
         fontWeight:"700",
         marginBottom: "40px",
         marginTop:"40px"
    }
  return (
<Box overflowY={"hidden"} mb="140px" ref={t}>
    <Text style={Heading} fontSize={{base:"20px",md:"28",lg:"35px"}}>Here's What all I can do!</Text>
  <Box m="auto" display="flex" justifyContent={"center"} gap="20"  w="100%" overflow={"hidden"}>
    <Box style={parentBox}>
        <Text style={headText} fontSize={{base:"15px",md:"25",lg:"30px"}} data-aos="zoom-in-right">Tech Stack</Text>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>HTML</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={d}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>CSS</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={b}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>JavaScript</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={"data:image/png;base64,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"}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>TypeScript</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={c}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>NodeJs</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>React</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={f}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>NEXT</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={g}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Chakra UI</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={h}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Express</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={i}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>MongoDB</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={j}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Mongoose</Text></Box>
        <Box data-aos="zoom-in-right" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={k}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Redux</Text></Box>
    </Box>
    <Box style={parentBox}>
        <Text style={headText} fontSize={{base:"15px",md:"25",lg:"30px"}} data-aos="zoom-in-left">Tech Tools</Text>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a2}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Git</Text></Box>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a3}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Github</Text></Box>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a1}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Vercel</Text></Box>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a4}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Netlify</Text></Box>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a5}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>NPM</Text></Box>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a6}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>Postman</Text></Box>
        <Box data-aos="zoom-in-left" style={boxstyle}><Image width={{base:"40px",md:"60px",lg:"80px"}} src={a7}></Image><Text fontSize={{base:"10px",md:"20",lg:"30px"}}>VSCode</Text></Box>
    </Box>
  </Box>
</Box>
  );
}

export default TechSS;
