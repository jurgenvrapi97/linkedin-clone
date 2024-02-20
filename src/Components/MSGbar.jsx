import { useState } from "react";
import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";

const MSGbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showWrite, setShowWrite] = useState(false);
  const [expandWrite, setExpandWrite] = useState(false);

  const toggleSection = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const toggleSectionWrite = () => {
    setShowWrite((prevState) => !prevState);
  };

  const expandSectionWrite = () => {
    setExpandWrite((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`d-none d-md-flex  flex-column border mn border-1 rounded-top border-secondary bg-white ${
          isExpanded ? "s" : "ns"
        }`}
      >
        <div className="d-flex p-3 ">
          <div className="ms-3 me-5 fw-bold">
            <img
              className="i rounded-5 me-2"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt=""
            />
            Messaggistica
          </div>
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
              onClick={toggleSectionWrite}
            >
              <i className="bi bi-pencil-square text-secondary"></i>
            </Button>
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
            <InputGroup className="bg-c rounded-2 ">
              <InputGroup.Text className="bg-transparent border-0">
                <i className="bi bi-search text-dark"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                className="bg-transparent border-0 text-white"
                placeholder="Cerca messaggi"
              />
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="custom-toggle bg-transparent border-0 "
                >
                  <i className="bi bi-sliders text-dark "></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Da leggere</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Contrassegnati con un stella
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Messaggi InMail
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    I miei collegamenti
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Archiviati</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Posta indesiderata
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </InputGroup>
          </div>
          <div className="d-flex align-items-center pt-2 flex-column ">
            <img src="/public/Ancora 0 msg.png" alt="" />
            <div className=" text-center d">
              <p>
                Entra in contatto e dai il via a una conversazione per far
                decollare la tua carriera
              </p>
            </div>{" "}
            <div>
              <Button
                className="bg-transparent text-secondary rounded-5 border-2 border-secondary fw-bold fs-5 px-3"
                onClick={toggleSectionWrite}
              >
                Invia un messaggio
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          showWrite ? "xx bg-white rounded-2  border-2 " : "d-none"
        } ${
          expandWrite
            ? "xl bg-white rounded-2  border-2 "
            : "xx bg-white rounded-2  border-2"
        }`}
      >
        <div className="d-flex justify-content-between ">
          <div className="p-3 m-0">
            <h6>Nuovo messaggio</h6>
          </div>
          <div className="p-3 m-0">
            <Button
              className="bg-transparent border-0 mx-3 p-0"
              onClick={expandSectionWrite}
            >
              <i className="bi bi-arrows-angle-expand text-black"></i>
            </Button>
            <Button
              className="bg-transparent border-0  p-0"
              onClick={toggleSectionWrite}
            >
              <i className="bi bi-x-lg text-black "></i>
            </Button>
          </div>
        </div>
        <div>
          <hr className="m-0" />
          <InputGroup className="my-2 px-3 ">
            <Form.Control
              placeholder="Digita un nome o più nomi"
              aria-label="Digita un nome o più nomi"
              aria-describedby="basic-addon1"
              className="border-0 "
            />
          </InputGroup>
          <hr className="m-0" />
          <p className="p-3 m-0 text-secondary">
            <i className="bi bi-info-square-fill pe-2 text-secondary"></i>Nessun
            risultato trovato
          </p>
        </div>
      </div>
    </>
  );
};

export default MSGbar;
