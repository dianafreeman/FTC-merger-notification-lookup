/* eslint-disable import/extensions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Container, Row, Col, Card, Spinner,
} from 'react-bootstrap';
import {
  Masthead, Logo, AsideTitle, AsideCard, ReferenceLink, InfoText,
} from './elements/index.jsx';
import DataCard from './components/DataCard.jsx';
import FixedHeightContainer from './components/FixedHeightContainer.jsx';
import SearchForm from './components/SearchForm.jsx';

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
        <Container>
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
                {'  '}
                {'The notices listed below are the most recent Early Termination notices released by the FTC. To search search the entire database by keyword, type a search term in the box below.  '}
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
                <InfoText>
                  {`Showing ${data.length.toString()} results`}
                </InfoText>
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
                <AsideCard>
                  <Card.Body>
                    The Hart–Scott–Rodino Antitrust Improvements Act
                     of 1976 (Public Law 94-435, known commonly as the HSR Act)
                      is a set of amendments to the antitrust laws of the United States
                  </Card.Body>

                </AsideCard>
                <AsideCard>
                  <Card.Body>
                    Under the Congressional ammendement to the
                    HSR that passed in 2000, The parties may not
                    close their deal until the waiting period outlined
                     in the HSR Act has passed, or the government
                    has granted
                    {' '}
                    <strong>Early Termination</strong>
                    {' '}
of the waiting period.
                    <ReferenceLink href="" target="blank"> </ReferenceLink>
                  </Card.Body>
                </AsideCard>
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
