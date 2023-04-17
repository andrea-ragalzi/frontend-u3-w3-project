import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const Tabbar = () => {
    const navigate = useNavigate()
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <Nav className='mainLinks' activeKey={navigate}>
                        <Nav.Item>
                            <NavLink to="/trending">TRENDING</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/podcast">PODCAST</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/mood-genres">MOODS AND GENRES</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/new-releases">NEW RELEASES</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/discover">DISCOVER</NavLink>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default Tabbar;