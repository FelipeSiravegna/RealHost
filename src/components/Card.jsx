export default function Card({ id, name, species, gender }) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{gender}</h4>
            <h5>{species}</h5>
        </div>
    )
}