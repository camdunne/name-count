import supertest from 'supertest';
import app from '../server/app';
import helper from '../server/helper';

const sampleData = `<TITLE>Title</TITLE>
<SPEECH>
<SPEAKER>Alice</SPEAKER>
<SPEAKER>Bob</SPEAKER>
<SPEAKER>Window</SPEAKER>
<LINE></LINE>
<LINE></LINE>
<LINE></LINE>
<LINE></LINE>
</SPEECH>
<END></END>`;

describe('/GET macbeth', () => {
  it('Test the root path', () => {
    test('It should response the GET method', (done) => {
      supertest(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
  xit('work', (done) => {
    supertest(app)
    .get('/api/macbeth').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('check helper function', () => {
  it('the file parser function should check for multiple speakers for the same lines', () => {
    expect(helper(sampleData).title).toBe('Title');
    expect(helper(sampleData).data.labels).toHaveLength(3);
    expect(helper(sampleData).data.datasets[0].data).toHaveLength(3);
    expect(helper(sampleData).data.datasets[0].data[0]).toBe(4);
  });
});
