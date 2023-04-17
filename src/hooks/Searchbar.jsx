import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchThunk } from '../actions/fetchResultsAction.js'

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(query.length>0){
      dispatch(fetchSearchThunk(query));
      navigate("/search-results");
    }
  };

  return (
    <Container fluid className="my-4">
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control type="search" placeholder="Search"
          className="form-control mb-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          className="btn btn-outline-secondary"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default Searchbar;
