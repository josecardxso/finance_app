import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGoogle,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div class="main-container">
        <div class="form-container">
          <h1>Hello There!</h1>
          <form>
            <input type="text" placeholder="Enter email"></input>
            <input type="password" placeholder="Password"></input>
            <p class="recover">
              <Link to="/Recover">Recover Password </Link>
            </p>
          </form>
          <button>Sign in</button>
          <p class="or">----- or continue with -----</p>
          <div class="icons">
            <i class="fab fa-google">
              <FontAwesomeIcon icon={faGoogle} />
            </i>
            <i class="fab fa-github">
              <FontAwesomeIcon icon={faGithub} />
            </i>
            <i class="fab fa-facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </i>
          </div>
          <div class="not-member">
            Not a member? <Link to={'/Signup'}>Register Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}
