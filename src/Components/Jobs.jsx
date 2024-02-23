import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs, fetchCompanyAllJobs, fetchCategoryAllJobs } from "../redux/action";
import {  Button, Card, Col, Container, Modal, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Jobs = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.allJobs.allJobs);
  console.log(allJobs)
  const queryJobs = useSelector((state) => state.allSearchJobs.allSearchJobs)
  const companies = useSelector((state) => state.allCompanyJobs.allCompanyJobs)
  const categories = useSelector((state)=> state.allCategoryJobs.allCategoryJobs)

  const [showCategory, setShowCategory] = useState(false)
  const [showCompany, setShowCompany] = useState(false);

  const handleCloseCompany = () => setShowCompany(false);
  const handleShowCompany = (value) => {
    setShowCompany(true);
    dispatch(fetchCompanyAllJobs(value))
  }

  const handleCloseCategory = () => setShowCategory(false)
  const handleShowCategory = (value) => {
    setShowCategory(true)
    dispatch(fetchCategoryAllJobs(value))
    console.log(value)
  }

  useEffect(() => {
    dispatch(fetchAllJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Container className="pt-c">
      <Row className="py-5 g-3 flex-column align-items-center gy-3">
        {queryJobs.length > 0 ? (
          <>
          <h1 className="text-center mt-2">Risultati di ricerca</h1>
          {queryJobs.slice(0, 30).map((job)=> {
          return (
            <Col className="bg-white p-0 border border-1 rounded-2 " xs={6} key={job._id}>
              <Card className="px-4" >
                <Card.Body >
                  <Card.Title className="mb-3">
                    <Link
                      to={job.url}
                      className="a d-flex justify-content-between"
                    >
                      <h5 className="py-2 mb-0 ">{job.title}</h5>
                    </Link>
                    <h6 className="fw-bold btn" onClick={() => handleShowCompany(job.company_name)}>{job.company_name}</h6>
                    <Modal show={showCompany} onHide={handleCloseCompany}>
                      <Modal.Header closeButton>
                        <Modal.Title>Altri annunci di questa azienda:</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ maxHeight: "500px", overflowY: "auto" }}>{companies.slice(0,20).map((company)=>{
                        return (
                          <Col
                          xs={12}
                          key={company._id}
                          className="px-3 pt-3 bg-white rounded-2"
                        >
                          <Card className="px-4">
                            <Card.Body >
                              <Card.Title>
                                <Link
                                  to={company.url}
                                  className="a d-flex justify-content-between"
                                >
                                  <h5 className="py-2">{company.title}</h5>
                                </Link>
                                <h6 className="fw-bold">{company.company_name}</h6>
                              </Card.Title>
                              <div className="d-flex align-items-center ">
                              <Card.Subtitle className="mb-2 text-muted me-2">Category:</Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted ">{company.category}</Card.Subtitle>
                              </div>
                              <div className="d-flex align-items-center ">
                              <Card.Subtitle className="mb-2 text-muted me-2">Location: </Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted"> {company.candidate_required_location}</Card.Subtitle>
                              </div>
                              <Card.Link href='boh' className="nav-link">{company.url}</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        )                        
                      })}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseCompany}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseCompany}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Title>
                  <div className="d-flex align-items-center ">
                      <Card.Subtitle className="mb-2 text-muted me-2">Category:</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted btn" onClick={() => handleShowCategory(job.category)}>{job.category}</Card.Subtitle>
                      <Modal show={showCategory} onHide={handleCloseCategory}>
                      <Modal.Header closeButton>
                        <Modal.Title>Altri annunci per questa categoria:</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ maxHeight: "500px", overflowY: "auto" }}>{categories.slice(0,20).map((category)=>{
                        return (
                          <Col
                          xs={12}
                          key={category._id}
                          className="px-3 pt-3 bg-white rounded-2"
                        >
                          <Card className="px-4">
                            <Card.Body >
                              <Card.Title>
                                <Link
                                  to={category.url}
                                  className="a d-flex justify-content-between"
                                >
                                  <h5 className="py-2">{category.title}</h5>
                                </Link>
                                <h6 className="fw-bold">{category.company_name}</h6>
                              </Card.Title>
                              <div className="d-flex align-items-center ">
                              <Card.Subtitle className="mb-2 text-muted me-2">Category:</Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted ">{category.category}</Card.Subtitle>
                              </div>
                              <div className="d-flex align-items-center ">
                              <Card.Subtitle className="mb-2 text-muted me-2">Location: </Card.Subtitle>
                              <Card.Subtitle className="mb-2 text-muted"> {category.candidate_required_location}</Card.Subtitle>
                              </div>
                              <Card.Link href='boh' className="nav-link">{category.url}</Card.Link>
                            </Card.Body>
                          </Card>
                        </Col>
                        )                        
                      })}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseCategory}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                      </div>
                      
                      <div className="d-flex align-items-center ">
                      <Card.Subtitle className="mb-2 text-muted me-2">Location: </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted"> {job.candidate_required_location}</Card.Subtitle>
                      </div>
                  <Card.Text>
                  <p
                    dangerouslySetInnerHTML={{ __html: job.description }}
                    className="k pt-2"
                  ></p>
                  </Card.Text>
                  <Card.Link href='boh' className="nav-link">{job.url}</Card.Link>
                </Card.Body>
              </Card>
              </Col>
          )
        })}</>) : ('')}
        
        <Col className="bg-white p-0 border border-1 rounded-2 " xs={6}>
        <h1 className="text-center mt-2">Tutte le offerte di lavoro</h1>
          {allJobs.length > 0 ? (
            allJobs.slice(0, 50).map((jobs) => {
              return (
                <Col
                  xs={12}
                  key={jobs._id}
                  className="px-3 pt-3 bg-white rounded-2"
                >
                  <Card className="px-4">
                    <Card.Body >
                      <Card.Title>
                        <Link
                          to={jobs.url}
                          className="a d-flex justify-content-between"
                        >
                          <h5 className="py-2">{jobs.title}</h5>
                        </Link>
                        <h6 className="fw-bold">{jobs.company_name}</h6>
                      </Card.Title>
                      <div className="d-flex align-items-center ">
                      <Card.Subtitle className="mb-2 text-muted me-2">Category:</Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted ">{jobs.category}</Card.Subtitle>
                      </div>
                      <div className="d-flex align-items-center ">
                      <Card.Subtitle className="mb-2 text-muted me-2">Location: </Card.Subtitle>
                      <Card.Subtitle className="mb-2 text-muted"> {jobs.candidate_required_location}</Card.Subtitle>
                      </div>
                      <Card.Text>
                      <p
                        dangerouslySetInnerHTML={{ __html: jobs.description }}
                        className="k pt-2"
                      ></p>
                      </Card.Text>
                      <Card.Link href='boh' className="nav-link">{jobs.url}</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <>
              <Spinner animation="border" />
            </>
          )}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
export default Jobs;
