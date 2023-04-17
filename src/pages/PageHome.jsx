import { Col, Container, Row } from 'react-bootstrap'
import Tabbar from '../components/Tabbar'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import Gallery from '../components/Gallery'
import { hipHopArtists, popArtists, rockArtists } from '../helpers/constant'

const PageHome = () => {
    return (
        <Container className='mx-3' fluid style={{ overflowY: 'scrolly', maxHeight: '800px' }}>
            <Row className='justify-content-center'>
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={12} md={8} lg={6}>
                    <Row>
                        <Col xs={12}>
                            <Tabbar />
                        </Col>
                        <Col xs={12}>
                            <Gallery name='Rock' artists={rockArtists} elements={4} mode={0} />
                        </Col>
                        <Col xs={12}>
                            <Gallery name='Pop' artists={popArtists} elements={4} mode={0} />
                        </Col>
                        <Col xs={12}>
                            <Gallery name='Hip Hop' artists={hipHopArtists} elements={4} mode={0} />
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

export default PageHome;