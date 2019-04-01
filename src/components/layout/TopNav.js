import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { setNavToggle, setActivePage } from "../../actions/layoutInitAction";
import { basicSearch } from "../../actions/searchAction";
import { logout } from "../../actions/authAction";

class TopNav extends Component {
  searchParam = e => {
    e.preventDefault();
    this.props.basicSearch(e.target.searchTxt.value);
  };
  doParentToggleFromChild = e => {
    e.preventDefault();
    const { toggleSideNav } = this.props.layout;
    const windowWidth = window.innerWidth;
    const pageClass = windowWidth > 1194 ? "page active" : "page active-sm";
    const navClass =
      windowWidth > 1194 ? "side-navbar shrink" : "side-navbar show-sm";
    this.props.setNavToggle(!toggleSideNav, pageClass, navClass);
  };

  setActivePage = e => {
    e.preventDefault();
    this.props.setActivePage("dashboard");
  };
  logout = e => {
    e.preventDefault();
    const {
      user: { bio_access_id: bId }
    } = this.props.session;
    this.props.logout({ bio_access_id: bId });
  };
  render() {
    return (
      <Fragment>
        <header className='header'>
          <nav className='navbar'>
            <div className='container-fluid'>
              <div className='navbar-holder d-flex align-items-center justify-content-between'>
                <div className='navbar-header'>
                  <a
                    href='/'
                    id='toggle-btn'
                    className='menu-btn'
                    onClick={this.doParentToggleFromChild}
                  >
                    <i className='fa fa-bars'> </i>
                  </a>

                  <a
                    href='/'
                    className='navbar-brand'
                    onClick={this.setActivePage}
                  >
                    <div className='brand-text d-none d-md-inline-block'>
                      <span>Canon </span>
                      <strong className='text-primary'>DMS</strong>
                    </div>
                  </a>
                </div>
                <ul className='nav-menu list-unstyled d-flex flex-md-row align-items-md-center'>
                  <li className='nav-item'>
                    <form
                      className='input-group input-group-sm'
                      onSubmit={this.searchParam}
                    >
                      <input
                        type='text'
                        className='form-control'
                        name='searchTxt'
                        aria-label='Small'
                        aria-describedby='inputGroup-sizing-sm'
                        placeholder='Search...'
                      />
                      <div className='input-group-append'>
                        <button
                          type='submit'
                          className='input-group-text btn-sm'
                        >
                          <i className='fa fa-search' aria-hidden='true' />
                        </button>
                      </div>
                    </form>
                  </li>

                  <li className='nav-item'>
                    <a
                      href='/'
                      className='nav-link logout'
                      onClick={this.logout}
                    >
                      <span className='d-none d-sm-inline-block'>Logout</span>
                      <i className='fa fa-sign-out' aria-hidden='true' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }
}
TopNav.propTypes = {
  layout: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  setNavToggle: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  layout: state.layout,
  search: state.searchConf,
  session: state.session
});
export default connect(
  mapStateToProps,
  { setNavToggle, setActivePage, basicSearch, logout }
)(TopNav);
