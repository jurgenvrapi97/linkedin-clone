import { Col } from "react-bootstrap";

const FooterHome = () => {
  return (
    <Col className="rounded-2 bg-transparent p-3 text-center">
      <div>
        <a href="#" className="px-2 mt-5 a b">
          Informazioni
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Accessibilità
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Centro assistenza
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Privacy e condizioni
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Opzioni per gli annunci pubblicitari
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Pubblicità
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Servizi alle aziende
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Scarica l&apos;app LinkedIn
        </a>
        <a href="#" className="px-2 mt-5 a b">
          Altro
        </a>
      </div>
      <div className="d-flex align-items-center my-4">
        <p className="fw-bold text-primary pe-1">
          Linked<i className="bi bi-linkedin text-primary"></i>
        </p>
        <p className="b">LinkedIn Corporation &copy; 2024</p>
      </div>
    </Col>
  );
};
export default FooterHome;
