import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const {username, email, password} = formState;

    useEffect( () => {
        console.log('useEffect called!')
    }, []);

    useEffect( () => {
        console.log('formState has changed!')
    }, [formState]);

  return (
    <>
        <h1>Form With Custom Hook</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />
    </>
  )
}