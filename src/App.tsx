import './App.css'
import {NavLink} from "react-router";

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="#">
                                <NavLink to="/Colombia" end>
                                    Colombia
                                </NavLink>
                            </a>
                            <a className="nav-link" href="#">
                                <NavLink to="/Mexico" end>
                                    Mexico
                                </NavLink>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default App
