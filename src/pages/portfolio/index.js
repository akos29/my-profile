import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ProjectModal from "./ProjectModal";
import myImage1 from "../../assets/images/portfolio/1.jpg";
import myImage2 from "../../assets/images/portfolio/2.jpg";
import myImage3 from "../../assets/images/portfolio/3.jpg";
import myImage4 from "../../assets/images/portfolio/4.jpg";
import Kibrewossen_Mekasha_Resume from "../../assets/Kibrewossen_Mekasha_Resume.pdf"
import { FiDownload } from 'react-icons/fi'

export const Portfolio = () => {
  const myImages = [myImage1, myImage2, myImage3, myImage4];

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
        <a href={Kibrewossen_Mekasha_Resume}  className="download" download="Kibrewossen_Mekasha_Resume.pdf" > Résumé PDF <FiDownload /></a> 
        <div className="mb-3 po_items_ho">
       
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item card">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${myImages[data.img]})` }}
                ></div>
                {/* <img src={`${myImages[data.img]}`} alt={data.title} /> */}
                <div class="card-body content">
                  <h5 class="card-title">{data.title}</h5>
                  <p>{data.description.slice(0,150)}</p>
                  {/* <a href={data.link}>view project</a> */}  
                  <ProjectModal project={data} img={myImages[data.img]} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
