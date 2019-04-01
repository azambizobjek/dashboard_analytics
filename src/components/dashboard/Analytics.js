import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AnalyticComps from "../dashboard/AnalyticComps";
// import ReactToPrint from "react-to-print";
// import Tooltip from "rc-tooltip";
// import { getListAudit } from "../../../actions/auditTrailAction/auditAction";

class Analytics extends Component {
  render() {
    return (
      <Fragment>
        <div className='breadcrumb-holder'>
          <div className='container-fluid' />
        </div>

        <section>
          <div className='container-fluid'>
            <header>
              <div className='d-flex align-items-center justify-content-between'>
                <h1 className='h3 display'>Dashboard</h1>
                {/* 
                <div className='d-flex align-items-center'>
                  <Tooltip
                    placement='top'
                    overlay={
                      <div style={{ height: 20, width: "100%" }}>Print</div>
                    }
                    arrowContent={<div className='rc-tooltip-arrow-inner' />}
                  >
                    <ReactToPrint
                      trigger={() => (
                        <button
                          className='btn btn-sm btn-primary ml-2'
                          href='#'
                        >
                          <i className='fa fa-print' />
                        </button>
                      )}
                      content={() => this.componentRef}
                    />
                  </Tooltip>
                </div> */}
              </div>
            </header>

            {/* <div className='row'> */}
            {/* <div className='col-lg-12'> */}
            <AnalyticComps ref={el => (this.componentRef = el)} />
            {/* </div> */}
            {/* </div> */}
          </div>
        </section>
      </Fragment>
    );
  }
}

Analytics.propTypes = {
  // auditlog: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
  // getListAudit: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  session: state.session
});
export default connect(
  mapStateToProps,
  {}
)(Analytics);
