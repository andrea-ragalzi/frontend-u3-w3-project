import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TrackCard from "../hooks/TrackCard";
import Sidebar from '../components/Sidebar'
import Tabbar from "../components/Tabbar";
import Playbar from "../components/Playbar";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
});

function Artist() {
  const params = useParams();
  const [artist, setArtist] = useState({});
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchArtist() {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          params.id,
          {
            method: "GET",
            headers,
          }
        );
        const data = await response.json();
        setArtist(data);
      } catch (error) {
        // ex.: Url is not correct, Internal Server Error
        console.log(error);
      }
    }

    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchTracks() {
      try {
        let response = await fetch(artist.tracklist, {
          method: "GET",
          headers,
        });
        const data = await response.json();
        setTracks(data.data);
        console.log(tracks);
      } catch (error) {
        console.log(error);
      }
    }

    if (artist.tracklist) {
      fetchTracks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

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
              {artist.name && (
                <Row>
                  <Col class="col-12 col-md-10 col-lg-10 mt-5">
                    <h2 class="titleMain">{artist.name}</h2>
                    <div id="followers">{artist.nb_fan} followers</div>
                    <div class="d-flex justify-content-center mb-5" id="button-container">
                      <Button id="follow-button" className="btn btn-success mainButton d-inline" type="button">Play</Button>
                      <Button id="follow-button" className="btn btn-dark mainButton d-inline" type="button">Follow</Button>
                    </div>
                  </Col>
                </Row>
              )}
              <Row className="mx-5">
                <h2 className="text-light">Tracks</h2>
                {tracks &&
                  tracks.map((track) => <TrackCard key={track.id} track={track} />)}
              </Row>
            </Col>
            <Col xs={12}>
              <Playbar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Artist;