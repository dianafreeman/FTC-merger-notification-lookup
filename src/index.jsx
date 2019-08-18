/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Container, Row, Col, Card, Spinner,
} from 'react-bootstrap';
import DataCard from './DataCard.jsx';
import SearchForm from './SearchForm.jsx';
import '@babel/polyfill';

const FixedHeightContainer = ({ children }) => (
  <div style={{
    height: 'fit-content', maxHeight: '80vh', overflow: 'scroll', padding: '1em', textAlign: 'center',
  }}
  >
    {children}
  </div>
);
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
    fetch('/data')
      .then(response => response.json())
      .then(resp => this.setState({ data: resp.data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }


  onInputChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  onSubmitClick(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    // eslint-disable-next-line no-undef
    this.updateData();
  }

  updateData() {
    const { searchInput } = this.state;
    fetch(`/search/${searchInput}`)
      .then(response => response.json())
      .then(resp => this.setState({ data: resp.data, isLoading: false }));
  }


  render() {
    const {
      data, isLoading, error, searchInput,
    } = this.state;
    return (
      <main>
        <Container fluid>
          <Row>
            <Col sm={12} className="masthead">
              <img
                className="ftc-logo"
                src="//logo.clearbit.com/ftc.gov"
                alt="Federal Trade Comission Logo"
              />
              <blockquote>
                {`The HSR Act specifies certain required 
                waiting periods, but any filing party may 
                request the termination of the applicable 
                HSR waiting period before its end. Such 
                a request for "early termination" will 
                be granted only after compliance with the 
                rules and if both the Federal Trade Commission 
                and Department of Justice Antitrust Division 
                have completed their review and determined they 
                will not take any enforcement action during
                 the waiting period.`}
              </blockquote>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <article>
                <SearchForm
                  onSubmitClick={this.onSubmitClick}
                  searchInput={searchInput}
                  onInputChange={this.onInputChange}
                />
                <FixedHeightContainer>
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
            <Col lg={4}>
              <aside>
                <h3 className="text-secondary">
                  About Early Termination Notices
                </h3>
                <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
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
