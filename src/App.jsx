import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/main.css'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyAside from './components/MyAside'
import Mainprofile from './components/Mainprofile'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import MyNav from './components/MyNav'
import Footer from './components/Footer'
import MSGbar from './components/MSGbar'
import Experiences from './components/Experiences'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddExp from './components/AddExp'
import Test from './components/Test'
import ImageUpload from './components/ImageUpload'

function App() {
  const userSelector = (state) => state.user.user
  const idSelector = (state) => state.idUser.user
  return (
    <BrowserRouter>
      <div className="bg-background">
        <MyNav />

        <Container>
          <Routes>
            <Route
              path="/profile"
              element={
                <>
                  <Row>
                    <Col md={8} lg={8}>
                      <Mainprofile selector={userSelector} />
                      <Experiences />
                      <AddExp />
                      <ImageUpload />
                      <Test />
                    </Col>
                    <Col>
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
                  <Row>
                    <Col md={8} lg={8}>
                      <Mainprofile selector={idSelector} />
                      <Experiences />
                    </Col>
                    <Col>
                      <MyAside />
                    </Col>
                  </Row>
                  <MSGbar />
                  <Footer />
                </>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
