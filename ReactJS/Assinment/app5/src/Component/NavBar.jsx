import React from 'react'
import { Link } from 'react-router-dom'

 const NavBar = () => {
  return (
    <div id='Reddy'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <Link class="navbar-brand" to={"/"}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
       <Link to={"Create"} class="nav-link ">CreateUser</Link>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default NavBar