import { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";

const MSGbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [show, setShow] = useState(false);

  const toggleSection = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const toggleSectionModal = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`d-flex flex-column border mn border-1 rounded-top border-secondary ${
          isExpanded ? "s" : "ns"
        }`}
      >
        <div className="d-flex p-3 ">
          <div className="ms-3 me-5 fw-bold">Messaggistica</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="custom-toggle rounded-5 bg-transparent border-0 h d-flex align-items-center"
              >
                <i className="bi bi-three-dots text-secondary"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Gestisci conversazioni
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Impostazioni masseggistica
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  POsta in arrivo delle richieste di messaggistica
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Imposta messaggio di assenza
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Button
              className="rounded-5 bg-transparent border-0 h px-2"
              onClick={toggleSectionModal}
            >
              <i className="bi bi-pencil-square text-secondary"></i>
            </Button>

            <Modal show={show} onHide={toggleSectionModal}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={toggleSectionModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={toggleSectionModal}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div>
            <Button
              onClick={toggleSection}
              className="rounded-5 bg-transparent border-0 h"
            >
              {isExpanded ? (
                <i className="bi bi-caret-down-fill text-secondary "></i>
              ) : (
                <i className="bi bi-caret-up-fill text-secondary"></i>
              )}
            </Button>
          </div>
        </div>
        <div className="flex-grow-1 p-3">
          <div>
            <Form.Control
              type="text"
              className="w-100"
              placeholder="Cerca messaggi"
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MSGbar;
