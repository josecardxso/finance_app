import React from 'react'
import { Link } from 'react-router-dom'

export default function Recover() {
  return (
    <>
      <div class="main-container">
        <div class="form-container">
          <h1>Recover Account</h1>

          <form>
            <div>
              <input type="text" placeholder="Enter email" required></input>
            </div>

            <Link to={'/Login'}>
              <button type="submit">Submit</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}
