import Card from "react-bootstrap/Card";
import { CardBody, ListGroup } from "react-bootstrap";

const Experiences = () => {
  return (
    <Card className="d-none d-md-flex" md={12} lg={12}>
      <Card.Title className="p-3 ">Esperienze</Card.Title>

      <CardBody className="p-1">
        <ListGroup>
          <ListGroup.Item className="border border-0 d-flex">
            <div>
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
                width="50px"
                height="50px"
              ></img>
            </div>

            <div className=" ms-3 ">
              <h6 className="mb-0 lh-sm">-inserisci lavoro-</h6>
              <p className="mb-0 fs-6 lh-sm text-secondary">
                inserisci data · inizio lavoro da
              </p>
              <p className="mb-0 fs-6 lh-sm text-secondary">inserisci città</p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Experiences;
