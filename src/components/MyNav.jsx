import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../redux/action";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile, fetchGeneric } from '../redux/action'
import ListGroup from 'react-bootstrap/ListGroup';


const MyNav = () => {
  const [inputValue, setInputValue] = useState("");
  const tokens = useSelector((state) => {
    return state.user.tokens;
  });
  const username = useSelector((state) => {
    return state.user.user;
  });
  const dispatch = useDispatch();


    const [ inputValue, setInputValue ] = useState('')
    const [ inputSearch, setInputSearch ] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [showDropdown, setShowDropdown] = useState(false);
    const search = useSelector((state) => state.genericUser.user)
    const tokens = useSelector((state) => state.user.tokens)
    const username = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    const tokenKey = Object.keys(tokens).find((key) => key === inputValue);

    if (tokenKey) {
      const token = tokens[tokenKey];
      dispatch(fetchProfile(token));
    } else {
      alert("username errato!");
      console.log("token non valido");
    }
    setInputValue("");
  };

  console.log(username);
  return (
    <Navbar bg="light" data-bs-theme="light" className="p-0 mb-5">
      <Container className="justify-content-around">
        <Nav className="p-0">
          <Navbar.Brand className="me-2" href="#home">
            <img src="./logo.svg" alt="logo" style={{ height: "2em" }} />
          </Navbar.Brand>
          <InputGroup>
            <InputGroup.Text
              id="basic-addon1"
              className="m-0 border-0 rounded-start"
              style={{ backgroundColor: "#edf3f8" }}
            >
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              style={{ backgroundColor: "#edf3f8" }}
              className="border-0 rounded-end"
              placeholder="Cerca"
              aria-label="Cerca"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Nav>
        <Nav>
          <Nav.Link className="d-flex flex-column align-items-center me-0 me-lg-4">
            <div>
              <i
                className="bi bi-house-door-fill"
                style={{ fontSize: "1.3em" }}
              ></i>
            </div>
            <div className="fw-light" style={{ fontSize: "0.8em" }}>
              Home
            </div>
          </Nav.Link>


    const handleSubmit = async (e) => {
        e.preventDefault()

        const tokenKey = Object.keys(tokens).find(key => key === inputValue)

        if(tokenKey) {
          const token = tokens[tokenKey]
          dispatch(fetchProfile(token))

        } else {
          alert('username errato!')
          console.log('token non valido')
        }
    }


    const handleInputChange = async (e) => {
      const value = e.target.value;
      setInputSearch(value);
      const tokenKey = Object.keys(tokens).find(key => key === inputValue);
      const token = tokens[tokenKey]
      dispatch(fetchGeneric(token))
      setShowDropdown(value.trim().length > 0); 
      console.log(token)
  }
    console.log(username)

    useEffect(() => {
      // Nascondi il menu a tendina se entrambi l'input di ricerca e l'array dei risultati di ricerca sono vuoti
      if (inputSearch.trim().length === 0 && search.length === 0) {
          setShowDropdown(false);
      }
  }, [inputSearch, search]);

    return (
        <Navbar bg="light" data-bs-theme="light" className='p-0'>
        <Container className='justify-content-around'>
          <Nav className="p-0">
            <Navbar.Brand className='me-2' href="#home"><img src='./logo.svg' alt='logo' style={{height: '2em'}}/></Navbar.Brand>
            <Nav.Link className='d-flex d-lg-none flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-search" style={{fontSize: '1.3em'}}></i></div></Nav.Link>
            <InputGroup className='d-none d-lg-flex '>
                <InputGroup.Text id="basic-addon1" className='m-0 border-0 rounded-start' style={{backgroundColor: '#edf3f8'}}><i className="bi bi-search"></i></InputGroup.Text>
                <Form.Control
                style={{backgroundColor: '#edf3f8'}}
                className='border-0 rounded-end'
                placeholder="Cerca"
                aria-label="Cerca"
                aria-describedby="basic-addon1"
                value={inputSearch}
                onChange={handleInputChange}
                />
            </InputGroup>
            <ListGroup className='position-absolute top-100 ms-5 z-3 w-25 '>
             {/* Mostra il menu a tendina solo se ci sono risultati di ricerca */}
             {showDropdown && (search.filter((result) => result.name.toLowerCase().includes(inputSearch.toLowerCase()) || result.surname.toLowerCase().includes(inputSearch.toLowerCase())).map((result) => (
                <ListGroup.Item key={result._id} className='d-flex align-items-center '>
                  <div className='d-flex flex-grow-1'>
                    <h6 className='m-0 me-2'> {result.name} {result.surname} </h6>
                    <p className='m-0 me-2 fw-lighter '>{result.title}</p>
                  </div>
                  <img src={result.image} alt='userlogo' className='rounded-circle' height={'40px'} width={'40px'}/>               
                </ListGroup.Item>
            )))}
            </ListGroup>

          </Nav>


          <Nav className='d-flex align-items-center '>
          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-house-door-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light d-none d-lg-flex' style={{fontSize: '0.8em'}}>Home</div></Nav.Link>

          <Nav.Link className="d-flex flex-column align-items-center me-0 me-lg-4">
            <div>
              <i
                className="bi bi-people-fill"
                style={{ fontSize: "1.3em" }}
              ></i>
            </div>
            <div className="fw-light" style={{ fontSize: "0.8em" }}>
              Rete
            </div>
          </Nav.Link>
          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-people-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light d-none d-lg-flex' style={{fontSize: '0.8em'}}>Rete</div></Nav.Link>

          <Nav.Link className="d-flex flex-column align-items-center me-0 me-lg-4">
            <div>
              <i
                className="bi bi-briefcase-fill"
                style={{ fontSize: "1.3em" }}
              ></i>
            </div>
            <div className="fw-light" style={{ fontSize: "0.8em" }}>
              Lavoro
            </div>
          </Nav.Link>
          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-briefcase-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light d-none d-lg-flex' style={{fontSize: '0.8em'}}>Lavoro</div></Nav.Link>

          <Nav.Link className="d-flex flex-column align-items-center me-0 me-lg-4">
            <div>
              <i
                className="bi bi-chat-right-dots-fill"
                style={{ fontSize: "1.3em" }}
              ></i>
            </div>
            <div className="fw-light" style={{ fontSize: "0.8em" }}>
              Messagistica
            </div>
          </Nav.Link>
          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-chat-right-dots-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light d-none d-lg-flex' style={{fontSize: '0.8em'}}>Messagistica</div></Nav.Link>

          <Nav.Link className="d-flex flex-column align-items-center me-0 me-lg-4">
            <div>
              <i className="bi bi-bell-fill" style={{ fontSize: "1.3em" }}></i>
            </div>
            <div className="fw-light" style={{ fontSize: "0.8em" }}>
              Notifiche
            </div>
          </Nav.Link>
          <Nav.Link className='d-flex flex-column align-items-center me-0 me-lg-4'><div><i className="bi bi-bell-fill" style={{fontSize: '1.3em'}}></i></div>
          <div className='fw-light d-none d-lg-flex' style={{fontSize: '0.8em'}}>Notifiche</div></Nav.Link>

          {username === "" ? (
            <Form onSubmit={handleSubmit} className="nav-link">
              <InputGroup>
                <Form.Control
                  placeholder="Inserisci username"
                  aria-label="Inserisci username"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="submit">LOG</Button>
              </InputGroup>
            </Form>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center nav-link">
              <img
                src="https://placedog.net/30"
                alt="image-profile"
                className="rounded-circle"
              />
              <NavDropdown
                style={{ fontSize: "0.8em" }}
                title="Tu"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
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
            <div className='d-flex flex-column justify-content-center align-items-center nav-link nav-item dropdown'>
              <NavDropdown  style={{fontSize: '0.8em'}} title={<img src={username.image} alt='username logo' height={'25px'} className='rounded-circle'/>} id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">
                  <div className='d-flex flex-column '>
                    <div className='d-flex'>
                      <img src={username.image} alt={username.id} height={'50px'} className='me-2 rounded-circle '/>
                      <div className='d-flex flex-column '>
                        <h6 className='mb-1'>{username.name} {username.surname}</h6>
                        <p className='fw-light' style={{fontSize: '0.9em'}}>{username.title}</p>
                      </div>
                    </div>
                    <Button className='p-0' variant="outline-primary">Visualizza profilo</Button>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <h6 className='ms-3'>Account</h6>
                <NavDropdown.Item href="#action/3.2" className='fw-lighter' style={{fontSize: '0.9em'}}>
                  Impostazioni e privacy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className='fw-lighter' style={{fontSize: '0.9em'}}>Guida</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='fw-lighter' style={{fontSize: '0.9em'}}>
                  Lingua
                </NavDropdown.Item>
                <NavDropdown.Divider />
               <h6 className='ms-3'>Gestisci</h6>
               <NavDropdown.Item href="#action/3.5" className='fw-lighter' style={{fontSize: '0.9em'}}>
                  Post e attività
                </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.5" className='fw-lighter' style={{fontSize: '0.9em'}}>
                  Account per la pubblicazione di offerte
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5" className='fw-lighter' style={{fontSize: '0.9em'}}>
                  Esci
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          )}
        </Nav>
        <Nav>
          <Nav.Link>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <i
                className="bi bi-grid-3x3-gap-fill"
                style={{ fontSize: "1.5em" }}
              ></i>
            </div>
            <div className="fw-light" style={{ fontSize: "0.8em" }}>
              Per le aziende<i className="bi bi-caret-down-fill"></i>
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
            )  }
          </Nav>
          <Nav>
            <Nav.Link ><div className='d-flex flex-column justify-content-center align-items-center'><i className="bi bi-grid-3x3-gap-fill" style={{fontSize: '1.5em'}}></i></div>
            <div className='fw-light d-none d-lg-flex' style={{fontSize: '0.8em'}}>Per le aziende<i className="bi bi-caret-down-fill"></i></div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNav;
