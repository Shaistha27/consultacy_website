import React from "react";
import girl1 from "../images/girl1.jpeg";
const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={girl1} alt="girl" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Thapa</h5>
                <h6>web developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>

                <ul className="nav" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#home "
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#profile"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      Time Line
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                name="btnAddMore"
                id=""
                className="profile-edit-btn"
                value="Edit-Profile"
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Work Link</p>
                  <a
                    href="https://www.youtube.com/@ThapaTechnical"
                    target="_thapa"
                  >
                    Youtube
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/@ThapaTechnical"
                    target="_thapa"
                  >
                    Instagram
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/@ThapaTechnical"
                    target="_thapa"
                  >
                    Thapa Techinal
                  </a>{" "}
                  <br />
                  <a
                    href="https://www.youtube.com/@ThapaTechnical"
                    target="_thapa"
                  >
                    WebsiteGithubMERN DEV
                  </a>
                  <br />
                  <a
                    href="https://www.youtube.com/@ThapaTechnical"
                    target="_thapa"
                  >
                    Web developer
                  </a>
                  <br />
                </div>
                <a
                  href="https://www.youtube.com/@ThapaTechnical"
                  target="_thapa"
                >
                  Figma
                </a>
                <br />
                <a
                  href="https://www.youtube.com/@ThapaTechnical"
                  target="_thapa"
                >
                  Software Engineer
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent"></div>
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User ID</label>
                  </div>
                  <div className="col-md-6">
                    <p>2831981908</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>Vinod Thapa</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>Thapa@technical.com</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Mobile</label>
                  </div>
                  <div className="col-md-6">
                    <p>9911390489</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>Web developer</p>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show active"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>English Leve</label>
                  </div>
                  <div className="col-md-6">
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div className="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
