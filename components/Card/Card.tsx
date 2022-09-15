import {CursorContainer} from "@/components/Card/Card.styled";

export default function Card(): JSX.Element {
    const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <CursorContainer>
            {fakeArray.map((item, index) => (
                <div key={index} className="cardBody">
                    <div className="card__overlay">
                        <div className="overlay__text">
                            <h3>Unicorns Store</h3>
                            <p className="description">
                                Fully-Featured E-Commerce Application, where you can order anything
                                you want with simple steps.
                            </p>
                            <button className="btn">Learn More</button>
                        </div>
                    </div>
                </div>
            ))}
        </CursorContainer>
    );
};
