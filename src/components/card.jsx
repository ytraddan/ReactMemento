export default function Card({ image, selected, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className={selected && "selected"}>
                <img src={image} alt="card" className="card-face" />
                <img src="/assets/fireship.png" alt="cover" className="card-back" />
            </div>
        </div>
    )
}