// import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const PostHome = ({ post }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{post.username}</Card.Title>
          <div>
            <Button
              className="h rounded-5 p-2 bg-transparent border-0"
              variant="outline-dark"
            >
              <i className="bi bi-pencil "></i>
            </Button>
            <Button
              className="h rounded-5 p-2 bg-transparent border-0"
              variant="outline-danger"
            >
              <i className="bi bi-trash3 fs-5 "></i>
            </Button>
          </div>
        </div>
        <Card.Subtitle className="mb-2 text-muted">
          {post.createdAt}
        </Card.Subtitle>
        <Card.Text>{post.text}</Card.Text>
        <hr />
        <div className="d-flex justify-content-around ">
          <Button
            variant="outline-secondary"
            className="border border-0 fw-medium rounded-2 d-flex align-items-center"
            style={{ fontSize: "0.9em" }}
          >
            <i
              className="bi bi-hand-thumbs-up me-1"
              style={{ fontSize: "1.5em" }}
            ></i>
            Consiglia
          </Button>
          <Button
            variant="outline-secondary"
            className="border border-0 fw-medium rounded-2 d-flex align-items-center"
            style={{ fontSize: "0.9em" }}
          >
            <i
              className="bi bi-chat-left-dots me-1"
              style={{ fontSize: "1.5em" }}
            ></i>
            Commenta
          </Button>
          <Button
            variant="outline-secondary"
            className="border border-0 fw-medium rounded-2 d-flex align-items-center"
            style={{ fontSize: "0.9em" }}
          >
            <i
              className="bi bi-arrow-repeat me-1"
              style={{ fontSize: "1.5em" }}
            ></i>
            Diffondi il post
          </Button>
          <Button
            variant="outline-secondary"
            className="border border-0 fw-medium rounded-2 d-flex align-items-center"
            style={{ fontSize: "0.9em" }}
          >
            <i
              className="bi bi-send-fill me-1"
              style={{ fontSize: "1.5em" }}
            ></i>
            Invia
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default PostHome;
