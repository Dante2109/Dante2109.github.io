import GitHubCalendar from 'react-github-calendar';
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
const GitStats = ({g}) => {
    const box={
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        backgroundColor:"#fbf9f7"
    }
    const TextStyle={
        fontWeight:"700"
    }
  return (
    <Box p={{base:"5px 0px", md:"50px 0px"}} ref={g}>
    <Heading textAlign={"center"} pb={{base:"20px", md:"50px"}}>Github</Heading>
    <p align="center">
      <Box style={box} padding={{base:"0px", md:"30px"}} border={{base:"none", md:"1px solid black"}} width={{base:"90%", md:"70%"}} marginBottom="15px" >
      <GitHubCalendar username="dante2109"  />
      </Box>
      <Box  style={box} padding={{base:"0px", md:"30px"}} border="1px solid black" width="70%" marginBottom="15px" >
        <Text style={TextStyle} >Akshay's's streak</Text>
        <img alt="Akshay's's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=dante2109&stroke=0000&border=000000"/>
      </Box>
      <Box  style={box} padding={{base:"0px", md:"30px"}} border="1px solid black" width="70%" marginBottom="15px" >
        <Text style={TextStyle} >Akshay's's Github Stats</Text>
        <img alt="Akshay's's Github Stats" src="https://github-readme-stats.vercel.app/api?username=dante2109&show_icons=true&count_private=true&border_color=000000" />
      </Box>
      <Box style={box}  padding={{base:"0px", md:"30px"}} border="1px solid black" width="70%" marginBottom="0px" >
        <Text style={TextStyle} >Akshay's's Top Languages</Text>
        <img alt="Akshay's's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=dante2109&langs_count=8&count_private=true&layout=compact&border_color=000000" />
      </Box>
    </p>

</Box>
  );
}

export default GitStats;
