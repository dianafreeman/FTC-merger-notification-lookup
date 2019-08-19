/* eslint-disable prefer-const */
import chai, {
  expect,
  assert,
} from 'chai';
import chaiHttp from 'chai-http';
import mocha from 'mocha';
import app from '../server';
import 'dotenv';

const {
  describe,
  it,
} = mocha;


chai.use(chaiHttp);

describe('Server Actions', () => {
  describe('get /data', () => {
    it('res.body.data should be an array of objects', (done) => {
      chai.request(app)
        .get('/data')
        .end((err, res) => {
          let { data } = res.body;
          assert.typeOf(data, 'array');
          done();
        });
    });
  });
  describe('search for /term', () => {
    it('search results should be early termination notices', (done) => {
      chai.request(app)
        .get('/search/OfficeMax')
        .end((err, res) => {
          let { data } = res.body;
          let randIndex = Math.floor((Math.random() * (data.length - 1)) + 0);// random index between 0 and length - 1
          expect(data[randIndex]).to.deep.include({ type: 'early_termination_notice' });
          done();
        });
    });
  });
  describe('search /term', () => {
    it('search results should include search term', (done) => {
      chai.request(app)
        .get('/search/starbucks')
        .end((err, res) => {
          let { data } = res.body;
          let randIndex = Math.floor((Math.random() * (data.length - 1)) + 0);// random index between 0 and length - 1
          let randResult = data[randIndex];
          assert.isOk(randResult.attributes.title.includes('Starbucks'));
          done();
        });
    });
  });
});
