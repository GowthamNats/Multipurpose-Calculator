import React from 'react';
import './Sidebar.css';

const Sidebar = () => {

    function isactive(e) {
        var arr = window.location.href.split("/");
        if (arr[3] === e) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "320px"}}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-4">Calculate.io</span>
                </a>
                <hr />
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="/" className={isactive("") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Standard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/linear" className={isactive("linear") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Linear Equations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/quadratic" className={isactive("quadratic") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Quadratic Equations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/cubic" className={isactive("cubic") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Cubic Equations
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/trigonometry" className={isactive("trigonometry") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Trigonometry
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/statistics" className={isactive("statistics") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Statistics
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/complex" className={isactive("complex") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Complex Numbers
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/matrix" className={isactive("matrix") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Matrices
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/vector" className={isactive("vector") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Vectors
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/mensuration" className={isactive("mensuration") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Mensuration
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/numbertheory" className={isactive("numbertheory") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Number Theory
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/progressions" className={isactive("progressions") ? 'nav-link active' : 'nav-link'} aria-current="page">
                            Progressions
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    )
}

export default Sidebar;
