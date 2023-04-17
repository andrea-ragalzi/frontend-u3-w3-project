import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import Tabbar from '../components/Tabbar'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { headers } from '../helpers/constant'
import { useDispatch } from "react-redux";
import { addToFavouritesAction, deleteFromFavouritesAction } from '../actions/favouritesAction';

const PageAlbum = () => {
    const params = useParams();
    const [album, setAlbum] = useState({});
    const dispatch = useDispatch();
    
    const handleClick = (track, mode) => {
        if (mode) {
            dispatch(addToFavouritesAction(track));
        }
        else {
            dispatch(deleteFromFavouritesAction(track));
        }
    }

    useEffect(() => {
        async function fetchAlbum() {
            try {
                let response = await fetch(
                    "https://striveschool-api.herokuapp.com/api/deezer/album/" +
                    params.id,
                    {
                        method: "GET",
                        headers,
                    }
                );
                const data = await response.json();
                setAlbum(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchAlbum();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                            <Row className='mt-5 mx-5'>
                                <Col xs={12} md={4} >
                                    {album.title && (
                                        <div className="mb-4">
                                            <Image src={album.cover_medium} />
                                            <h2 className="text-light sectionTitle">{album.title}</h2>
                                            <Link className='text-light text-decoration-none' to={`/artist/${album.artist.id}`}>{album.artist.name}</Link>
                                        </div>
                                    )}
                                </Col>
                                <Col id='trackList' xs={12} md={8} className='p-5'>
                                    {album.tracks &&
                                        album.tracks.data.map((track, index) => (
                                            <Row className='justify-content-between py-3 trackHover' key={track.id}>
                                                <Col>
                                                    <h4
                                                        className="text-light card-title trackHover px-3"
                                                    >
                                                        {track.title}
                                                    </h4>
                                                </Col>
                                                <Col>
                                                    <Button onClick={() => handleClick(track, 1)} className='btn btn-success me-1'>❤️</Button>
                                                    <Button onClick={() => handleClick(track, 0)} className='btn btn-success'>🔥</Button>
                                                </Col>
                                                <Col>
                                                    <h4
                                                        className="text-light card-title trackHover px-3"
                                                    >
                                                        {(track.duration / 60).toFixed(2)}
                                                    </h4>
                                                </Col>
                                            </Row>
                                        ))}
                                </Col>
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

export default PageAlbum