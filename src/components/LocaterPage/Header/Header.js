import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Placeholder } from "react-bootstrap";
import { StyleHeader } from "./StyleHeader";
import { Form, Formik, ErrorMessage } from "formik";
import Select from "./Select";
import Search from "../../../assets/Search.svg";
import Flag1 from "../../../assets/Flag1.svg";
import Star1 from "../../../assets/Star1.svg";
import Like from "../../../assets/Like.svg";
import Card1img from "../../../assets/Card1img.svg";
import Card2img from "../../../assets/Card2img.svg";
import Card3img from "../../../assets/Card3img.svg";
import Card4img from "../../../assets/Card4img.svg";
import emptyUser from "../../../assets/emptyUser.png";
import emptyLocation from "../../../assets/emptyLocation.png";
import GenerecService from "../../../services/GenericService";
import { API_URL } from "../../../services/config";
import * as Yup from "yup";
import Pagination from "./Pagination";

const validate = Yup.object({
  country: Yup.string().required("Please select a country"),
  city: Yup.string().required("Please select a city"),
  service: Yup.string().required("Please Select a Service"),
});
function Header() {
  const genericService = new GenerecService();

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [countryList, setcountryList] = useState([]);
  const [cityList, setcityList] = useState([]);
  const [serviceList, setserviceList] = useState([]);
  const [doctorsData, setdoctorsData] = useState([]);
  const [cardsLoading, setcardsLoading] = useState(true);



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    genericService
      .get(`${API_URL}getAddresses`)
      .then((res) => {
        setcountryList(res.finalData.country);
        setcityList(res.finalData.city);
        setserviceList(res.finalData.service);
        setcardsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    genericService
      .post(`${API_URL}usersData`, {
        city: "",
        country: "Spain",
        service: "",
        limit: 50,
      })
      .then((res) => {
        setdoctorsData(...doctorsData, res.data);
        setcardsLoading(false);
      })
      .catch((error) => {
        setcardsLoading(false);
        console.log("error", error);
      });
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = doctorsData.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  // const arr = []
  //   for(i , i < lengh < 0++){
  //     console.log(values);
  //     arr.push(genericService
  //       .post(`${API_URL}usersData`, values))

  //   }

  //   Promise.all(arr)

  console.log(doctorsData, "doctorsData");
  return (
    <StyleHeader>
      <div className="header">
        <div className="container">
          <h1>LOCATE</h1>
          <h2>
            DOCTORS, ASSOCIATIONS, CANNABIS CLUBS, CAFES, DISPENSARIES AND
            LAWYERS{" "}
          </h2>
          <Formik
            initialValues={{
              country: "",
              city: "",
              service: "",
            }}
            // validationSchema={validate}
            onSubmit={(values) => {
              setcardsLoading(true);
              const data = { ...values, limit: 50 };
              genericService
                .post(`${API_URL}usersData`, data)
                .then((msg) => {
                  setdoctorsData(msg.data);
                  setcardsLoading(false);
                })
                .catch((error) => {
                  setcardsLoading(false);
                  console.warn("warn", error);
                });
            }}
          >
            {(formik) => (
              <Form>
                <Row className="select-option align-items-center">
                  <Col md={3} sm={6}>
                    <Select
                      label="Country"
                      name="country"
                      title={"Choose country"}
                      list={countryList}
                      className="select"
                    />
                    <ErrorMessage name="country" />
                  </Col>
                  <Col md={3} sm={6}>
                    <Select
                      label="City"
                      name="city"
                      title={"Choose City"}
                      list={cityList}
                    />
                    <ErrorMessage name="city" />
                  </Col>
                  <Col md={3} sm={6}>
                    <Select
                      label="Service"
                      name="service"
                      title={"Choose Service"}
                      list={serviceList}
                    />
                    <ErrorMessage name="service" />
                  </Col>
                  <Col md={3} sm={6}>
                    <Button className="btn" type="submit">
                      <img
                        src={Search}
                        alt="Search icon"
                        className="search-img"
                      />{" "}
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="container">
        {cardsLoading ? (
          <>
            <Placeholder as="p" animation="glow" size="lg">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="wave" size="lg">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="glow" size="lg">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="wave" size="lg">
              <Placeholder xs={12} />
            </Placeholder>
          </>
        ) : (
          <div>
            {doctorsData.length == 0 ? (
              <h1>No Data Found</h1>
            ) : (
              <>
                <Row>
                  {currentPost.map((v , i) => (
                    <Col key={i} lg={3} md={6} sm={6}>
                      <Card className="cards">
                        <div >
                          <img
                            src={emptyLocation}
                            className="img-section"
                            alt="img"
                          />{" "}
                        </div>
                        <div className="card-data">
                          <h6>{v.Title}</h6>
                          <p className="para">{v._address}</p>
                          <div className="d-flex pt-1 text1">
                            <div>
                              <img src={Flag1} className="icon " alt="icon" />
                              <span className="icon-text">
                                {v.LocatorCountries}
                              </span>
                            </div>
                            <div>
                              <img src={Star1} className="icon " alt="icon" />
                              <span className="icon-text">0.0</span>
                            </div>
                            <div>
                              <img src={Like} className="icon " alt="icon" />
                              <span className="icon-text">Likes 0</span>
                            </div>
                          </div>
                          <div>
                            <input
                              type="submit"
                              className="locator-card-bt"
                              name="See Details"
                              value="See Details"
                            />
                          </div>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <Pagination
                  postPerPage={postPerPage}
                  totalPosts={doctorsData.length}
                  paginate={paginate}
                  size="sm"
                />
              </>
            )}
          </div>
        )}
      </div>
    </StyleHeader>
  );
}

export default Header;
