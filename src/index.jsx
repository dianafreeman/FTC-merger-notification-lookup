/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Container, Row, Col, Card, Spinner,
} from 'react-bootstrap';
import styled from 'styled-components';
import DataCard from './components/DataCard.jsx';
import SearchForm from './components/SearchForm.jsx';
import FixedHeightContainer from './components/FixedHeightContainer.jsx';

const Masthead = styled(Col)`
    margin: 1em .5em;
    padding: 1em;
    border-radius: 20px;
    background: rgba(225, 225, 225, 0.7);
    border: 1px solid white;
`;
const Logo = styled.img`
    border-radius: 100%;
    float: left;
    margin: 0 1em;
`;
const AsideTitle = styled.h3`
  font-size: 24px;
`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: '',
      isLoading: false,
      searchInput: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  componentDidMount() {
    this.loadDefaultData();

    setTimeout(() => {

    }, 5000);
  }


  onInputChange(e) {
    const { error } = this.state;
    this.setState({ searchInput: e.target.value });
    if (error.length > 1) this.setState({ error: '' });
  }

  onSubmitClick(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.updateData();
  }

  updateData() {
    const { searchInput } = this.state;
    fetch(`/search/${searchInput}`)
      .then(response => response.json())
      .then((resp) => {
        if (resp.data.length > 0) {
          this.setState({ data: resp.data, isLoading: false });
        } else {
          this.setState({ error: 'Nothing found. Maybe try another term?', data: [], isLoading: false });
        }
      });
  }

  loadDefaultData() {
    fetch('/data')
      .then(response => response.json())
      .then(resp => this.setState({ data: resp.data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const {
      data, isLoading, error, searchInput,
    } = this.state;
    return (
      <main>
        <Container fluid>
          <Row>
            <Masthead sm={12}>
              <Logo
                src="//logo.clearbit.com/ftc.gov"
                alt="Federal Trade Comission Logo"
              />
              <h1>FTC Early Termination Notice Lookup</h1>
              <blockquote>
                {'The HSR is the '}
                <em>Hart Scott Rodino</em>
                {` act. 
                  The act requires that parties to certain mergers and acquisitions
                  submit premerger notification filings and wait before finalizing 
                  the transaction.`}
                {'  '}
                {'Either party can request Early Termination of the up-to-90-day waiting period that must otherwise expire before the parties can complete the merger.'}
              </blockquote>
            </Masthead>
          </Row>
          <Row>
            <Col md={8}>
              <article>
                <SearchForm
                  onSubmitClick={this.onSubmitClick}
                  searchInput={searchInput}
                  onInputChange={this.onInputChange}
                />
                <FixedHeightContainer length={data.length}>
                  {isLoading ? <Spinner animation="grow" size="lg" /> : null}
                  {error.length > 0 ? (
                    <h2 className="text-danger">{error}</h2>
                  ) : null}
                  {data.map(obj => (
                    <DataCard target={obj} key={obj.id} />
                  ))}
                </FixedHeightContainer>
              </article>
            </Col>
            <Col md={4}>
              <aside>
                <AsideTitle>
                  About Early Termination Notices
                </AsideTitle>
                <Card>
                  <Card.Body>

                    {' '}
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    This is some more text within a card body.
                  </Card.Body>
                </Card>
              </aside>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
