import {Box,Heading,Text} from "@chakra-ui/react"
import { Carousell } from "./Carousel"
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Project=({data,title,description,stack,i})=>{
  useEffect(() => {
    AOS.init();
  }, [])
    return (
      <div data-aos={i%2===0?"fade-up-right":"fade-up-left"} data-aos-duration="500">
        <Box w="80%" m="auto" border="1px solid rgb(50,12,11)" justifyContent={"space-evenly"}
        bgColor="rgb(251,249,247)"
        
         display={"flex"} flexDirection="column" borderRadius={"10px"} 
         minH="600px" transition={"ease-in-out"} transitionDuration="200ms" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" 
         _hover={{boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}} >
          <Box w="90%" p="20px" m="auto" display={"flex"} flexDirection="column" justifyContent={"space-evenly"} >
              <Carousell data={data}></Carousell>
              <Box display={"flex"} flexDirection="column" justifyContent={"space-evenly"} gap="20px">
                <Heading mt="10px" size="lg" >
                    {title}
                </Heading>
                <Text textAlign={"left"}>
                {description}
                </Text>
                <Heading size={"md"}>
                  Tech Stack
                </Heading>
                <Text fontWeight={"bold"}>
               {stack}
                </Text>
              </Box>
          </Box>

        </Box>
        </div>
    )
}