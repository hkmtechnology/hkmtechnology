import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from "react-modal"
import { Button, Navbar,Form,FormControl } from 'react-bootstrap'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement("#root")
const Nav = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }



    return (
    <>
    <Modal isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
    </Modal>
   {/*  <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/"><i className="material-icons">home</i></Link></li>
        <li><Link to="/direct/inbox"><i className='far fa-paper-plane'></i></Link></li>
        <li><Link to="#" onClick={openModal}><i className='far fa-plus-square'></i></Link></li>
        <li><Link to="/explore"><i className='far fa-compass'></i></Link></li> 
        <li><Link to="/accounts/activity"><i className="material-icons">favorite_border</i></Link></li>
        <li><Link to="/profile"><i className='far fa-user-circle'></i></Link></li>
      </ul>
    </div>
  </nav> */}

<Navbar bg="light" expand="lg" className="fixed-top">
      <Link to="/" className="brand-logo position-absolute top-0 start-0 px-3">Instagram</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down position-absolute top-0 end-0">
        <li><Link to="/"><i className="material-icons">home</i></Link></li>
        <li><Link to="/direct/inbox"><i className='far fa-paper-plane'></i></Link></li>
        <li><Link to="#" onClick={openModal}><i className='far fa-plus-square'></i></Link></li>
        <li><Link to="/explore"><i className='far fa-compass'></i></Link></li> 
        <li><Link to="/accounts/activity"><i className="material-icons">favorite_border</i></Link></li>
        <li><Link to="/profile"><i className='far fa-user-circle'></i></Link></li>
      </ul>
      <Form className="d-flex position-absolute bottom-0 py-3 start-50">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
</Navbar>
  </>
    )
}

export default Nav
