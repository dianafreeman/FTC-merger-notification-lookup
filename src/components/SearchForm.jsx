import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const FormInput = styled(Form.Control)`
  margin: 0 1em;
  height: intial;
  width: 95%;
  minwidth: 200px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const InputLabel = styled(Form.Label)`
  font-weight: 700;
  display: block
  text-align: center !important
  @media screen and (min-width: 768px) {
    width: 25%;
    display: flex;
  }
`;

const MainForm = styled(Form.Group)`
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: inline-flex;
  }
`;

const HiddenBtnText = styled.p`
  font-size: 0.75em;
  text-align: center;
  margin-top: 0.5em;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

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
