
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box,Heading,Stack,Image,Text } from "@chakra-ui/react";
function About({a}) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <Box ref={a} data-aos="fade-up" data-aos-delay="600ms" w="85%" py={"100px"} m="auto" pt="100px" textAlign={"center"}>
        <Heading mb="50px">
            About Me
        </Heading>
        <Stack direction={['column',"row"]} spacing='24px' alignItems={"center"}>
            <Box  w={["100%","70%"]} textAlign={"left"} fontSize={["15px","20px","30px","30px"]}>
                <Text>A tech-enthusiast, work-oriented Full stack Web Developer with hands-on project experience with proficiency in Javascript HTML & CSS.
                     Robust problem-solving mindset enhancing overall performance, scalability, and reliability at every level of the project.</Text>
            </Box>
            <Box>
                <Image m="auto" w="80%" borderRadius={"50%"} src="https://avatars.githubusercontent.com/u/112630861?v=4"></Image>
            </Box>
        </Stack>
    </Box>
  );
}

export default About;
