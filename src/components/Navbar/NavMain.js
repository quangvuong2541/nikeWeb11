import React from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import { PropTypes } from 'prop-types'

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "white !important",
    color: "black !important",
    position: "sticky",
    height: 60,
    boxShadow: "none",
    fontFamily: "-moz-initial"
  },
  toolbar: {
    padding: 0
  },
  fallback: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: " 100%",
    zIndex: -1,
  }
}))
const NavMain = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <HideOnScroll   {...props}>
        <AppBar className={classes.nav}>
          <Toolbar className={classes.toolbar}>
            {/*  nav menu */}
            {/* logo nike */}
            {/* navMain feature */}
          </Toolbar>
          {/* search box */}
        </AppBar>
      </HideOnScroll>
      <div id ="falback" className={classes.fallback}> </div>
    </React.Fragment>
  )
}

export default NavMain