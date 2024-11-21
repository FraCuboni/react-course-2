import './Card.css';

function Card({ title, description, imgURL }) {

    // creo proprietà della card


    return (
        <div className="card">
            <div className="image-box">
                <img className="image" src={imgURL} alt="" />
            </div>
            <div className="text-box">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>

    )
}
// function Card(props) {

//     // creo proprietà della card
//     const title = props.title;
//     const description = props.desc;
//     const imgURL = props.imgURL;

//     return (
//         <div className="card">
//             <div className="image-box">
//                 <img className="image" src={imgURL} alt="" />
//             </div>
//             <div className="text-box">
//                 <h2 className="card-title">{title}</h2>
//                 <p className="card-description">{description}</p>
//             </div>
//         </div>

//     )
// }

export default Card;