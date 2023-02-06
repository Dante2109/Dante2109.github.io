import { Image } from "@chakra-ui/react"
import Carousel from "nuka-carousel/lib/carousel"


export const Carousell=({data})=>{
    console.log(data)
    return(
        <Carousel autoplay={true} wrapAround={true} pauseOnHover={true} defaultControlsConfig={{pagingDotsStyle:{display:"none"},prevButtonText:"<",nextButtonText:">"}}>
            {data?.map((el)=>(
                <Image src={el.img}></Image>
            ))}
        </Carousel>
    )
}