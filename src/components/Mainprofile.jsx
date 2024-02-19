import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

const Mainprofile = () => {
  return (
    <>
      <Card>
        <div className=" position-relative container-fluid">
          <Card.Img variant="top" src="https://placebear.com/900/400" />

          <img
            src="https://placekitten.com/200"
            className="rounded-circle position-absolute bottom-0 start-0 img-fluid mw-100"
          />
        </div>

        <Card.Body className="pt-5 ">
          <Row>
            <Col xs={6}>
              <Card.Title>-Inserire nome profilo-</Card.Title>
              <Card.Text className="pt-0">-inserisci lavoro-</Card.Text>
              <p>
                inserisci info di contatto -
                <a src="#">Informazioni di contatto</a>
              </p>
              <p className="text-secondary">
                -inserisci numero collegamenti - collegamenti
              </p>
              <Button
                variant="light"
                className="border border-black rounded-pill py-1"
              >
                Altro
              </Button>
            </Col>
            <Col>
              <p>
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                  alt="logo"
                  width={40}
                />
                <span>EPICODE</span>
              </p>
              <p>
                <img src=""></img>
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Container fluid className="pt-3">
        <Row>
          <Col xs={12} md={9}>
            <Card>
              <Card.Body>
                <Card.Title>Informazioni</Card.Title>
                <Card.Text>-inserisci le info-</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Mainprofile;
