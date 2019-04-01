import React, { Component, Fragment } from 'react'
import posed, {PoseGroup} from 'react-pose'

import Dashboard from '../components/dashboard/Dashboard'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {setNavToggle,setPageClass, setSideNavClass} from '../actions/layoutInitAction'
import {Footer, SideNav, TopNav} from '../components/layout'

const RouteContainer = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
          y: { type: 'spring', stiffness: 1000, damping: 15 },
          default: { duration: 300 }
        }
      },
      exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
      },
  })

class Home extends Component {    

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
    updateDimensions=()=>{
        const windowWidth=window.innerWidth
        const pageClass = windowWidth > 1194 ? 'page active' : 'page active-sm'
        const navClass =  windowWidth > 1194 ? 'side-navbar shrink' : 'side-navbar show-sm'

        this.props.setNavToggle(false, pageClass, navClass)
    }

    components={
        'dashboard' : Dashboard,

     
        
    }
     

  render() {       
      const {pageClass,activePage:pName}=this.props.layout                
      const Page=this.components[pName]
    return (
        <Fragment>
            <SideNav/>
                <div className={pageClass}>
                    <TopNav/>
                        <PoseGroup>
                            <RouteContainer key={pName}>
                                <Page/>
                            </RouteContainer>
                        </PoseGroup>
                    <Footer/>
                </div>
    </Fragment>
    )
  }
}
Home.propTypes={
    layout:PropTypes.object.isRequired,
    setNavToggle:PropTypes.func.isRequired,
    setPageClass:PropTypes.func.isRequired,
    setSideNavClass:PropTypes.func.isRequired,
  }
  const mapStateToProps= state =>({
    layout:state.layout
  })
  export default connect(mapStateToProps, {setPageClass,setSideNavClass,setNavToggle})(Home)