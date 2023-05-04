import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'



export default function Signup() {

    
 
  return (
    <>
    
    <div class="main-container">
        <div class="form-container">
          <h1>Hello There!</h1>
          
          <form >
            <div>
              <input type="text" placeholder="Enter email"  required></input>
              <input type="password" placeholder="Password"  required></input>
              <input type="password" placeholder="Password Confirmation"  required></input>
            </div>
            
            <button className="w-100" type="submit">
              Sign Up
            </button>
          </form>
          
          <div class="not-member">
            already a member? <Link to="/Login">Sign in!</Link>
          </div>
        </div>
    </div>
    </>
  )
}
