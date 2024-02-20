import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardBody, ListGroup } from "react-bootstrap";
import { fetchGeneric } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SingleAsideComponent from "./SingleAsideComponent";
import MyAsideModale from "./MyAsideModale";

const MyAside = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUwMzI0ZjYwNTAwMTkzN2Q0NjkiLCJpYXQiOjE3MDgzMzIyOTEsImV4cCI6MTcwOTU0MTg5MX0.Dvp9xjhvg1QFWbOGGaWpXWP1M-7JHhQLM0zCwLO1doM";
    dispatch(fetchGeneric(token));
  }, [dispatch]);

  const allProfiles = useSelector((state) => state.genericUser.user);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  return (
    <Card className="d-none d-md-flex" md={12} lg={12}>
      <Card.Title className="p-3 fs-6 text-primary">
        Persone che potresti conoscere
      </Card.Title>
      <Card.Subtitle className="p-3 fs-6">
        Dalla tua scuola o università
      </Card.Subtitle>
      <CardBody className="p-1">
        <ListGroup>
          {allProfiles.length > 0 &&
            allProfiles.slice(7, 13).map((profile) => {
              return (
                <SingleAsideComponent key={profile._id} profile={profile} />
              );
            })}
        </ListGroup>
      </CardBody>

      <Button variant="light" onClick={handleShowModal}>
        Mostra tutto
      </Button>
      <MyAsideModale show={showModal} handleClose={handleCloseModal} />
    </Card>
  );
};
export default MyAside;
