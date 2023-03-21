import Carousel from 'react-material-ui-carousel'
import Box from "@mui/material/Box";
import Image from "next/image";
import {useState} from "react";

export default function CarouselProject(): JSX.Element {
    const [firstImgLoaded, setFirstImgLoaded] = useState(false);
    const items = [{img: "/sons.jpeg"}, {img: "/cover-2.jpg"}]

    return (
        <>
            <img src={items[0].img}
                 width={560}
                 height={300}
                 alt='test'
                 onLoad={() => setFirstImgLoaded(true)}
                 style={{display: "none"}}
            />
            {firstImgLoaded && (
                <Carousel autoPlay swipe={false}>
                    {items.map((item, idx) => (
                        <Box key={idx}>
                            <Image src={item.img} width={560} height={300} alt='test'/>
                        </Box>
                    ))}
                </Carousel>
            )}
        </>
    );
};
