// import { ListGroup } from "react-bootstrap";
import { useState } from 'react'
import {
  Button,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Modal,
  Row,
} from 'react-bootstrap'

import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllComments, fetchAllPosts } from '../redux/action'

const PostHome = ({ post }) => {
  const dispatch = useDispatch()
  const doFetch = () => {
    dispatch(fetchAllComments(post._id))
  }
  const [showCommentArea, setShowCommentArea] = useState(false)
  const toggleCommentArea = () => {
    setShowCommentArea((prevState) => !prevState)
    doFetch()
  }
  const handleCloseModale = () => setShowModale(false)
  const handleShowModale = () => setShowModale(true)
  const [showModale, setShowModale] = useState(false)

  const [inputPost, setInputPost] = useState({
    text: '',
  })
  const [inputComment, setInputComment] = useState({
    comment: '',
  })

  const [ModInputComment, setModInputComment] = useState({
    comment: '',
  })

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChangeComment = (event) => {
    const value = event.target.value
    setModInputComment({
      ...ModInputComment,
      comment: value,
    })
  }

  const handleNewComment = async (e) => {
    e.preventDefault()

    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify({
            ...inputComment,
            rate: 5,
            elementId: post._id,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokens[username.name.toLowerCase()],
          },
        }
      )

      if (response.ok) {
        console.log('Comment updated successfully')
        doFetch()
        setInputComment({
          ...inputComment,
          comment: '',
        })
      } else {
        console.error('Failed to update comment')
      }
    } catch (error) {
      console.error('Error updating comment:', error)
    }
  }

  const handleModComment = async (indice) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + indice,
        {
          method: 'PUT',
          body: JSON.stringify({
            ...ModInputComment,
            rate: 5,
            elementId: post._id,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokens[username.name.toLowerCase()],
          },
        }
      )

      if (response.ok) {
        console.log('Comment updated successfully')
        doFetch()
        setModInputComment({
          ...ModInputComment,
          comment: '',
        })
      } else {
        console.error('Failed to update comment')
      }
    } catch (error) {
      console.error('Error updating comment:', error)
    }
    handleClose()
  }

  const deleteComment = async (indice) => {
    console.log(indice)
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + indice,
        {
          method: 'DELETE',

          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokens[username.name.toLowerCase()],
          },
        }
      )

      if (response.ok) {
        console.log('Comment DELETE successfully')
        doFetch()
      } else {
        console.error('Failed to update comment')
      }
    } catch (error) {
      console.error('Error updating comment:', error)
    }
  }

  const handleCommentChange = (event) => {
    const value = event.target.value
    setInputComment({
      ...inputComment,
      comment: value,
    })
  }

  const fetchModificaPost = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: 'PUT',
          body: JSON.stringify({ text: inputPost.text }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + tokens[username.name.toLowerCase()],
          },
        }
      )
      if (response.ok) {
        setInputPost((prevInputPost) => ({
          ...prevInputPost,
          text: inputPost.text,
        }))
        dispatch(fetchAllPosts(tokens[username.name.toLowerCase()]))
        console.log('Post updated successfully')
      } else {
        console.error('Failed to update post')
      }
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }
  const handleChange = (event) => {
    const value = event.target.value
    setInputPost({
      ...inputPost,
      text: value,
    })
  }
  const [file, setFile] = useState()

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const tokens = useSelector((state) => state.user.tokens)
  const username = useSelector((state) => state.user.user)

  const handlePutPost = (e) => {
    e.preventDefault()

    fetchModificaPost()
  }

  const handleUpload = async () => {
    setShowModale(false)
    let formData = new FormData()

    formData.append('post', file)

    try {
      let response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/posts/${post._id} `,
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: 'Bearer ' + tokens[username.name.toLowerCase()],
          },
        }
      )
      let data = await response.json()
      console.log(data)
      // dispatch(
      //   fetchAllPosts(tokens[username.name.toLowerCase()], username._id)
      // );
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer ' + tokens[username.name.toLowerCase()],
          },
        }
      )
      if (response.ok) {
        console.log('Post deleted successfully')
        dispatch(fetchAllPosts(tokens[username.name.toLowerCase()]))
      } else {
        console.error('Failed to delete post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const allComments = useSelector((state) => state.allComments.allComments)

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>{post.username}</Card.Title>
            <div>
              {username._id === post.user._id && (
                <Button
                  className="h rounded-5 p-2 bg-transparent border-0"
                  onClick={handleShowModale}
                  variant="black"
                >
                  <i className="bi bi-pencil"></i>
                </Button>
              )}

              <Modal show={showModale} onHide={handleCloseModale}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <div className="d-inline me-2">
                      <img
                        src={username.image}
                        alt="logo"
                        style={{ height: '2em' }}
                        className="rounded-circle"
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
              {username._id === post.user._id && (
                <Button
                  className="bg-transparent border-0"
                  onClick={() => handleDelete(post._id)}
                >
                  <i className="bi bi-trash text-danger "></i>
                </Button>
              )}
            </div>
          </div>
          <Card.Subtitle className="mb-2 text-muted">
            {post.createdAt}
          </Card.Subtitle>
          <Card.Text>{post.text}</Card.Text>
          <div className="text-center">
            {post.image && (
              <img src={post.image} alt="image" className="img-post" />
            )}
          </div>
          <hr />
          <Row className="d-flex justify-content-around ">
            <Col md={12} lg={3} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary"
                className="border border-0 fw-medium rounded-2 d-flex align-items-center"
                style={{ fontSize: '0.9em' }}
              >
                <i
                  className="bi bi-hand-thumbs-up me-1"
                  style={{ fontSize: '1.5em' }}
                ></i>
                Consiglia
              </Button>
            </Col>
            <Col md={12} lg={3} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary"
                className="border border-0 fw-medium rounded-2 d-flex align-items-center"
                style={{ fontSize: '0.9em' }}
                onClick={toggleCommentArea}
              >
                <i
                  className="bi bi-chat-left-dots me-1"
                  style={{ fontSize: '1.5em' }}
                ></i>
                Commenta
              </Button>
            </Col>
            <Col md={12} lg={3} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary"
                className="border border-0 fw-medium rounded-2 d-flex align-items-center"
                style={{ fontSize: '0.9em' }}
              >
                <i
                  className="bi bi-arrow-repeat me-1"
                  style={{ fontSize: '1.5em' }}
                ></i>
                Diffondi il post
              </Button>
            </Col>
            <Col md={12} lg={3} className="d-flex justify-content-center">
              <Button
                variant="outline-secondary"
                className="border border-0 fw-medium rounded-2 d-flex align-items-center"
                style={{ fontSize: '0.9em' }}
              >
                <i
                  className="bi bi-send-fill me-1"
                  style={{ fontSize: '1.5em' }}
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
              allComments.slice(0, 10).map((commento) => (
                <ListGroup.Item className="p-3" key={commento._id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="fs-5 text-primary fw-medium">
                        {commento.author}
                      </p>
                      {commento.comment}
                    </div>
                    <div>
                      <Button
                        variant="danger"
                        className="mx-2 "
                        onClick={() => deleteComment(commento._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                      <Button onClick={handleShow}>
                        <i className="bi bi-pencil"></i>
                      </Button>{' '}
                    </div>
                  </div>
                  <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                  >
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modifica il commento</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <InputGroup className="my-3">
                          <Form.Control
                            placeholder="modify a comment"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type="text"
                            value={ModInputComment.comment}
                            name="commento"
                            id=""
                            onChange={handleChangeComment}
                          />
                          <Button
                            type="submit"
                            onClick={() => handleModComment(commento._id)}
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            <i
                              className="bi bi-send-fill me-1"
                              style={{ fontSize: '1.5em' }}
                            ></i>
                          </Button>
                        </InputGroup>
                      </Modal.Body>
                    </Modal>
                  </div>
                </ListGroup.Item>
              ))}

            <InputGroup className="my-3">
              <Form.Control
                placeholder="add a comment"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="text"
                value={inputComment.comment}
                name="commento"
                id=""
                onChange={handleCommentChange}
              />
              <Button
                type="submit"
                onClick={handleNewComment}
                variant="outline-secondary"
                id="button-addon2"
              >
                <i
                  className="bi bi-send-fill me-1"
                  style={{ fontSize: '1.5em' }}
                ></i>
              </Button>
            </InputGroup>
          </ListGroup>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
export default PostHome
