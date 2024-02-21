import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperiencesCreate } from "../redux/action";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";

const AddExp = () => {
  //state modale
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const username = useSelector((state) => {
    return state.user.user;
  });
  const tokens = useSelector((state) => {
    return state.user.tokens;
  });

  const [form, setForm] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username.name);
    setShow(false);
    dispatch(
      fetchExperiencesCreate(
        tokens[username.name.toLowerCase()],
        username._id,
        form
      )
    );
  };

  return (
    <>
      <Button variant="outline-secondary" className="border border-0 rounded-circle" onClick={handleShow}>
      <i className="bi bi-plus-lg fs-5"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="bg-background" closeButton>
          <Modal.Title>Inserisci una nuova esperienza</Modal.Title>
        </Modal.Header>
        <Container className="py-2">
          <form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Col className="d-flex flex-column">
                <label htmlFor="role">Ruolo</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                />
              </Col>

              <Col className="d-flex flex-column">
                <label htmlFor="company">Compagnia</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2 justify-content-center">
              <Col className="d-flex flex-column">
                <label htmlFor="startDate">Data di inizio</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                />
              </Col>
              <Col className="d-flex flex-column">
                <label className="d-block" htmlFor="endDate">
                  Data di fine
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="aligne-item-center mb-3">
              <Col className="d-flex flex-column">
                <label className="d-block" htmlFor="area">
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                />
              </Col>
              <Col className="d-flex col-12 flex-column">
                {" "}
                <label htmlFor="description">Descrizione</label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col className="col-3 d-flex justify-content-end">
                <Button type="submit">AGGIUNGI</Button>
              </Col>
            </Row>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default AddExp;
