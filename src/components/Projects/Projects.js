import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import StaticCodeAnalyser from "../../Assets/Projects/StaticCodeAnalyser.png";
import CryptoHunter from "../../Assets/Projects/CryptoHunter.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CryptoHunter}
              isBlog={false}
              title="Crypto Hunter"
              description="Crypto Hunter is a sleek and intuitive application designed to empower cryptocurrency enthusiasts with real-time market insights. Integrated with Coin Gecko API for live updates, and fortified with Firebase for secure authentication and data storage, users can navigate the ever-changing landscape of digital currencies effortlessly. Built with React.js and Material UI, its responsive design ensures seamless access across devices, providing users with a visually appealing and dynamic tool for informed decision-making in the world of cryptocurrencies."
              ghLink="https://github.com/nimitagarwal26/CryptoHunter"
              
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StaticCodeAnalyser}
              isBlog={false}
              title="Static Code Analyser"
              description="The Static Code Analyzer is a robust tool designed to analyze Java source code statically, identifying potential issues, violations of coding conventions, and design flaws. It dynamically processes XML-based rules for flexible rule definitions and customization. The tool integrates a perceptron-based AI model to evaluate code quality, detect patterns, and identify areas for improvement. Additionally, it features a comment density checker to ensure the maintainability and clarity of the codebase by evaluating the adequacy of code comments."
              ghLink="https://github.com/K144U/--static_code_analysis_ISRO_respondbasket"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
