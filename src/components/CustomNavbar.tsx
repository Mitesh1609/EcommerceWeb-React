

function CustomNavbar(){

    return (
        <>
            <nav className = "navbar navbar-expand-lg bg-body-tertiary">
            <div className="position-relative">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/signUp">Sign Up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/login">Login</a>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
        </>
    );
}

export default CustomNavbar;