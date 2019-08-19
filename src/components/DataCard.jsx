/* eslint-disable */
import React from 'react';
import { Card, Button } from 'react-bootstrap';

// /* Test Object */
// const notice = {
//   type: 'early_termination_notice',
//   id: '1540964',
//   attributes: {
//     title: '20191699: Roper Technologies, Inc.; Robert D. Mattlin',
//     'transaction-number': '20191699',
//     'acquired-entities':
//       'CE Payroll Service, Inc., ComputerEase Software, Inc.',
//     'acquired-party': 'Robert D. Mattlin',
//     'acquiring-party': 'Roper Technologies, Inc.',
//     date: '2019-08-15',
//     created: '2019-08-16 08:24:13',
//     updated: '2019-08-16 08:24:13',
//     tags: [],
//   },
//   relationships: [],
//   meta: [],
//   links: {
//     self:
//       'https://www.ftc.gov/enforcement/premerger-notification-program/early-termination-notices/20191699',
//   },
// };

const DataCard = ({ target }) => (
  <Card className="mb-4">
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
          The aquired entities include
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
