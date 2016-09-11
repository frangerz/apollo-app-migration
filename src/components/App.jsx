import React from 'react'
import { connect } from 'react-apollo'
import { Button } from 'react-bootstrap'
import { toggleNavbar } from '../store/actions'

function App({ children, navbar, onToggleNavbar }) {
  return (
    <div id='wrapper'>
      <div id='sidebar-wrapper'>
        <ul className='sidebar-nav'>
          <li className='sidebar-brand'>
            <a
              href='#'
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
        <Button onClick={() => onToggleNavbar(navbar)}>
          Navbar
        </Button>
        <div className='container-fluid'>
          <div className='row'>
              {children}
          </div>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.object,
  onToggleNavbar: React.PropTypes.func.isRequired
}

const mapStateToProps = ({ navbar }) => ({
  navbar
})

const mapDispatchToProps = (dispatch) => ({
  onToggleNavbar:
    (navbar) => dispatch(toggleNavbar(navbar))
})

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(App)
