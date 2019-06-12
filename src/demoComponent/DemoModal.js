import React, {useState} from 'react';
import Modal from '../component/modal/Modal';

const DemoModal = () => {
  const [open, setOpen] = useState(false);
  const [openLargeModal, setOpenLargeModal] = useState(false);
  const [openBModal, setOpenBModal] = useState(false);
  const [openFCModal, setOpenFCModal] = useState(false)
  return (
    <div>
      <div className="mb-1 h5">
        * This is simple modal using bootstrap css.
        Clicking on this button will trigger modal.

          <button className="btn btn-link " onClick= {() => setOpen(true)}>Show Modal</button>
      </div>
      
      <div className="mb-1 h5">
        * Large modal with <code>modal-lg</code> class. 
          <button className="btn btn-link" onClick= {() => setOpenLargeModal(true)}>
            Show Large Modal
          </button>
      </div>

      <div className="mb-1 h5">
        * bootstrap modal
          <button className="btn btn-link" onClick= {() => setOpenBModal(true)}>
            Show Old Bootstrap Modal.
          </button>
      </div>

      <div className="mb-1 h5">
        * Customised and scrollable.
          <button className="btn btn-link" onClick= {() => setOpenFCModal(true)}>
            show
          </button>
      </div>


      <Modal 
        isOpen={open} 
        closeHandler={() => setOpen(false)} 
        content="Hey how are  you guys !!"
      />

       
      <Modal 
        className="modal-lg"
        isOpen={openLargeModal} 
        closeHandler={() => setOpenLargeModal(false)} 
        content="Hey how are  you guys !!"
      />

      
      <Modal 
        header="Modal Header"
        isOpen={openBModal} 
        closeHandler={() => setOpenBModal(false)} 
        content="This is bootstrap style"
        footer="Modal footer"
        showTopBorder={true}
        showCloseButton={true}
      />


      <Modal isOpen={openFCModal} closeHandler={() => setOpenFCModal(false)} className="modal-lg">
        <div>
          <div className="p-2 m-5">
            <h1>Lorem Ipsum</h1>
            <div className="text-muted" style={{fontSize: '0.8rem'}}>
              *scroll to see full content.
            </div>
            <a href="#" onClick={() => setOpenFCModal(false)}>
              close
            </a>
          </div>
          <div className="p-2 text-muted">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default DemoModal;
