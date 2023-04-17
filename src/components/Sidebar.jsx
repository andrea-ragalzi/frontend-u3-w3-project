import { Row, Col, Navbar, Nav, Button, Image, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Searchbar from '../hooks/Searchbar';

const Sidebar = () => {
    return (
        <div className="col-2">
            <aside>
                <Navbar
                    className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                    id="sidebar"
                >
                    <div className="nav-container">
                        <NavLink className="navbar-brand" to="/">
                            <Image src="/assets/Spotify_Logo.png"
                                alt="Spotify_Logo"
                                width="131"
                                height="40" />
                        </NavLink>
                        <Button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </Button>
                        <Navbar.Collapse className="collapse navbar-collapse">
                            <Nav className="navbar-nav">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <NavLink className="nav-item nav-link" to="/">
                                            <i className="fas fa-home fa-lg"></i>&nbsp; Home
                                        </NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <NavLink className="nav-item nav-link" to="/your-library">
                                            <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                                            Library
                                        </NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Searchbar></Searchbar>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Nav>
                        </Navbar.Collapse>
                    </div>

                    <div className="nav-btn">
                        <Button className="btn signup-btn" type="button">Sign Up</Button>
                        <Button className="btn login-btn" type="button">Login</Button>
                        <Row>
                            <Col xs={12}>
                                <Link to='/'>Cookie Policy</Link>
                                <Link to='/'>Privacy</Link>
                            </Col>
                        </Row>
                    </div>
                </Navbar>
            </aside >
        </div >
    )
}

export default Sidebar;