import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { RxExternalLink } from 'react-icons/rx';
import { BsBoxArrowUpRight }  from 'react-icons/bs';

function ProjectModal({ project,img }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='ac_btn btn' onClick={handleShow}>
       See Project <BsBoxArrowUpRight />
      </Button>
      {/* <div className='bg__menu h-100'> */}
      <Modal show={show} onHide={handleClose} className='po_modal'>
        <Modal.Header closeButton className='po_header'>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='menu_container'>
          <ul className='po_skills'>
            {project.tech?.map((skill, i) => {
              return <li key={i}>{skill.name}</li>;
            })}
          </ul>
          <div className='po_body'>
          {/* <img src={img} alt={project.title} /> */}
          <div
                  className="img "
                  style={{ backgroundImage: `url(${img})` }}
                ></div> 
          <p className='text_2'>{project.description}</p>
          </div>
        <div className='po_footer'>
          <a className='ac_btn btn' href={project.link} target="_blank">
            See Live <RxExternalLink />
          </a>
          <a className='ac_btn btn'  href={project.github} target="_blank">
            See Source <AiFillGithub />
          </a>
        </div>
        </Modal.Body>
      </Modal>
      {/* </div> */}
    </>
  );
}

export default ProjectModal;
