import { useForm } from "../hooks"


export const TodoAdd = ( { onNewTodo } ) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = ( Event ) => {
        Event.preventDefault();
        if(description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        onNewTodo(newTodo)
        onResetForm();
    }

    return (
        <form className='' onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder='¿Qué hay que hacer?'
                className='form-control'
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-2'
            >
                Agregar
            </button>
        </form>
    )
}
