import React from 'react'
import { Button } from 'react-bootstrap'

export default function App({ children }) {
  return (
    <div>
      <div id='wrapper'>
        <div id='sidebar-wrapper'>
          <ul className='sidebar-nav'>
            <li className='sidebar-brand'>
              <a href='#' className='menu-toggle' style='font: bold 2rem Georgia, serif;'>
                <h2>
                  <i className='glyphicon glyphicon-check'> </i>
                    Be-Lancer
                </h2>
              </a>
            </li>
            <li>
              <a href='/clients'>Dashboard</a>
            </li>
            <li>
              <a href='/jobs'>Jobs Search</a>
            </li>
            <li>
              <a href='/appointments'>Appointments</a>
            </li>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/jobs'>Invoices</a>
            </li>
            <li>
              <a href='/reviews'>Reviews</a>
            </li>
            <li>
              <a href='/users'>Settings</a>
            </li>
            <li>
              <Button>
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object
}
