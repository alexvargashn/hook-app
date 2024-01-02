import { useEffect, useState } from "react"
import { Message } from "./Message";

const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'alexv7142',
        email: 'alexv7142@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        })
    }

    useEffect( () => {
        console.log('useEffect called!')
    }, []);

    useEffect( () => {
        console.log('formState has changed!')
    }, [formState]);

  return (
    <>
        <h1>Simple Form</h1>
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
        {(username === 'alexv7142') && <Message />}
    </>
  )
}

export default SimpleForm