import React from 'react'
import { Button } from 'react-bootstrap'
import { toggleNavbar } from '../store/actions'
export default function App({ children }) {
  return (
    <div id='wrapper'>
      <div id='sidebar-wrapper'>
        <ul className='sidebar-nav'>
          <li className='sidebar-brand'>
            <a
              href='#'
              href='#menu-toggle'
              className='menu-toggle'
            >
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
            <a href='/services'>Service</a>
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
      <div id='page-content-wrapper'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object
}
