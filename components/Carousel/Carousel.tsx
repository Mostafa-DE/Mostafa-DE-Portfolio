import Carousel from 'react-material-ui-carousel'
import Box from "@mui/material/Box";

export default function CarouselProject(): JSX.Element {
    const items = [{img: "/sons.jpeg"}, {img: "/mostafa1.png"}, {img: "/test.jpg"}]

    return (
        <Box>
            <Carousel>
                {items.map((item, idx) => (
                    <Box key={idx}>
                        <img src={item.img} width="100%" height='300' alt='test'/>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};
