import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import myImage1 from "../../assets/images/portfolio/1.jpg";
import myImage2 from "../../assets/images/portfolio/2.jpg";
import myImage3 from "../../assets/images/portfolio/3.jpg";
import myImage4 from "../../assets/images/portfolio/4.jpg";
import myImage5 from "../../assets/images/portfolio/5.jpeg";
import Kibrewossen_Mekasha_Resume from "../../assets/Kibrewossen_Mekasha_Resume.pdf";
import { FiDownload } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ProjectModal from "./ProjectModal";

export const Portfolio = () => {
  const myImages = [myImage1, myImage2, myImage3, myImage4, myImage5];

  // State to manage the modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal with selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <a
          href={Kibrewossen_Mekasha_Resume}
          className="download"
          download="Kibrewossen_Mekasha_Resume.pdf"
        >
          {" "}
          Résumé PDF <FiDownload />{" "}
        </a>
        <div className="mb-3 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div
                key={i}
                className="po_item card"
                onClick={() => openModal(data)}
              >
                <div
                  className="img"
                  style={{ backgroundImage: `url(${myImages[data.img]})` }}
                ></div>
                <div class="card-body content">
                  <h5 class="card-title">{data.title}</h5>
                  <p>{data.description.slice(0, 150)}</p>
                  <div className="po_footer">
                    <a className="ac_btn btn" href={data.link} target="_blank">
                      {data.github? 'See Live': 'Project Detail'} <RxExternalLink />
                    </a>
                   {data.github ? ( <a
                      className="ac_btn btn"
                      href={data.github}
                      target="_blank"
                    >
                      See Source <AiFillGithub />
                    </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          img={myImages[selectedProject.img]}
          show={showModal}
          handleClose={closeModal}
        />
      )}
    </HelmetProvider>
  );
};
