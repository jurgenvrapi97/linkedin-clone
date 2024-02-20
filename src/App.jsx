import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import MyAside from './components/MyAside'
import Mainprofile from './components/Mainprofile'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import MyNav from './components/MyNav'
import AddExp from './components/AddExp'

function App() {
  return (
    <div className="bg-background">
      <MyNav />
      <Container>
        <Row>
          <Col md={8} lg={8}>
            <Mainprofile />
            <AddExp />
          </Col>
          <Col>
            <MyAside />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
