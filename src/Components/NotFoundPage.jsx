import { Button, Col, Container, Row } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <>
      <div className="harry-potter-bg">
        <Container className="harry-potter-container">
          <Row className="justify-content-center">
            <Col xs={10} sm={8} md={6} className="text-center">
              <img
                src="https://i.makeagif.com/media/4-20-2016/PaSLHb.gif"
                alt="Harry Potter Logo"
                className="harry-potter-logo"
              />
              <h1 className="harry-potter-heading">Oops! 404</h1>
              <h1>STEFANO CI MANCHERAI!😭</h1>
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
