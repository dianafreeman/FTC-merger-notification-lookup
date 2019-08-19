import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const DataCard = ({ target }) => (
  <Card className="mb-4 text-left">
    <Card.Header>
      {`Merger No. ${target.attributes['transaction-number']}`}
    </Card.Header>
    <Card.Body>
      <Card.Title>
        {`${target.attributes['acquired-party']} aquired by ${
          target.attributes['acquiring-party']
        }`}
      </Card.Title>
      <Card.Text>
          Aquired entity/entities:
        {`${'    '}${target.attributes['acquired-entities']}`}
      </Card.Text>
      <Button variant="info" href={target.links.self}>
        {' '}
          More on this notice
      </Button>
    </Card.Body>
    <Card.Footer className="text-muted">
      {`Notice ID: ${target.id}${'   '} |${'   '} Effective Date: ${
        target.attributes.date
      }`}
    </Card.Footer>
  </Card>
);

export default DataCard;

DataCard.propTypes = {
  target: PropTypes.objectOf('any').isRequired,
};
