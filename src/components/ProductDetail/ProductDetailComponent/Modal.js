import React from 'react'
import PropTypes from "prop-types"
import { makeStyles } from '@mui/styles'
import Modal from '@mui/material/Modal';
import { Alert, Backdrop, Grid, Typography } from '@mui/material';
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "black",
    border: "2px solid #000",
    boxShadow: "none",
    height: 400,
    width: 500
  },
  img: {
    width: 200,
    height: 200
  }
}))
const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: open ? 1 : 0
    },
    onStart: () => {
      if (open && onEnter) {
        onEnter()
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited()
      }
    }
  })
  return (
    <animated.div ref={ref} style={style}{...other} >
      {children}
    </animated.div>
  )
})

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func
}
const ModalTranstion = (
  { open,
    handleOpen,
    handleClose,
    productDispatch,
  }
) => {
  const classes = useStyles();
  const navigate = useNavigate();
  setTimeout(() => {
    handleClose()
  }, 10000)
  const products = useSelector(state => state.reducerCart.products)
  const sumQuantity = products.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)
  return (
    <>
      <Modal
        className={classes.modal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        
      >
          <Fade  in={open}>
                <div className={classes.paper} >

                </div>
          </Fade>
      </Modal>
    </>
  )
}

export default ModalTranstion