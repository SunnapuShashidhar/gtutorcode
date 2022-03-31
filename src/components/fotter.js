import React from "react";
import { Link } from "react-router-dom";

function Fotter() {
  return (
    <div>
      <div className="container-fluid bg-dark text-center text-align-center pt-5 mt-s">
        <p className="text-info h2">
          GIRRAJ GOVERNMENT COLLEGE(A)
          <br /> NIZAMABAD
        </p>

        <div className="row text-light py-3">
          <div className="col-12 col-md-4">
            <h5 className="text-info">More Links</h5>
            <Link to="/" className="text-light d-block">
              home
            </Link>
            <Link to="/Guidelines" className="text-light d-block">
              Guidelines
            </Link>
            <Link to="/write-a-recomandation" className="text-light d-block">
              Write a recommendation<i className="fas fa-heart"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-justify py-3">
            <p>
              We are team of students from Government Girraj college
              Nizamabad.This is our project named "GTutor(GGC CS E-CONTENT
              HUB)". Aim of the project is to maintain smart notes Hub. There
              exist many online tutors but they don’t provide all concept at one
              site where our smart notes hub provides all concepts related to
              our Academic wise syllabus of our college and general concept.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="text-info pb-3">Social</h5>
            <Link to="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </Link>
            <Link to="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3 text-muted text-center">
        <p>copyright@ Shashidhar Sunnapu 2021</p>
      </div>
    </div>
  );
}
export default Fotter;
