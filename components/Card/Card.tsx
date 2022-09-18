import {CardContainer} from "@/components/Card/Card.styled";
import DialogProject from "@/components/Dialog";

export default function Card(): JSX.Element {
    const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <CardContainer>
            {fakeArray.map((item, index) => (
                <div key={index} className="cardBody">
                    <div className="card__overlay">
                        <div className="overlay__text">
                            <h3>Unicorns Store</h3>
                            <p className="description">
                                Fully-Featured E-Commerce Application, where you can order anything
                                you want with simple steps.
                            </p>
                            <DialogProject />
                        </div>
                    </div>
                </div>
            ))}
        </CardContainer>
    );
};
