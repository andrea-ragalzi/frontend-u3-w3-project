import { Col, Container, Row } from 'react-bootstrap'
import Tabbar from '../components/Tabbar'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import Gallery from '../components/Gallery'

const PagePodcast = () => {
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
                            <Gallery name='Podcast' artists={['crime', 'war', 'love', 'peace']} elements={20} mode={0} />
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

export default PagePodcast