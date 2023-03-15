import React from 'react'

const C_header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
  <a className="navbar-brand" href="#">SR Quiz-App 
  <i className="fa fa-graduation-cap logo" aria-hidden="true"></i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
     
      <li className="nav-item">
        <a className="nav-link" href="#">
          <button className='log-btn'>Login</button>
        </a>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default C_header