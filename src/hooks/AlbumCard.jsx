import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchArtist } from '../helpers/fetch'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert';
import { getRandomInt } from "../helpers/helpers";

const AlbumCard = (props) => {
  const { artist } = props;
  const [albumInfo, setAlbumInfo] = useState({});
  const [artistInfo, setArtistInfo] = useState({});
  const [fetchState, setFetchState] = useState(1);

  useEffect(() => {
    const getSongData = async () => {
      const [data, errCode] = await fetchArtist(artist)
      setFetchState(errCode);
      if (data) {
        const randomIndex = getRandomInt(0, data.length - 1);
        try {
          setAlbumInfo(data[randomIndex].album);
          setArtistInfo(data[randomIndex].artist);
        }
        catch (e) {
          setFetchState(2);
        }
      }
      else {
        setFetchState(1);
      }
    }
    setTimeout(getSongData, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchState === 1]);

  return (
    <Col xs={6} md={3} className="text-center albumCard">
      {
        (fetchState === 0 && albumInfo?.cover_medium) && (
          <>
            <Link to={`/album/${albumInfo.id}`}>
              <img className="img-fluid" src={albumInfo.cover_medium} alt="Album cover" />
            </Link>
            <p>
              <Link to={`/album/${albumInfo.id}`} className="albumLink">
                {albumInfo.title.length < 16
                  ? `${albumInfo.title}`
                  : `${albumInfo.title.substring(0, 16)}...`}
                <br />
              </Link>
              <Link to={`/artist/${artistInfo.id}`} className="artistLink">
                {artistInfo.name}
              </Link>
            </p>
          </>
        )
      }
      {
        fetchState === 1 && (
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden text-center"></span>
          </Spinner>
        )
      }
      {
        fetchState === 2 && (
          <Alert variant="danger">Unable to load {artist}'s Album</Alert>
        )
      }
    </Col>
  )
}

export default AlbumCard;