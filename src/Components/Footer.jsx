import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="mt-5 pb-4">
      <Row className="text-secondary">
        <Col xs={12} md={6}>
          <Row>
            <Col>
              <ul className="list-unstyled ">
                <li>
                  <a href="#" className="a b fw-bold">
                    Informazioni
                  </a>
                </li>
                <li>
                  <a href="#" className="a b fw-bold">
                    Linee guida della community
                  </a>
                </li>
                <li>
                  <DropdownButton
                    title="Dropdown up"
                    id="dropdown-button-drop-up"
                    variant="transparent"
                    className="a border-secondary"
                  >
                    <Dropdown.Item eventKey="1" className="fw-bold b">
                      Informativa sulla privacy
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" className="fw-bold b">
                      Contratta di licenza
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" className="fw-bold b">
                      Termini e condizioni sulle pagine
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="4" className="fw-bold b">
                      Informativa sui cookie
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="5" className="fw-bold b">
                      Informativa sul copyright
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="a b fw-bold">
                    Accessiblità
                  </a>
                </li>
                <li>
                  <a href="#" className="a b fw-bold">
                    Carriera
                  </a>
                </li>
                <li>
                  <a href="#" className="a b fw-bold">
                    Opzioni per gli annunci pubblicitari
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="a b fw-bold">
                    Talent Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="a b fw-bold">
                    Soluzioni di marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="a b fw-bold">
                    Pubblicitò
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="a b fw-bold">
                    Sales Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="a b fw-bold">
                    LCentro sicurezza
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="a b fw-bold">
                    Mobile
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="a b fw-bold">
                    Piccole imprese
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="align-items-center">
            <Col xs={2}>
              <i className="text-black fs-3 bi bi-question-circle-fill"></i>
            </Col>
            <Col xs={10}>
              <Row className=" flex-column ">
                <Col className="fw-bold">
                  <a href="#" className="a fw-bold">
                    Domande?
                  </a>
                </Col>
                <Col className="b">Visita il nostro Centro assistenza</Col>
              </Row>
            </Col>
          </Row>
          <Row className="align-items-center my-3">
            <Col xs={2}>
              <i className="text-black fs-3 bi bi-gear-fill"></i>
            </Col>
            <Col xs={10}>
              <Row className=" flex-column ">
                <Col className="fw-bold">
                  <a href="#" className="a fw-bold">
                    Gestisci il tuo account e la tua privacy
                  </a>
                </Col>
                <Col className="b">Vai alle impostazioni</Col>
              </Row>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={2}>
              <i className="text-black fs-3 bi bi-shield-shaded"></i>
            </Col>
            <Col xs={10}>
              <Row className=" flex-column ">
                <Col className="fw-bold">
                  <a href="#" className="a fw-bold">
                    Trasparenza sui contenuti consigliati
                  </a>
                </Col>
                <Col className="b">
                  Scopri di più sui contenuti consigliati.
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="b">
          Seleziona lingua
          <Form.Select>
            <option>Italiano</option>
            <option value="1">Inglese</option>
            <option value="2">Spagnolo</option>
            <option value="3">Francese</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#" className="text-decoration-none text-secondary b">
            LinkedIn-Fake Corporation &copy; 2024
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
