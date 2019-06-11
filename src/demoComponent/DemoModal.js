import React, {useState} from 'react';
import Modal from '../component/modal/Modal';

const DemoModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="mb-1">
        This is simple modal using bootstrap css.
        Clicking on this button will trigger modal.
      </div>
      <button className="btn btn-primary" onClick= {() => setOpen(true)}>Show Modal</button>
      {open ? 
      <Modal 
        isOpen={open} 
        closeHandler={() => setOpen(false)} 
        content="Hey how are  you guys !!"
        // footer={'footer text'}
        // className="modal-dialog-centered modal-xl"
        // modalStyle={{height: '80vh'}}
      >
      </Modal>
      : null
      }
    </div>
  )
}

export default DemoModal;
