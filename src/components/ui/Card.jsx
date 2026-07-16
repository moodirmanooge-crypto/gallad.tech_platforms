import "./Card.css";

const Card = ({ children }) => {
    return (
        <div className="gtp-card">
            {children}
        </div>
    );
};

export default Card;