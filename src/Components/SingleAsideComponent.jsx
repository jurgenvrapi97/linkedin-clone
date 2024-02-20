import { ListGroup, Button } from "react-bootstrap";
const SingleAsideComponent = ({ profile }) => {
  return (
    <div>
      <ListGroup.Item className="border border-0 d-flex">
        <div>
          <img
            className="rounded-circle"
            src={profile.image}
            width="50px"
            height="50px"
          ></img>
        </div>

        <div className=" ms-3 ">
          <h6 className="mb-0 lh-sm">{profile.name}</h6>
          <p className="mb-0 fs-6 lh-sm">{profile.title}</p>
          <Button
            variant="outline-secondary"
            className="rounded-pill mt-3"
            size="sm"
          >
            <i className="bi bi-person-fill-add me-2"></i>
            Collegati
          </Button>
        </div>
      </ListGroup.Item>
      <div className="px-3">
        <hr />
      </div>
    </div>
  );
};
export default SingleAsideComponent;
