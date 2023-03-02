import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Project } from "./Project";
let engage_bay=[
    {img:"https://i.postimg.cc/yNXBLS9X/1.jpg"},
    {img:"https://i.postimg.cc/SN6hSM10/2.jpg"},
    {img:"https://i.postimg.cc/vT5pZJz7/3.jpg"},
    {img:"https://i.postimg.cc/SsMPgBw0/4.jpg"},
    {img:"https://i.postimg.cc/m2w5pN6r/6.jpg"},
    {img:"https://i.postimg.cc/cHwDRQn0/7.jpg"}
]
let jcrew=[
    {img:"https://i.postimg.cc/dtJgmtjr/2.jpg"},
    {img:"https://i.postimg.cc/CLykWzQn/1.jpg"},
    {img:"https://i.postimg.cc/RFjD2K8b/9.jpg"},
    {img:"https://i.postimg.cc/8cLJ1m0J/4.jpg"},
    {img:"https://i.postimg.cc/nLMXsJWt/3.jpg"},
    {img:"https://i.postimg.cc/kgGJsyvQ/8.jpg"},
    {img:"https://i.postimg.cc/zGyNKGqp/7.jpg"},
    {img:"https://i.postimg.cc/wvQYgtkx/5.jpg"},
    {img:"https://i.postimg.cc/YCB9rF6Y/6.jpg"}
]
let rentomojo=[
    {img:"https://i.postimg.cc/LXTSpyt0/1.png"},
    {img:"https://i.postimg.cc/DymT9P8B/2.png"},
    {img:"https://i.postimg.cc/mkgs2QVZ/3.png"},
    {img:"https://i.postimg.cc/Z5dhRYPN/5.png"},
    {img:"https://i.postimg.cc/ZKgS4vNZ/6.png"},
    {img:"https://i.postimg.cc/90gj4rNd/7.png"},
    {img:"https://i.postimg.cc/Y2d7Dsqv/8.jpg"}
]
let snapdeal=[
{img:"https://i.postimg.cc/Hs2rzgVF/1.png"},
{img:"https://i.postimg.cc/3RmRvMsS/3.jpg"},
{img:"https://i.postimg.cc/mkSgmY27/4.png"},
{img:"https://i.postimg.cc/wMzB5fH6/5.png"},
{img:"https://i.postimg.cc/Z55CDMNn/6.png"},
{img:"https://i.postimg.cc/q79qqB56/7.png"},
{img:"https://i.postimg.cc/0yXbg0Gf/2.png"}
]

let ProjetData=[
    {
        title:"EngageBay",
        description:`EngageBay is an integrated marketing, sales, support and CRM solution designed to help small to midsize enterprises acquire, engage and convert website visitors into customers. 
        The cloud-based platform lets businesses use marketing tools to build relationships with customers and retain them for a lifetime`,
        TechStack:"HTML/CSS | JAVASCRIPT | GITHUB",
        data:engage_bay,
        deployed:"https://famous-florentine-ec7142.netlify.app/",
        codbase:"https://github.com/Dante2109/EngageBay"
    },
    {
        title:"JCrew",
        description:"J.Crew Group, Inc., is an American multi-brand, multi-channel, specialty retailer. The company offers an assortment of women's, men's, and children's apparel and accessories, including swimwear, outerwear, lounge-wear, bags, sweaters, denim, dresses, suiting, jewelry, and shoes.",
        TechStack:"HTML/CSS | JAVASCRIPT | GITHUB",
        data:jcrew,
        deployed:"https://acras.netlify.app/",
        codbase:"https://github.com/Dante2109/enormous-step-3337"
    },
    {
        title:"RentoMojo",
        description:"Rentomojo is an online rental solution for all the furnishing needs including furniture, furnishings, home appliances, and bikes.",
        TechStack:"HTML/CSS | REACTJS | AXIOS | CHAKRA UI | JAVASCRIPT | REACT ROUTER DOM | GITHUB ",
        data:rentomojo,
        deployed:"https://rentomojo-dante2109.vercel.app/",
        codbase:"https://github.com/Dante2109/ashamed-letter-8335/tree/master/rentomojo"
    },
    {
        title:"snapdeal",
        description:"Snapdeal website, an e-commerce website which deals with the sales of various products like clothing products, electronics etc. This is an collaborative project completed in a span of 5 days.",
        TechStack:"REACT | HTML/CSS | JAVASCRIPT | CHAKRAUI | REACT ROUTER DOM | AXIOS | GITHUB",
        data:snapdeal,
        deployed:"https://darling-mooncake-57603b.netlify.app/",
        codbase:"https://github.com/fahad9988/warm-afternoon-3310/tree/master/warm-afternoon-3310"
    }
]
export const Projects=({p})=>{
    return (
        <Box ref={p}>
            <Box  textAlign={"center"} my="50px" mt={"50px"} >
            <Heading pb="70px">
                PROJECTS
            </Heading>
            <SimpleGrid columns={{base:1,sm:1,md:2}} gap="30px" >
            {ProjetData.map((el,i)=>(
                <Project i={i} data={el.data} title={el.title} description={el.description} stack={el.TechStack} codebase={el.codbase} deployed={el.deployed}></Project>
                ))}
            </SimpleGrid>
        </Box>
    </Box>
    )
}