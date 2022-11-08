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
          <img src={props.data.img} alt='' />
          {/* <h4>{props.data.title}</h4> */}
          <p></p>
          <div>
            專案時間：
            {props.data.time}
          </div>
          <div>
            專案描述：
            {props.data.text}
          </div>
          <p></p>
          <a href={props.data.url} target="_blank">
            前往此網站
          </a>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectModal;
