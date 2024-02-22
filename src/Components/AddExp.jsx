import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExperiencesCreate } from '../redux/action'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Col, Container, Row } from 'react-bootstrap'
import { fetchExperiences } from '../redux/action'

const AddExp = () => {
  //state modale
  const lastExp = useSelector(
    (state) =>
      state.create.newExperiences[state.create.newExperiences.length - 1]
  )

  if (lastExp) {
    console.log(lastExp._id)
    // Qui puoi chiamare la tua funzione per caricare l'immagine
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()
  const username = useSelector((state) => {
    return state.user.user
  })
  const tokens = useSelector((state) => {
    return state.user.tokens
  })
  const [form, setForm] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setForm({
      ...form,
      [name]: value,
    })
  }
  const [file, setFile] = useState()

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleUpload = async () => {
    let formData = new FormData()

    formData.append('experience', file)

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${username._id}/experiences/${lastExp._id}/picture`,
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
      dispatch(
        fetchExperiences(tokens[username.name.toLowerCase()], username._id)
      )
    } catch (error) {
      console.error(error)
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    // setShow(false)
    await dispatch(fetchExperiencesCreate(tokens.jurgen, username._id, form))

    dispatch(
      fetchExperiences(tokens[username.name.toLowerCase()], username._id)
    )
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-plus-circle-fill"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="bg-background" closeButton>
          <Modal.Title>Inserisci una nuova esperienza</Modal.Title>
        </Modal.Header>
        <Container className="py-2">
          <form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Col className="d-flex flex-column">
                <label htmlFor="role">Ruolo</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                />
              </Col>
              <Col className="d-flex flex-column">
                <label htmlFor="company">Compagnia</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-2 justify-content-center">
              <Col className="d-flex flex-column">
                <label htmlFor="startDate">Data di inizio</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                />
              </Col>
              <Col className="d-flex flex-column">
                <label className="d-block" htmlFor="endDate">
                  Data di fine
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="aligne-item-center mb-3">
              <Col className="d-flex flex-column">
                <label className="d-block" htmlFor="area">
                  Area
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={form.area}
                  onChange={handleChange}
                />
              </Col>
              <Col className="d-flex col-12 flex-column">
                {' '}
                <label htmlFor="description">Descrizione</label>
                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col className="col-3 d-flex justify-content-end">
                <Button type="submit">AGGIUNGI</Button>
              </Col>
            </Row>
          </form>
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
        </Container>
      </Modal>
    </>
  )
}

export default AddExp
