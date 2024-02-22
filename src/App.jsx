import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/main.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyAside from "./components/MyAside";
import Mainprofile from "./components/Mainprofile";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import MSGbar from "./components/MSGbar";
import Experiences from "./components/Experiences";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import Jobs from "./components/Jobs";

function App() {
  const userSelector = (state) => state.user.user;
  const idSelector = (state) => state.idUser.user;
  const [tokenKey, setTokenKey] = useState("");
  console.log("il token è:", tokenKey);

  return (
    <BrowserRouter>
      <div className="bg-background">
        <MyNav setTokenKey={setTokenKey} />

        <Container>
          <Routes>
            <Route
              path="/profile"
              element={
                <>
                  <Row className="mt-5">
                    <Col md={8} lg={8} className="mt-5">
                      <Mainprofile selector={userSelector} />
                      <Experiences
                        tokenKey={tokenKey}
                        selector={userSelector}
                      />
                    </Col>
                    <Col className="mt-5">
                      <MyAside />
                    </Col>
                  </Row>
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile/:userId"
              element={
                <>
                  <Row>
                    <Col md={8} lg={8} style={{ marginTop: "6em" }}>
                      <Mainprofile selector={idSelector} />
                      <Experiences tokenKey={tokenKey} selector={idSelector} />
                    </Col>
                    <Col style={{ marginTop: "6em" }}>
                      <MyAside />
                    </Col>
                  </Row>
                  <Footer />
                </>
              }
            />
            <Route path="/" element={<Home selector={userSelector} />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
          <MSGbar />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
