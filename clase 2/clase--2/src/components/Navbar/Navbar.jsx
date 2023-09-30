import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">TodoParrillas</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <p class="nav-link active">Home</p>
                        </li>
                        <li class="nav-item">
                        <p class="nav-link">Parrillas</p>
                        </li>
                        <li class="nav-item">
                        <p class="nav-link">Contacto</p>
                        </li>
                        <li class="nav-item">
                        <p class="nav-link">Donde nos ubicamos?</p>
                        </li>
                        <li class="nav-item">
                        <p class="nav-link"><CartWidget/></p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar