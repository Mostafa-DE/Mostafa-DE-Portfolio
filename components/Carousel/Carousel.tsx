import Carousel from 'react-material-ui-carousel'
import Box from "@mui/material/Box";
import Image from "next/image";
import React, {useState} from "react";
import type {IProjectCardData} from "@/components/ProjectCards/";

export default function CarouselProject({images}: IProjectCardData): JSX.Element {
    const [firstImgLoaded, setFirstImgLoaded] = useState<boolean>(false);

    return (
        <>
            {/* Added this image because the wierd behaviour of react-material-ui-carousel library whe load first image with animation */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cover-2.jpg"
                 width={560}
                 height={300}
                 alt='test'
                 onLoad={() => setFirstImgLoaded(true)}
                 style={{display: "none"}}
            />
            {firstImgLoaded && (
                <Carousel autoPlay swipe={false}>
                    {images.map((img, idx) => (
                        <Box key={idx}>
                            <Image src={img.src} width={560} height={300} alt='test'/>
                        </Box>
                    ))}
                </Carousel>
            )}
        </>
    );
};
