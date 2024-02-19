import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyAside from "./components/MyAside";
import Mainprofile from "./components/Mainprofile";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="bg-background">
      <Container>
        <Row>
          <Col md={8} lg={8}>
            <Mainprofile />
          </Col>
          <Col>
            <MyAside />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
