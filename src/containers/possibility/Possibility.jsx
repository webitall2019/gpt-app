import "./possibility.css";
import possibilityImage from "../../assets/possibility-image.svg";

export default function Possibility() {
    return (
        <div className="possibility section__padding" id="possibility">
            <div className="possibility__container">
                <div className="possibility__image">
                    <img src={possibilityImage} alt="girl-with-ai" />
                </div>
                <div className="possibility__content">
                    <p className="text-color pre-title">
                        Request Early Access to Get Started
                    </p>
                    <h2 className="gradient__text">
                        The possibilities are beyond your imagination
                    </h2>
                    <p className="text-color">
                        Yet bed any for travelling assistance indulgence
                        unpleasing. Not thoughts all exercise blessing.
                        Indulgence way everything joy alteration boisterous the
                        attachment. Party we years to order allow asked of.
                    </p>
                    <button type="button" className="request__button">
                        Request Early Access to Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
