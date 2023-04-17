import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";


const Playbar = () => {
    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row>
                <Col lg={10} className="offset-lg-2">
                    <Row>
                        <Col xs={6} md={4} lg={2}
                            className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                            <Row>
                                <Col xs={2}>
                                    <Link to="/">
                                        <Image src="/assets/Shuffle.png" alt="shuffle" />
                                    </Link>
                                </Col>
                                <Col xs={2}>
                                    <Link to="/">
                                        <Image src="/assets/Previous.png" alt="shuffle" />
                                    </Link >
                                </Col>
                                <Col xs={2}>
                                    <Link to="/">
                                        <Image src="/assets/Play.png" alt="play" />
                                    </Link >
                                </Col>
                                <Col xs={2}>
                                    <Link to="/">
                                        <Image src="/assets/Next.png" alt="next" />
                                    </Link >
                                </Col>
                                <Col xs={2}>
                                    <Link to="/">
                                        <Image src="/assets/Repeat.png" alt="shuffle" />
                                    </Link >
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center playBar py-3">
                        <Col xs={8} md={6}>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={0}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Playbar;