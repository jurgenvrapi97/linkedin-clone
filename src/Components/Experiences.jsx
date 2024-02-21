import Card from "react-bootstrap/Card";
import { CardBody, ListGroup } from "react-bootstrap";
import AddExp from "./AddExp";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchExperiences } from "../redux/action";
import { fetchExperiencesAction } from "../redux/action";
import ModaleModificaExperience from "./ModaleModificaExperience";

const Experiences = () => {
  const formatDate = (dateISO) => {
    let dateObj = new Date(dateISO);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let dateStr = [date, month + 1, year].join("/");
    return dateStr;
  };

  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.user.tokens);
  const profile = useSelector((state) => state.user.user);
  const experiences = useSelector((state) => state.experiences.allExperiences);

  useEffect(() => {
    if (profile._id) {
      dispatch(fetchExperiences(tokens.jurgen, profile._id));
      console.log("partita");
    }
  }, [dispatch, profile._id]);

  const handleDelete = (chiave) => {
    dispatch(
      fetchExperiencesAction(tokens.jurgen, profile._id, chiave, "DELETE")
    );
  };

  const handleEdit = (chiave) => {
    dispatch(fetchExperiencesAction(tokens.jurgen, profile._id, chiave, "GET"));
  };
  const handleChanges = (chiave) => {
    dispatch(fetchExperiencesAction(tokens.jurgen, profile._id, chiave, "PUT"));
  };

  return (
    <>
      <Card className="d-none d-md-flex" md={12} lg={12}>
        <Card.Title className="p-3 d-flex justify-content-between ">
          Esperienze <AddExp />
        </Card.Title>
        {experiences && experiences.length ? (
          experiences.map((exp) => (
            <div key={exp._id}>
              <CardBody className="p-1">
                <ListGroup>
                  <ListGroup.Item className="border border-0 d-flex">
                    <div>
                      <img src="https://placekitten.com/200"></img>
                    </div>

                    <div className=" ms-3 ">
                      <h6 className="mb-0 lh-sm">{exp.username}</h6>
                      <p>
                        {exp.role} · {exp.company}
                      </p>
                      <p className="mb-0 fs-6 lh-sm text-secondary">
                        {formatDate(exp.startDate)} · {formatDate(exp.endDate)}
                      </p>
                      <p className="mb-0 fs-6 lh-sm text-secondary">
                        {exp.area}
                      </p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </CardBody>

              <button onClick={() => handleDelete(exp._id)}>cancella</button>
              <ModaleModificaExperience chiave={exp._id} />
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
