import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/actions";
import Card from "../Card/Card";

export default function Home() {
    const dispatch = useDispatch()

    const allUsers = useSelector((state) => state.usersData.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
        <div>
            {
                allUsers.map(user => {
                    return (
                        <Card key={user.id} name={user.name} username={user.username} email={user.email} />
                    )
                })
            }
        </div>
    )
}