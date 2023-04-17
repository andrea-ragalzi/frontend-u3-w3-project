import { Col, Container, Row } from 'react-bootstrap'
import Tabbar from '../components/Tabbar'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import TrackCard from '../hooks/TrackCard'
import { useSelector } from "react-redux";

const PageResults = () => {
    const tracks = useSelector((state) => state.search.tracks);
    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={10}>
                    <Row>
                        <Col xs={12}>
                            <Tabbar />
                        </Col>
                        <Col xs={12}>
                            <Row className='mx-5 mt-5'>
                                <h2 className="sectionTitle mb-5 text-light">Results:</h2>
                                {tracks.map((track) => (
                                    <TrackCard key={track.id} track={track} />
                                ))}
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Playbar />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default PageResults