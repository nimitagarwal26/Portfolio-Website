import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import StaticCodeAnalyser from "../../Assets/Projects/StaticCodeAnalyser.png";
import SushiMan from "../../Assets/Projects/SushiMan.png";
import CryptoHunter from "../../Assets/Projects/CryptoHunter.png";
import CarRental from "../../Assets/Projects/CarRental.png";
import BloomHub from "../../Assets/Projects/BloomHub.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarRental}
              isBlog={false}
              title="Car Rental System"
              description="The Car Rental System is a Java-based application designed to streamline car rental operations. It allows users to manage a fleet by adding new cars, checking availability, renting, and returning vehicles. The system is ideal for small to medium-sized businesses, offering a user-friendly interface and robust functionality. With object-oriented design principles, it ensures maintainability and scalability, making it a reliable solution for efficient car rental management.                                                                    "
              ghLink="https://github.com/manidixit51/Car-Rental-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BloomHub}
              isBlog={false}
              title="Bloom Hub"
              description="BloomHub is a captivating HTML/CSS static website revolutionizing flower purchasing. Its visually stunning catalog showcases fresh blooms for every occasion. With a seamless ordering process, users effortlessly select and purchase bouquets. Reliable delivery ensures flowers arrive fresh and on time. BloomHub aims to enhance the floral shopping experience, prioritizing elegance, convenience, and quality."
              // ghLink="https://github.com/manidixit51/Sushi-Man"
              // demoLink="https://manidixit51.github.io/Sushi-Man/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SushiMan}
              isBlog={false}
              title="Sushi Man"
              description="Sushi Man is a sleek and user-friendly frontend website designed for sushi enthusiasts seeking a convenient and enjoyable dining experience. With its intuitive interface crafted using HTML and CSS, users can effortlessly browse through a diverse selection of sushi options and place orders with ease. The responsive design ensures seamless navigation across various devices, enhancing accessibility and ensuring that sushi lovers can satisfy their cravings anytime, anywhere."
              ghLink="https://github.com/manidixit51/Sushi-Man"
              demoLink="https://manidixit51.github.io/Sushi-Man/"
            />
          </Col>
          

          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
