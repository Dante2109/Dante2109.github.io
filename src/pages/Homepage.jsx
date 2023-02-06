import { Box ,Heading,Text,Button} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import BG1 from "../images/bg1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Homepage=()=> {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

   <Box bgImage={BG1} bgPosition="right" right={0} bgSize="cover" 
  bgRepeat="no-repeat" >
    <Box  w="85%" m="auto" py="280px">
      <div data-aos="fade-right">
       <Text  fontSize={["14px","20px","20px","23px","27px","30px"]}>
            Hello,<br></br>
            you have reached to
            <Heading fontFamily="" size={["sm","lg","lg","xl","xl","2xl"]}>
                Akshay Verma
            </Heading>  
            <Button mt={"20px"} border="1px solid black" _hover={{bgColor:"rgb(30,36,30)",color:"white"}}bgColor="white" size={["xs","xs","sm","md","lg"]}>Resume</Button>
        </Text> 
      </div>
    </Box>
    </Box>
  
  );
}

