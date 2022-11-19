import React from 'react'
import { Dialog, Icon, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { connect } from 'react-redux';
import * as action from "./Redux/Actions/action"
import { useForm } from 'react-hook-form';
import SignUp from './SignUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { LOGOUT } from './Redux/Contansts/contants';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({
  nav1Menu: {},
  backdrop: {},
  SignInContainer: {},
  closeSignIn: {},
  nike: {},
  formHeader: {},
}))
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})
const SignIn = (props) => {
  const classes = useStyles()
  let { open } = props;
  let { openSU } = props;
  let { isAdmin } = props;

  const [userMenu, setUserMenu] = React.useState(false)

  //  validation form
  const { register, handSubmit, errors } = useForm({
    mode: "onBlur"
  })
  const onSubmitSignIn = (data, e) => {

  }
  const onCloseSignIn = (data, e) => {

  }
  const onSubmitSignUp = () => {

  }
  let { userLocal } = props;
  return (
    <div>
      {!userLocal && (
        <div >
          <span className={classes.nav1Menu}
          >Join us</span>

          <span className={classes.nav1Menu}
            onClick={() => {
              props.emitOpen(!props.open)
            }}
          >
            Sign In
          </span>
          <Dialog open={open ? true : false}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => {
              props.emitOpen(!props.open)
              onCloseSignIn()
            }}
            classes={{
              root: classes.backdrop
            }}
          >
            <div className={classes.SignInContainer} >
              <IconButton
                className={classes.closeSignIn}
                onClick={() => {
                  props.emitOpen(!open)
                  onCloseSignIn();
                }}
              >
              </IconButton>
              {/* header */}
              <div >
                <center >
                  <img src="https://royaltoys.com.vn/wp-content/uploads/2022/10/logo.png"
                    className={classes.nike}
                  />
                </center>
              </div>
              <div className={classes.formHeader}>
                YOUR ACCOUNT FOR EVERYTHING NIKE
              </div>
            </div>
          </Dialog>
        </div>
      )}


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    open: state.reducerSignInSignUp.open,
    openSU: state.reducerSignInSignUp.openSU,
    userLocal: state.reducerSignInSignUp.userLocal,
    isAdmin: state.reducerSignInSignUp.isAdmin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emitOpen: (valueOpen) => {
      dispatch(action.emitOpenAction(valueOpen))
    },
  
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)