import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../redux/action";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Jobs = () => {
  const dispatch = useDispatch();
  const allJobs = useSelector((state) => state.allJobs.allJobs);

  const [showDescription, setShowDescription] = useState(false);

  const toggleSectionDescription = () => {
    setShowDescription((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(fetchAllJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Container className="pt-c">
      <Row className="py-5 g-3 justify-content-center ">
        <h1 className="text-center">Jobs</h1>
        <Col className="bg-white p-0 border border-1 rounded-2 " xs={6}>
          {allJobs.length > 0 ? (
            allJobs.map((jobs) => {
              return (
                <Col
                  xs={12}
                  key={jobs._id}
                  className="px-3 pt-3 bg-white rounded-2"
                >
                  <div>
                    <Link
                      to={jobs.url}
                      className="a d-flex justify-content-between"
                    >
                      <h5 className="py-2">{jobs.title}</h5>
                    </Link>
                    <ul className="list-unstyled m-0">
                      <li>{jobs.category}</li>
                      <li>Location: {jobs.candidate_required_location}</li>
                    </ul>
                  </div>
                  <div>
                    <Button
                      onClick={toggleSectionDescription}
                      className="text-primary bg-transparent border-0 p-0 fs-sm"
                    >
                      {showDescription ? "(show less...)" : "(show more...)"}
                    </Button>
                    {showDescription ? (
                      <p
                        dangerouslySetInnerHTML={{ __html: jobs.description }}
                        className="k pt-2"
                      ></p>
                    ) : (
                      ""
                    )}
                  </div>
                  <hr className="mb-0" />
                </Col>
              );
            })
          ) : (
            <div className="d-flex justify-content-center text-primary">
              <Spinner animation="border" />
            </div>
          )}
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
export default Jobs;
