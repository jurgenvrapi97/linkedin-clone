import Card from "react-bootstrap/Card";
import { Button, CardBody, ListGroup } from "react-bootstrap";
import AddExp from "./AddExp";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExperiences } from "../redux/action";
import { fetchExperiencesAction } from "../redux/action";
import ModaleModificaExperience from "./ModaleModificaExperience";

const Experiences = ({ tokenKey, selector }) => {
  const formatDate = (dateISO) => {
    let dateObj = new Date(dateISO);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let dateStr = [date, month + 1, year].join("/");
    return dateStr;
  };

  const dispatch = useDispatch();
  // const tokens = useSelector((state) => state.user.tokens);
  const profile = useSelector(selector);
  const experiences = useSelector((state) => state.experiences.allExperiences);
  const newExperience = useSelector((state) => state.create.experiences);
  const user = useSelector((state) => state.user.user);
  // console.log(user)
  // console.log('il profile è:', profile)
  // const nienteData = useSelector((state) => state.action.data);
  // console.log("niente", nienteData);

  useEffect(() => {
    if (profile._id) {
      dispatch(fetchExperiences(tokenKey, profile._id));
      console.log("partita");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, profile._id, newExperience, experiences.length]);

  // console.log(experiences.length)

  const handleDelete = (chiave) => {
    dispatch(fetchExperiencesAction(tokenKey, profile._id, chiave, "DELETE"));
    dispatch(fetchExperiences(tokenKey, profile._id));
  };

  return (
    <>
      <Card className="d-none d-md-flex" md={12} lg={12}>
        <Card.Title className="p-3 d-flex justify-content-between align-items-center">
          Esperienze {user._id === profile._id && <AddExp />}
        </Card.Title>
        {experiences && experiences.length ? (
          experiences.map((exp) => (
            <div key={exp._id}>
              <CardBody className="p-1">
                <ListGroup>
                  <ListGroup.Item className="border border-0 d-flex">
                    <div className="d-flex flex-column ">
                      <div className="d-flex">
                        <div>
                          <img src={exp.image} alt="experience-logo" />
                        </div>

                        <div className=" ms-3 ">
                          <h5 className="mb-0 lh-sm">{exp.role}</h5>
                          <p className="mt-1 mb-2">{exp.company}</p>
                          <p className="mb-0 text-secondary fw-light">
                            da {formatDate(exp.startDate)} · a{" "}
                            {formatDate(exp.endDate)}
                          </p>
                          <p className="mb-0 text-secondary fw-light">
                            {exp.area}
                          </p>
                          <p>{exp.description}</p>
                        </div>
                      </div>
                      {user._id === profile._id && (
                        <div className="mt-2 d-flex justify-content-start">
                          <Button
                            variant="outline-danger"
                            className="border border-0 rounded-circle"
                            onClick={() => handleDelete(exp._id)}
                          >
                            <i className="bi bi-trash3 fs-5"></i>
                          </Button>
                          <ModaleModificaExperience chiave={exp._id} />
                        </div>
                      )}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </CardBody>
            </div>
          ))
        ) : (
          <p>Nessuna esperienza trovata per questo profilo.</p>
        )}
      </Card>
    </>
  );
};

export default Experiences;
