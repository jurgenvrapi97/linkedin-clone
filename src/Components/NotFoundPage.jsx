import { Button, Col, Container, Row } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <>
      <div className="harry-potter-bg">
        <Container className="harry-potter-container">
          <Row className="justify-content-center">
            <Col xs={10} sm={8} md={6} className="text-center">
              <img
                src="https://www.quotidiano.net/image-service/version/c:Y2E5ZDkxZmEtNzM4ZS00:YzE0OGE1/robbie-coltrane-era-rubeus-hagrid-in-harry-potter.webp?f=16%3A9&q=1&w=1560"
                alt="Harry Potter Logo"
                className="harry-potter-logo"
              />
              <h1 className="harry-potter-heading">Oops!</h1>
              <p className="harry-potter-text">
                Vi siete persi? Tornate alla home!
              </p>
              <Button href="/" variant="light" className="harry-potter-btn">
                Torna alla home
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NotFoundPage;
