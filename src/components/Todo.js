import{ useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';
function Todo (props) {
    const[modalIsOpen, setModalIsopen]=useState(false);
    function deleteHandler() 
    {
        setModalIsopen(true);
}
function closeModalHandler() {
    setModalIsopen(false);
}
    
    return(
        <div>
        <h1>My Todos</h1>
        <div className="card"> 
          <h2>{props.text}</h2>
          <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button>
          </div>
          
        </div>
        {modalIsOpen && (
        <Modal  onCancel={closeModalHandler} onConfirm={closeModalHandler}/> )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        
        
      </div > 
    );
}


export default Todo;  