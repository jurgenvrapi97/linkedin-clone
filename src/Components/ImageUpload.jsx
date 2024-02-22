import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
function ImageUpload() {
  const [file, setFile] = useState()

  const profile = useSelector((state) => state.user.user)
  const tokens = useSelector((state) => state.user.tokens)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleUpload = async () => {
    let formData = new FormData()

    formData.append('profile', file)

    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/65d3150324f605001937d469/picture',
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: 'Bearer ' + tokens[profile.name.toLowerCase()],
          },
        }
      )
      let data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col className="m-2">
            <input
              className="d-block mb-5"
              type="file"
              onChange={handleFileChange}
            />
            <Button onClick={handleUpload}>Carica</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ImageUpload
