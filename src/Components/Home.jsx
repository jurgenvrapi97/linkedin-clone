import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FooterHome from "./FooterHome";
import PostHome from "./PostHome";
import { fetchAllPosts } from "../redux/action";

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

  const allPosts = useSelector((state) => state.allPosts.allPosts);
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.user.tokens);

  useEffect(() => {
    dispatch(fetchAllPosts(tokens.jurgen));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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

          <Col xs={12} md={6}>
            <Card className="d-none d-md-flex" md={12} lg={12}>
              <CardBody>
                <ListGroup>
                  <ListGroup.Item className="border border-0 d-flex">
                    <div>
                      <img
                        src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                        width="50px"
                        height="50px"
                      ></img>
                    </div>

                    <div className="  w-100 ">
                      <Form className="pt-2">
                        <Row>
                          <Col>
                            <Form.Control
                              className="rounded-5 "
                              placeholder="Avvia un post"
                            />
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </CardBody>
              <div className="d-flex justify-content-around pb-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-card-image"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <p>Contenuti multimediali</p>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <p>Evento</p>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-blockquote-left"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm.79-5.373q.168-.117.444-.275L3.524 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562Q2 7.587 2 7.969q0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282q.036-.305.123-.498a1.4 1.4 0 0 1 .252-.37 2 2 0 0 1 .346-.298zm2.167 0q.17-.117.445-.275L5.692 6q-.183.111-.452.287-.27.176-.51.428a2.4 2.4 0 0 0-.398.562q-.165.31-.164.692 0 .54.217.873.217.328.72.328.322 0 .504-.211a.7.7 0 0 0 .188-.463q0-.345-.211-.521-.205-.182-.568-.182h-.282a1.8 1.8 0 0 1 .118-.492q.087-.194.257-.375a2 2 0 0 1 .346-.3z" />
                  </svg>
                  <p>Scrivi un articolo</p>
                </div>
              </div>
            </Card>

            <Card className="d-none d-md-flex" md={12} lg={12}>
              <Card.Title className="p-3 ">Consigli per te</Card.Title>

              <CardBody className="p-1">
                <ListGroup>
                  {allPosts.length > 0 ? (
                    allPosts.slice(15, 45).map((post) => {
                      return (
                        <>
                          <PostHome key={post._id} post={post} />
                          <div className="px-5">
                            <hr />
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <h1>Nessun post creato</h1>
                    </>
                  )}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
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
