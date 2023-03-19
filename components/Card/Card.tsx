import {CardContainer} from "@/components/Card/Card.styled";
import DialogProject from "@/components/Dialog";

export default function Card(): JSX.Element {
    return (
        <CardContainer>
            {Array.from([1, 2, 3, 4, 5]).map((item, index) => (
                <div key={index} className="cardBody">
                    <div className="cardOverlay">
                        <div className="overlayText">
                            <h3>Unicorns Store</h3>
                            <p className="description">
                                Fully-Featured E-Commerce Application, where you can order anything
                                you want with simple steps.
                            </p>
                            <DialogProject/>
                        </div>
                    </div>
                </div>
            ))}
        </CardContainer>
    );
};
