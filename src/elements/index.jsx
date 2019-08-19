import styled from 'styled-components';
import {
  Col, Form, Button, Card,
} from 'react-bootstrap';

export const Masthead = styled(Col)`
  margin: 1em 0.5em;
  padding: 1em;
  border-radius: 20px;
  background: rgba(225, 225, 225, 0.7);
  border: 1px solid white;
`;
export const Logo = styled.img`
  border-radius: 100%;
  float: left;
  margin: 0 1em;
`;
export const AsideTitle = styled.h2`
  font-size: 20px !important;
  text-align: center;
`;

export const ReferenceLink = styled.a`
  font-size: 0.5em;
  color: gray;
  display: inline-block;
`;

export const FormInput = styled(Form.Control)`
  margin: 0 1em;
  height: intial;
  width: 95%;
  minwidth: 200px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const InputLabel = styled(Form.Label)`
  font-weight: 700;
  display: block
  text-align: center !important
  @media screen and (min-width: 768px) {
    width: 25%;
    display: flex;
  }
`;

export const MainForm = styled(Form.Group)`
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: inline-flex;
  }
`;

export const HiddenBtnText = styled.p`
  font-size: 0.75em;
  text-align: center;
  margin-top: 0.5em;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const AsideCard = styled(Card)`
  background-color: rgba(225, 225, 225, 0.5);
  border: 1px solid white;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const InfoText = styled.p`
  font-size: 1em;
  font-style: italic;
  color: white;
  text-align: center;
`;
