// import { ListGroup } from "react-bootstrap";
// import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, Modal, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComments } from "../redux/action";
import { useEffect, useState } from "react";

const PostHome = ({ post }) => {
  const [showCommentArea, setShowCommentArea] = useState(false);
  const toggleCommentArea = () => {
    setShowCommentArea((prevState) => !prevState);
  };
  const handleCloseModale = () => setShowModale(false);
  const handleShowModale = () => setShowModale(true);
  const [showModale, setShowModale] = useState(false);

  const [inputPost, setInputPost] = useState({
    text: "",
  });

  const fetchModificaPost = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: "PUT",
          body: JSON.stringify({ text: inputPost.text }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokens[username.name.toLowerCase()],
          },
        }
      );
      if (response.ok) {
        setInputPost((prevInputPost) => ({
          ...prevInputPost,
          text: inputPost.text,
        }));
        console.log("Post updated successfully");
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setInputPost({
      ...inputPost,
      text: value,
    });
  };
  const [file, setFile] = useState();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const tokens = useSelector((state) => state.user.tokens);
  const username = useSelector((state) => state.user.user);

  const handlePutPost = (e) => {
    e.preventDefault();

    fetchModificaPost();
  };

  const handleUpload = async () => {
    setShowModale(false);
    let formData = new FormData();

    formData.append("post", file);

    try {
      let response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/posts/${post._id} `,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: "Bearer " + tokens[username.name.toLowerCase()],
          },
        }
      );
      let data = await response.json();
      console.log(data);
      // dispatch(
      //   fetchAllPosts(tokens[username.name.toLowerCase()], username._id)
      // );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + tokens[username.name.toLowerCase()],
          },
        }
      );
      if (response.ok) {
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  const dispatch = useDispatch();
  // const goComment = () => {
  //   dispatch(fetchAllComments());
  // };

  // useEffect(() => {
  //   dispatch(fetchAllComments());
  // }, [dispatch]);

  useEffect(() => {
    if (username._id) {
      dispatch(fetchAllComments());
      console.log("partita");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username._id]);

  const allComments = useSelector((state) => state.allComments.allComments);
  console.log("tutti i commenti ", allComments);

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{post.username}</Card.Title>
            <div>
              <Button
                className="h rounded-5 p-2 bg-transparent border-0"
                onClick={handleShowModale}
                variant="black"
              >
                <i className="bi bi-pencil"></i>
              </Button>
              <Modal show={showModale} onHide={handleCloseModale}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <div>
                      <img
                        src={username.image}
                        alt="logo"
                        className="img-post"
                      />
                    </div>
                    {username.name}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handlePutPost}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        rows={6}
                        className="border border-0 "
                        placeholder="Di cosa vorresti parlare?"
                        value={inputPost.text}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModale}>
                        Close
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={handlePutPost}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Form>
                  <div className="d-flex justify-content-around mt-2">
                    <input
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      type="file"
                      className="form-control w-75"
                      onChange={handleFileChange}
                    />
                    <button onClick={handleUpload}>carica</button>
                  </div>
                </Modal.Body>
              </Modal>
              <Button
                className="bg-transparent border-0"
                onClick={() => handleDelete(post._id)}
              >
                <i className="bi bi-trash text-danger "></i>
              </Button>
            </div>
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            {post.createdAt}
          </Card.Subtitle>
          <Card.Text>{post.text}</Card.Text>
          <div className="text-center">
            <img src={post.image} alt="image" className="img-post" />
          </div>
          <hr />
          <Row className="d-flex justify-content-around ">
            <Col md={12} lg={3} className="d-flex justify-content-center">
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
            </Col>
            <Col md={12} lg={3} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary"
                className="border border-0 fw-medium rounded-2 d-flex align-items-center"
                style={{ fontSize: "0.9em" }}
                onClick={toggleCommentArea}
              >
                <i
                  className="bi bi-chat-left-dots me-1"
                  style={{ fontSize: "1.5em" }}
                ></i>
                Commenta
              </Button>
            </Col>
            <Col md={12} lg={3} className="d-flex justify-content-center">
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
            </Col>
            <Col md={12} lg={3} className="d-flex justify-content-center">
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
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {showCommentArea ? (
        <div className="bg-white border-1 rounded-2 p-3 mb-2 border border-1">
          <h5>Commenti:</h5>
          <ListGroup>
            {allComments.length > 0 &&
              allComments
                .filter((commento) => post.user._id === commento._id)
                .map((commento) => (
                  <ListGroup.Item key={commento._id}>
                    {commento.comment}
                  </ListGroup.Item>
                ))}
          </ListGroup>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default PostHome;
