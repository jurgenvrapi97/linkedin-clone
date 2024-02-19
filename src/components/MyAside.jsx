import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardBody, ListGroup } from "react-bootstrap";

const MyAside = () => {
  return (
    <Card className="d-none d-md-flex" md={12} lg={12}>
      <Card.Title className="p-3 fs-6">
        Persone che potresti conoscere
      </Card.Title>
      <Card.Subtitle className="p-3 fs-6">
        Dalla tua scuola o università
      </Card.Subtitle>
      <CardBody className="p-1">
        <ListGroup>
          <ListGroup.Item className="border border-0 d-flex">
            <div>
              <img
                className="rounded-circle"
                src="https://placekitten.com/150"
                width="50px"
                height="50px"
              ></img>
            </div>

            <div className=" ms-3 ">
              <h6 className="mb-0 lh-sm">Alessia</h6>
              <p className="mb-0 fs-6 lh-sm">Contatrice di arachidi</p>
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
        </ListGroup>
      </CardBody>
      <div className="px-3">
        <hr />
      </div>
      <Button variant="light" className="text text-secondary font-weight-700">
        Mostra tutto
      </Button>
    </Card>
  );
};
export default MyAside;
