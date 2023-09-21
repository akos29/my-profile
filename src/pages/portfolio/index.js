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
        <div className="mb-3 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item card">
                {/* <div
                  className="h_bg-image order-1 order-lg-2 h-100 "
                  style={{ backgroundImage: `url(${myImage1})` }}
                ></div> */}
                <img src={`${myImages[data.img]}`} alt="" />
                <div class="card-body content">
                  <h5 class="card-title">{data.title}</h5>
                  <p>{data.description}</p>
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
