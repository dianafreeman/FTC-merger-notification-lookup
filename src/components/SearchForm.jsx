/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import {
  SubmitButton, HiddenBtnText, MainForm, InputLabel, FormInput,
} from '../elements/index.jsx';

const SearchForm = ({ onSubmitClick, searchInput, onInputChange }) => {
  const ShowButton = () => (
    <SubmitButton variant="primary" type="submit" onClick={onSubmitClick}>
      Go!
    </SubmitButton>
  );
  const HideButton = () => (
    <HiddenBtnText>
      {"Don't worry, a button will appear once you've typed a valid entry."}
    </HiddenBtnText>
  );
  return (
    <Form>
      <MainForm className="search-form">
        <InputLabel className="input-label">Keyword to Search</InputLabel>
        <FormInput
          type="text"
          placeholder="e.g. 'Blockbuster' "
          onChange={onInputChange}
          className="text-input"
        />
        <div className="fixed-width-btn-container">
          {' '}
          {searchInput.length === 0 ? <HideButton /> : <ShowButton />}
        </div>
      </MainForm>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmitClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};
