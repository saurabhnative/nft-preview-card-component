import "./CardComponent.css";
export default function CardComponent() {
    function renderCards() {
        return (
            <div className="card-container box-contents">
                <div className="card-image-container">
                    <img src="images/image-equilibrium.jpg" alt="card" className="card-image" />
                </div>
                <div className="card-content">
                    <h1 className="card-title">Equilibrium #3429</h1>
                    <p className="card-description">Our equilibrium collection promotes balance and calm</p>
                    <div className="card-details-container">
                        <div className="details-container">
                            <img src="images/icon-ethereum.svg" alt="currency icon" />
                            <span className="price-text">0.041 ETH</span>
                        </div>
                        <div className="details-container">
                            <img src="images/icon-clock.svg" alt="time icon" />
                            <span className="time-text">3 days left</span>
                        </div>
                    </div>
                    <hr className="card-separator" />
                    <div className="creator-details-container">
                        <img src="images/image-avatar.png" alt="author" className="creator-image" />
                        <div className="creator-details-text">
                            <span className="creator-details-first-text">Creation of</span>
                            <span className="creator-details-last-text">Jules Wyvern</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="card">
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            <div className="hover-point"></div>
            {renderCards()}
        </div>
    )
}
