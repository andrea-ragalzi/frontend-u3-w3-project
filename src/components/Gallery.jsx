import { Row } from "react-bootstrap";
import AlbumCard from "../hooks/AlbumCard";
import { getRandomInt } from "../helpers/helpers";

const Gallery = (props) => {
    const { name, artists, elements, mode } = props;
    const elementsNumber = [];
    for (let i = 0; i < elements; i++) {
        elementsNumber.push(i);
    }
    return (
        <>
            <h2>{name}</h2>
            <Row>
                {elementsNumber.map(index => {
                    return <AlbumCard key={index} artist={artists[getRandomInt(0, artists.length-1)]} />
                })}
            </Row>
        </>
    )
}

export default Gallery;