import React from "react";
import {useParams} from "react-router-dom";

const Users = () => {
    const params = useParams();

    return (<h1>Users Page for user id {params.userid} and user name {params.username}</h1>)
};

export default Users;