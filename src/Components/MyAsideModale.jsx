import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchGeneric } from "../redux/action";
import SingleAsideComponent from "./SingleAsideComponent";

const MyAsideModale = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUwMzI0ZjYwNTAwMTkzN2Q0NjkiLCJpYXQiOjE3MDgzMzIyOTEsImV4cCI6MTcwOTU0MTg5MX0.Dvp9xjhvg1QFWbOGGaWpXWP1M-7JHhQLM0zCwLO1doM";
    dispatch(fetchGeneric(token));
  }, [dispatch]);

  const allProfiles = useSelector((state) => state.genericUser.user);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Persone che potresti conoscere</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: "500px", overflowY: "auto" }}>
        {allProfiles.length > 0 &&
          allProfiles.slice(50, 80).map((profile) => {
            return <SingleAsideComponent key={profile._id} profile={profile} />;
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyAsideModale;
