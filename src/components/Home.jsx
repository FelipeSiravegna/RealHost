import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCharacters } from "../redux/actions";
import Card from "./Card";

export default function Home() {
    const dispatch = useDispatch()

    const personajes = useSelector((state) => state.characters);
    const [characters, setCharacters] = useState(personajes)

    useEffect(() => {
        dispatch(getCharacters());
    })

    useEffect(() => {
        setCharacters(personajes)
    }, [personajes])

    console.log("PERSONAJES /HOME", personajes)
    console.log("STATE /HOME", characters)

    return (
        <div>
            <h1>Personajes</h1>
            {/* {
                personajes.forEach((pj) => {
                    return (
                        <Card key={pj.id} id={pj.id} name={pj.name} species={pj.species} gender={pj.gender} />
                    )
                })
            } */}
        </div>
    )
}