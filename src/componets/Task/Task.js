import React from 'react';
import {ReactComponent as Check } from '../../assets/img/check.svg';
import {ReactComponent as Delete} from '../../assets/img/delete.svg';
import firebase from '../../utils/firebase';
import './Task.scss';

const db=firebase.firestore(firebase);

export default function Task(props)
{ 
    const {task,setReloadTask}=props;
   
    const completeTask=()=>{

        db.collection("task")
        .doc(task.id)
        .update({
            completed:!task.completed
        })
        .then(()=>{
            setReloadTask(true);
        })
        console.log(task.id);
        console.log(task.name);
    }

    const deleteTask=()=> {  

        db.collection("task")
        .doc(task.id)
        .delete()
        .then(()=>{
            setReloadTask(true);
        })
        console.log(task.id);
        console.log(task.name);

     }


    return (
        <div className="task">
            <div>
                <Check className={task.completed?"completed":""}  onClick={completeTask}/>
            </div>
            <div>
            {task.name}
            </div>
            <div>
                <Delete onClick={deleteTask} />
            </div>
        </div>
    );
}