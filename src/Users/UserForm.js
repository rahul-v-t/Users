import React,{useContext} from 'react';
import {UserState} from './model'

export default function UserForm(){
    const{ data, setData,
        getAllUsers,
        type, setType} = useContext(UserState)
    return(
        <>
        {type}
        </>
    )

}

