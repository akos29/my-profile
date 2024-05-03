import React from "react";
import { Modal } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";

function ProjectModal({ project, img, show, handleClose }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={handleClose} className="po_modal">
      <Modal.Header closeButton className="po_header">
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="menu_container">
        <ul className="po_skills">
          {project.tech?.map((skill, i) => {
            return <li key={i}>{skill.name}</li>;
          })}
        </ul>
        <div className="po_body">
          <div
            className="img "
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <p className="text_2">{project.description}</p>
        </div>
        <div className="po_footer">
          <a className="ac_btn btn" href={project.link} target="_blank">
           {project.github ? ' See Live ': 'Project Detail'}<RxExternalLink />
          </a>
         {project.github ?  <a className="ac_btn btn" href={project.github} target="_blank">
            See Source <AiFillGithub />
          </a>: null}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal;
