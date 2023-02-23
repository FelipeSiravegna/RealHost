export default function Card({ name, username, email }) {
    return (
        <div className="Card">
            <h3>Name: {name}</h3>
            <h4>Username: {username}</h4>
            <h5>Email: {email}</h5>
        </div>
    )
}