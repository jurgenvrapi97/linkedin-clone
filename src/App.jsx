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
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const userSelector = (state) => state.user.user;
  const idSelector = (state) => state.idUser.user;
  const [tokenKey, setTokenKey] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-background">
        <Container>
          <Routes>
            <Route
              path="/profile"
              element={
                <>
                  <MyNav setTokenKey={setTokenKey} placeholder="Cerca" />
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
                  <MSGbar />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile/:userId"
              element={
                <>
                  <MyNav setTokenKey={setTokenKey} placeholder="Cerca" />
                  <Row>
                    <Col md={8} lg={8} style={{ marginTop: "6em" }}>
                      <Mainprofile selector={idSelector} />
                      <Experiences tokenKey={tokenKey} selector={idSelector} />
                    </Col>
                    <Col style={{ marginTop: "6em" }}>
                      <MyAside />
                    </Col>
                  </Row>
                  <MSGbar />
                  <Footer />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <MyNav setTokenKey={setTokenKey} placeholder="Cerca" />
                  <Home selector={userSelector} tokenKey={tokenKey} />
                  <MSGbar />
                </>
              }
            />
            <Route
              path="/jobs"
              element={
                <>
                  <MyNav
                    setTokenKey={setTokenKey}
                    placeholder="Cerca un lavoro, azienda, ..."
                  />
                  <Jobs />
                  <MSGbar />
                </>
              }
            />
            <Route
              path="/*"
              element={
                <>
                  <NotFoundPage />
                </>
              }
            />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
