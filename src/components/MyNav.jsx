import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';


const MyNav = () => {

    const [ inputValue, setInputValue ] = useState('')
    const [ username, setUsername ] = useState('') 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(inputValue)
        setInputValue('')
    }
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
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
            <Nav.Link style={{fontSize: '1.5em'}} className='me-3'><i className="bi bi-house-door-fill"></i></Nav.Link>
            <Nav.Link style={{fontSize: '1.5em'}} className='me-3'><i className="bi bi-people-fill"></i></Nav.Link>
            <Nav.Link style={{fontSize: '1.5em'}} className='me-3'><i className="bi bi-briefcase-fill"></i></Nav.Link>
            <Nav.Link style={{fontSize: '1.5em'}} className='me-3'><i className="bi bi-chat-right-dots-fill"></i></Nav.Link>
            <Nav.Link style={{fontSize: '1.5em'}} className='me-3'><i className="bi bi-bell-fill"></i></Nav.Link>

            { username === '' ?(<Form onSubmit={handleSubmit}>
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

            <NavDropdown title="Tu" id="basic-nav-dropdown">
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
            )  }
          </Nav>
          <Nav>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNav