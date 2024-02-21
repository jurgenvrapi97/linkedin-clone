import { ListGroup } from "react-bootstrap";

const PostHome = ({ post }) => {
  return (
    <ListGroup.Item className="border border-0 d-flex">
      <div className=" ms-3 ">
        <h6 className="mb-0 lh-sm">{post.username}</h6>
        <p className="mb-0 fs-6 lh-sm">{post.text}</p>
        <p className="mb-0 fs-6 lh-sm">{post.createdAt}</p>
        <div className="d-flex">
          <i className="bi bi-graph-up-arrow"></i>
        </div>
        <img
          src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1716422400&v=beta&t=5MUJe7JW7qN_AhLIvXWy09nSa-yX3GS-ThImsm3_xqE"
          width="50px"
          height="50px"
        ></img>
      </div>
    </ListGroup.Item>
  );
};
export default PostHome;
