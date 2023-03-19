import Carousel from 'react-material-ui-carousel'
import Box from "@mui/material/Box";
import Image from "next/image";

export default function CarouselProject(): JSX.Element {
    const items = [{img: "/sons.jpeg"}, {img: "/mostafa1.png"}, {img: "/test.jpg"}]

    return (
        <Box>
            <Carousel>
                {items.map((item, idx) => (
                    <Box key={idx}>
                        <Image src={item.img} width={560} height={300} alt='test'/>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};
