import { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FooterHome from "./FooterHome";

const Home = ({ selector }) => {
  const [show, setShow] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  const toggleShowViewMore = () => {
    setShow((prevState) => !prevState);
  };
  const toggleShowViewMoreArticles = () => {
    setShowArticle((prevState) => !prevState);
  };
  const profile = useSelector(selector);
  return (
    <>
      <Container>
        <Row className="mt-5">
          {/* sezione card sx */}
          <Col xs={12} md={3}>
            <Row className="g-2 flex-column ">
              <Col>
                <Card>
                  <div className="position-relative d-flex justify-content-center align-items-end">
                    <Card.Img
                      variant="top"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGnfp87Tbfb5StD2ErWUl7-sHnfPLJKdCxQ&usqp=CAU"
                      className="c-i"
                    />

                    <img
                      src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                      alt=""
                      className=" rounded-5 position-absolute i-h border  border-2 border-white"
                    />
                  </div>
                  <Card.Body className="p-0 mt-2 ">
                    <Card.Title className="text-center pt-4">
                      <a href="#" className="text-black name-underline">
                        {profile.name ? profile.name : "Loggati"}
                      </a>
                    </Card.Title>
                    <Card.Text className="text-center fs-sm">
                      {profile.bio}
                    </Card.Text>
                    <hr className="m-0" />
                    <ListGroup variant="flush">
                      <ListGroup.Item className="p-0">
                        <div className="d-flex justify-content-between h-grey p-3">
                          <div className="d-flex flex-column fs-sm fw-bold ">
                            <p className="m-0 text-secondary">Collegamenti</p>
                            <p className="m-0">Espandi la tua rete</p>
                          </div>
                          <div>
                            <i className="bi bi-person-plus-fill"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="p-0">
                        <div className="fs-sm h-grey p-3">
                          <p className="text-secondary m-0">
                            Accedi a strumenti e informazioni in esclusiva
                          </p>
                          <p className="p fw-bold m-0">
                            Prova premium per 0 EUR
                          </p>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item className="fs-sm fw-bold h-grey mb-1">
                        <i className="bi bi-bookmark-fill pe-3"></i>I miei
                        elementi
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>

              {show ? (
                <Col>
                  <div className="border border-1 border-dark-subtle rounded-2 bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="p-3 fs-sm fw-bold ">
                        <ul className="list-unstyled">
                          <li className="py-2">
                            <a href="#" className=" c-blue p ">
                              Gruppi
                            </a>
                          </li>
                          <li className="py-2">
                            <a href="#" className=" c-blue p">
                              Eventi
                            </a>
                          </li>
                          <li className="py-2">
                            <a href="#" className=" c-blue p">
                              Hashtag seguiti
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Button className="rounded-5 border-0 bg-transparent h">
                          <i className="bi bi-plus text-black fs-3"></i>
                        </Button>
                      </div>
                    </div>
                    <hr className="m-0" />
                    <div className="text-center text-secondary py-2 h-grey">
                      <a
                        href="#"
                        className="text-decoration-none text-secondary"
                      >
                        Scopri di più
                      </a>
                    </div>
                  </div>
                </Col>
              ) : (
                ""
              )}
              <Button
                className=" text-secondary bg-transparent border-0 mb-2 b-h fw-bold"
                onClick={toggleShowViewMore}
              >
                {show ? "Meno dettagli" : "Vedi altro"}
                {show ? (
                  <i className="bi bi-caret-up-fill ps-2"></i>
                ) : (
                  <i className="bi bi-caret-down-fill ps-2"></i>
                )}
              </Button>
            </Row>
          </Col>
          {/* sezione post centrale*/}
          <Col xs={12} md={6}></Col>
          {/* sezione card dx */}
          <Col xs={3}>
            <Col>
              <div className="border border-1 rounded-2 bg-white">
                <div className={showArticle ? "s-art p-3" : "s-art-min p-3"}>
                  <div className="d-flex justify-content-between ">
                    <h5>LinkedIn Notizie</h5>
                    <i className="bi bi-info-square-fill text-black"></i>
                  </div>
                  <div>
                    {/* lista notizie */}
                    <ul className="m-0  px-3">
                      <li className="fw-bold">
                        Top Voices Lavoro: 6 temi da approffondire
                        <p className="p-li">Notizie principali</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Il richiamo della montagna
                        <p className="p-li">18 ore fa</p>
                      </li>
                      <li className="fw-bold">
                        Allarme smog in Pianura Padana
                        <p className="p-li">37 min fa</p>
                      </li>
                      <li className="fw-bold">
                        Come se le passano i pendolari
                        <p className="p-li">3 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                      <li className="fw-bold">
                        Come si costruisce un leadreship
                        <p className="p-li">4 giorni fa</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Button
                    className=" text-secondary bg-transparent border-0 mb-2 b-h fw-bold ps-3"
                    onClick={toggleShowViewMoreArticles}
                  >
                    {showArticle ? "Meno dettagli" : "Vedi altro"}
                    {showArticle ? (
                      <i className="bi bi-caret-up-fill ps-2"></i>
                    ) : (
                      <i className="bi bi-caret-down-fill ps-2"></i>
                    )}
                  </Button>
                </div>
              </div>
            </Col>
            <Col>
              <hr />
              <FooterHome />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
