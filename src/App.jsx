import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/main.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import MyAside from "./components/MyAside";
// import Mainprofile from "./components/Mainprofile";
// import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./components/MyNav";
// import Footer from "./components/Footer";
import MSGbar from "./components/MSGbar";
// import Experiences from "./components/Experiences";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-background">
      {/* <MyNav />
      <Container>
        <Row>
          <Col md={8} lg={8}>
            <Mainprofile />
            <Experiences />
          </Col>
          <Col>
            <MyAside />
          </Col>
        </Row>
        <MSGbar />
        <Footer />
      </Container> */}
      <BrowserRouter>
        <MyNav />
        <MSGbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
