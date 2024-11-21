import './Card.css';

function Card() {

    return (
        <div className="card">
            <div className="image-box">
                <img className="image" src="https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="text-box">
                <h2 className="card-title">Card title</h2>
                <p className="card-description">
                    Description of the card Description of the card Description of the card Description of the card Description of the card Description of the card
                </p>
            </div>
        </div>

    )
}

export default Card;