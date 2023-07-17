import React from 'react'
import{Link}from "react-router-dom"
 const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://collegedunia.com/university/54821-jawaharlal-nehru-technological-university-jntu-anantapur"target='blank'>Reddy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
       
        <Link class="nav-link active" to={"/"}>CreateUser</Link>
       
        <Link class="nav-link" to={"Edit"}>EditUser</Link>
       
        <Link class="nav-link" to={"Delete"}>DeleteUser</Link>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
export default NavBar