import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';


const SearchForm = ({ onSubmitClick, searchInput, onInputChange }) => {
  const SubmitBtn = () => <Button variant="primary" type="submit" style={{ width: '100%' }} onClick={onSubmitClick}>Go!</Button>;
  const DisabledText = () => <p className="mt-1 hidden-btn-text">{'You don\'t need a button yet.'}</p>;
  return (
    <Form>
      <Form.Group className="search-form">
        <Form.Label className="input-label">Business Name to Search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a name or phrase"
          onChange={onInputChange}
          className="text-input"
          style={{
            margin: '0 1em', height: 'initial', width: '75%', minWidth: '400px',
          }}
        />
        <div className="fixed-width-btn-container">
          {' '}
          {(searchInput.length === 0 ? <DisabledText /> : <SubmitBtn />)}
        </div>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};
