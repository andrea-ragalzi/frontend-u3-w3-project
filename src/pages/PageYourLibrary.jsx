import { Col, Container, Row } from 'react-bootstrap'
import Tabbar from '../components/Tabbar'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import TrackCard from "../hooks/TrackCard";
import { useSelector } from "react-redux";

const PageYourLibrary = () => {
    const tracks = useSelector((state) => state.favourites.favourites);

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
                            <div className="m-5">
                                <h1 className="sectionTitle text-light">Your Library</h1>
                            </div>
                            <Row>
                                {tracks.map((track) => <TrackCard key={track.id} track={track} />)}
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

export default PageYourLibrary;