import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile } from '../redux/action'


const MyNav = () => {

    const [ inputValue, setInputValue ] = useState('')
    const tokens = useSelector((state) => {
      return state.user.tokens
    })
    const username = useSelector((state) => {
      return state.user.user
    })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const tokenKey = Object.keys(tokens).find(key => key === inputValue)

        if(tokenKey) {
          const token = tokens[tokenKey]
          dispatch(fetchProfile(token))

        } else {
          alert('username errato!')
          console.log('token non valido')
        }
        setInputValue('')
    }

    console.log(username)
    return (
        <Navbar bg="light" data-bs-theme="light" className='p-0'>
        <Container className='justify-content-around'>
          <Nav className="p-0">
            <Navbar.Brand className='me-2' href="#home"><img src='./logo.svg' alt='logo' style={{height: '2em'}}/></Navbar.Brand>
            <InputGroup>
                <InputGroup.Text id="basic-addon1" className='m-0 border-0 rounded-start' style={{backgroundColor: '#edf3f8'}}><i className="bi bi-search"></i></InputGroup.Text>
                <Form.Control
                style={{backgroundColor: '#edf3f8'}}
                className='border-0 rounded-end'
                placeholder="Cerca"
                aria-label="Cerca"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
          </Nav>
          <Nav>
          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-house-door-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light' style={{fontSize: '0.8em'}}>Home</div></Nav.Link>

          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-people-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light' style={{fontSize: '0.8em'}}>Rete</div></Nav.Link>

          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-briefcase-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light' style={{fontSize: '0.8em'}}>Lavoro</div></Nav.Link>

          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-chat-right-dots-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light' style={{fontSize: '0.8em'}}>Messagistica</div></Nav.Link>

          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-bell-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light' style={{fontSize: '0.8em'}}>Notifiche</div></Nav.Link>

            { username ===  '' ? (<Form onSubmit={handleSubmit} className='nav-link'>
                    <InputGroup>
                        <Form.Control
                        placeholder="Inserisci username"
                        aria-label="Inserisci username"
                        required
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button type='submit'>LOG</Button>
                    </InputGroup>
            </Form>) : (
            <div className='d-flex flex-column justify-content-center align-items-center nav-link'>
              <img src='https://placedog.net/30' alt='image-profile' className='rounded-circle'/>
              <NavDropdown  style={{fontSize: '0.8em'}} title="Tu" id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            )  }
          </Nav>
          <Nav>
            <Nav.Link ><div className='d-flex flex-column justify-content-center align-items-center'><i className="bi bi-grid-3x3-gap-fill" style={{fontSize: '1.5em'}}></i></div>
            <div className='fw-light' style={{fontSize: '0.8em'}}>Per le aziende<i className="bi bi-caret-down-fill"></i></div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNav