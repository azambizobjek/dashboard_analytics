import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
// import Alert from 'react-s-alert'
// import failed from '../mp3/failed.mp3'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/authAction";
import { Row, Col, Form, Card, CardBody } from "reactstrap";

const Circle = posed.div({
  attention: {
    scale: 1.3,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 0
    }
  }
});

const imageUrl = require(`../img/login4.jpg`);
const styles = {
  header: {
    backgroundImage: `url(${imageUrl})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onUsrFocus: false,
      onPssFocus: false,
      redirectToReferrer: false
    };
  }
  setUserState(usrData) {
    const jsonResult = usrData.results[0];
    if (usrData.success && usrData.code === 200) {
      if (typeof Storage !== "undefined") {
        sessionStorage.bio_access_id = jsonResult.bio_access_id;
        sessionStorage.stakeholder_id = jsonResult.stakeholder_id;
        sessionStorage.stakeholder_name = jsonResult.stakeholder_name;
        sessionStorage.designation = jsonResult.roles[0].title;
        sessionStorage.setItem("isAuth", true);

        localStorage.getItem(jsonResult.stakeholder_id) === null
          ? localStorage.setItem(
              jsonResult.stakeholder_id,
              JSON.stringify({ editRec: [], searchKey: [] })
            )
          : console.log("profile found");
      } else {
        console.log("browser not support session storage");
      }
    } else {
      console.log("err");
    }

    this.setState({ redirectToReferrer: true });
  }
  authUser = e => {
    e.preventDefault();
    const usrInput = e.target.loginUsername.value,
      saperatorIdx = usrInput.indexOf("@"),
      usrName = usrInput.substr(0, saperatorIdx),
      repoName = usrInput.substr(saperatorIdx + 1);

    const loginObj = {
      _action: "login",
      username: usrName,
      password: e.target.loginPassword.value,
      datasetid: repoName
    };
    this.props.login(loginObj);
  };
  render() {
    return (
      <div className='page login-page' style={styles.header}>
        <div className='center'>
          <div className='container'>
            <Row className='full-height-vh mt-5'>
              <Col
                xs='12'
                className='d-flex align-items-center justify-content-center mt-5'
              >
                <Card className='gradient-indigo-blue text-center width-400'>
                  <CardBody>
                    {/* <PoseGroup> */}
                    <Circle>
                      <img
                        src={require("../img/cdms21.png")}
                        alt='group'
                        className='card-img-top img-fluid'
                      />
                    </Circle>
                    {/* </PoseGroup> */}

                    <Form className='pt-2'>
                      <form style={styles.form} onSubmit={this.authUser}>
                        <div className='form-group'>
                          <input
                            type='text'
                            name='loginUsername'
                            className='form-control'
                            placeholder='Username'
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='password'
                            name='loginPassword'
                            className='form-control'
                            placeholder='Password'
                          />
                        </div>

                        <div className='form-group'>
                          <button
                            type='submit'
                            className='btn btn-primary btn-block'
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <center>
            <a href='http://www.bizobjek.com' className='text-light'>
              Copyright © 2018 BIZ OBJEK SDN BHD All rights reserved
            </a>
          </center>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  session: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  session: state.session
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
