import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { CardBody, Container, ListGroup, Row } from "react-bootstrap";

const MyAside = () => {
  return (
    <Container>
      <Row>
        <Col xs={5} md={4} lg={5}>
          <Card>
            <Card.Title className="p-3 fs-6">
              Persone che potresti conoscere
            </Card.Title>
            <Card.Subtitle className="p-3 fs-6">
              Dalla tua scuola o università
            </Card.Subtitle>
            <CardBody className="p-1">
              <ListGroup>
                <ListGroup.Item className="border border-0 d-flex">
                  <div>
                    <img
                      className="rounded-circle"
                      src="https://placekitten.com/150"
                      width="50px"
                      height="50px"
                    ></img>
                  </div>

                  <div className="ms-3">
                    <h6>Alessia</h6>
                    <p>Contatrice di arachidi</p>
                    <Button
                      variant="outline-secondary"
                      className="collegati-button"
                      size="sm"
                    >
                      <i className="bi bi-person-plus"></i>
                      Collegati
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </CardBody>

            <Button variant="light">Mostra tutto</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MyAside;
