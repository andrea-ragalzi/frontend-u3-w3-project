import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const TrackCard = ({ track }) => {
    return (
        <Col xs={6} md={3} className="text-center albumCard">
            <Link to={`/album/${track.album.id}`}>
                <img className="img-fluid" src={track.album.cover_medium} alt="Album cover" />
            </Link>
            <p>
                <Link to={`/album/${track.album.id}`} className="albumLink text-light text-decoration-none">
                    {track.album.title.length < 16
                        ? `${track.album.title}`
                        : `${track.album.title.substring(0, 16)}...`}
                    <br />
                </Link>
                <Link to={`/artist/${track.artist.id}`} className="albumLink text-light text-decoration-none">
                    {track.artist.name}
                </Link>
            </p>
        </Col>
    );
};

export default TrackCard;
