import React from "react";
import Modal from "react-bootstrap/Modal";

function ProjectModal(props) {
  const style = {
    width: "50vw",
    height: "50vh",
    background: "red",
  };
  return (
    <>
      <Modal
        onHide={() => props.setShow(false)}
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>{props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.data.title}</h4>
          <p>{props.data.text}</p>
          <img src={props.data.img} alt='' />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectModal;
