// import { ListGroup } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const PostHome = ({ post }) => {
  return (
    // <ListGroup.Item className="border border-0 d-flex">
    //   <div className=" ms-3 ">
    //     <h6 className="mb-0 lh-sm">{post.username}</h6>
    //     <p className="mb-0 fs-6 lh-sm">{post.text}</p>
    //     <p className="mb-0 fs-6 lh-sm">{post.createdAt}</p>
    //     <div className="d-flex">
    //       <i className="bi bi-graph-up-arrow"></i>
    //     </div>
    //     <img
    //       src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
    //       width="50px"
    //       height="50px"
    //     ></img>
    //   </div>
    // </ListGroup.Item>
    <Card className='mb-2'>
      <Card.Body>
        <Card.Title>{post.username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{post.createdAt}</Card.Subtitle>
        <Card.Text>
          {post.text}
        </Card.Text>
        <hr />
        <div className='d-flex justify-content-around '>
          <Button variant="outline-secondary" className='border border-0 fw-medium rounded-2 d-flex align-items-center' style={{fontSize: '0.9em'}}><i className="bi bi-hand-thumbs-up me-1" style={{fontSize: '1.5em'}}></i>Consiglia</Button>
          <Button variant="outline-secondary" className='border border-0 fw-medium rounded-2 d-flex align-items-center' style={{fontSize: '0.9em'}}><i className="bi bi-chat-left-dots me-1" style={{fontSize: '1.5em'}}></i>Commenta</Button>
          <Button variant="outline-secondary" className='border border-0 fw-medium rounded-2 d-flex align-items-center' style={{fontSize: '0.9em'}}><i className="bi bi-arrow-repeat me-1" style={{fontSize: '1.5em'}}></i>Diffondi il post</Button>
          <Button variant="outline-secondary" className='border border-0 fw-medium rounded-2 d-flex align-items-center' style={{fontSize: '0.9em'}}><i className="bi bi-send-fill me-1" style={{fontSize: '1.5em'}}></i>Invia</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default PostHome;
