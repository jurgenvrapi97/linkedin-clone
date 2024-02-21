import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchProfile } from "../redux/action";

const Mainprofile = ({ selector }) => {
  // const dispatch = useDispatch()
  const profile = useSelector(selector);
  // useEffect(() =>{
  //   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUwMzI0ZjYwNTAwMTkzN2Q0NjkiLCJpYXQiOjE3MDgzMzIyOTEsImV4cCI6MTcwOTU0MTg5MX0.Dvp9xjhvg1QFWbOGGaWpXWP1M-7JHhQLM0zCwLO1doM"
  //   dispatch(fetchProfile(token))
  // },[dispatch])
  return (
    <>
      <Card>
        <div className=" position-relative container-fluid p-0">
          <Card.Img
            variant="top"
            className="img-fluid"
            src="https://placebear.com/900/400"
          />
          <div className="overflow-hidden">
            <img
              src={profile.image}
              className="rounded-circle position-absolute bottom-vai-sotto start-0 ms-3 mw-100 border border-light border-5 "
              width={"150px"}
              height={"150px"}
            />
          </div>

        </div>

        <Card.Body className="pt-5 mt-3">
          <Row>
            <Col xs={8}>
              <Card.Title>
                {profile.name} {profile.surname}
              </Card.Title>
              <Card.Text className="pt-0">{profile.title}</Card.Text>
              <p>{profile.area}</p>
              <a src="#">{profile.email}</a>
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
            <Col className="d-flex align-items-start">
              <div className="d-flex align-items-center">
                <p>
                  <img
                    src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                    alt="logo"
                    width={"40px"}
                    height={"40px"}
                  />
                </p>
                <p>EPICODE</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* <Container fluid className="pt-3"> */}
      {/* <Row>
          <Col xs={12} md={9}> */}
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Informazioni</Card.Title>
          <Card.Text>{profile.bio}</Card.Text>
        </Card.Body>
      </Card>
      {/* </Col>
        </Row> */}
      {/* </Container> */}
    </>
  );
};

export default Mainprofile;
