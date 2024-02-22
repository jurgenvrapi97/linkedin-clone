import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
function ImageUpload() {
  const [file, setFile] = useState()

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
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQzMTUwMzI0ZjYwNTAwMTkzN2Q0NjkiLCJpYXQiOjE3MDgzMzIyOTEsImV4cCI6MTcwOTU0MTg5MX0.Dvp9xjhvg1QFWbOGGaWpXWP1M-7JHhQLM0zCwLO1doM',
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
