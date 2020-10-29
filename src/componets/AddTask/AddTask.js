import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {ReactComponent as Send} from '../../assets/img/send.svg';
import './AddTask.scss';

export default  function AddTask()
{
    const onSubmit=()=>{
        console.log("Formulario enviado...");
    }


    return( 
            <>
            <Form onSubmit={onSubmit}  className="add-task">
                <input 
                type="text"
                placeholder="Nueva Tarea...!"
                />
                <Button type="submit">
                    <Send/>
                </Button>

            </Form>
                
            </>
    );
}