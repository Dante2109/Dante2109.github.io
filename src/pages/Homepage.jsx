import { Box ,Heading,Text,Button,Link} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import BG1 from "../images/bg1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "../assets/Akshay_Verma_Resume.pdf"
export const Homepage=({h})=> {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

   <Box ref={h} bgImage={BG1} bgPosition="right" right={0} bgSize="cover" 
    bgRepeat="no-repeat" >
    <Box  w="85%" m="auto" py="280px">
      <div data-aos="fade-right">
       <Text  fontSize={["14px","20px","20px","23px","27px","30px"]}>
            Hello,
            <br></br>
            you have reached to
            <Heading fontFamily="" size={["sm","lg","lg","xl","xl","2xl"]} mb="10px">
                Akshay Verma
            </Heading>
            <Link mt="20px" href={resume} download={true}  target="_blank" textDecoration={"none"}>
              <Button onClick={()=>window.open("https://drive.google.com/file/d/1e0UsfaFSO5pOkOz2AgOxE1cqo997aw2x/view")}
             _hover={{bgColor:"rgb(30,36,30)",color:"white"}} border="1px solid black" bgColor="white" size={["sm","sm","sm","md","lg"]}>Resume</Button>
            </Link>  
        </Text> 
      </div>
    </Box>
    </Box>
  
  );
}

