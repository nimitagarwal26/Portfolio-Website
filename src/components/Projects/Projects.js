import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bus from "../../Assets/Projects/bus.png";
import CryptoHunter from "../../Assets/Projects/CryptoHunter.png";
import ttt from "../../Assets/Projects/ttt.png";

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
              imgPath={bus}
              isBlog={false}
              title="Bus Booking System"
              description="The bus booking project, built using Python, simplifies the ticket reservation process with features like seat selection, payment processing, and scheduling. It leverages real-time data to manage bookings, cancellations, and availability efficiently. The system ensures a seamless experience for users by providing intuitive interfaces, while administrators benefit from streamlined operations and robust management tools. This project aims to enhance the overall efficiency and user satisfaction in bus travel reservations."
              ghLink="https://github.com/nimitagarwal26/Bus-Booking-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="Tic Tac Toe"
              description="The Tic Tac Toe project is a classic game developed to provide engaging entertainment. It allows two players to compete on a 3x3 grid, aiming to align three marks in a row, column, or diagonal. With an intuitive interface, the game ensures a seamless user experience, offering both fun and mental stimulation. Ideal for quick play sessions, it helps improve strategic thinking and decision-making skills."
              ghLink="https://github.com/nimitagarwal26/TicTacToe"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
