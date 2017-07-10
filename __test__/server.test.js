import supertest from 'supertest';
import app from '../server/app';
import getCount from '../server/utils/getCount';
import sort from '../server/utils/sort';

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
<SPEECH>
<SPEAKER>All</SPEAKER>
<LINE></LINE>
<LINE></LINE>
</SPEECH>
<SPEECH>
<SPEAKER>Bob</SPEAKER>
<LINE></LINE>
</SPEECH>
<SPEECH>
<SPEAKER>ALL</SPEAKER>
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
  it('Test another path', (done) => {
    supertest(app)
    .get('/other').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('check the helper functions', () => {
  const countObject = getCount(sampleData);
  it('the file parser function should check for multiple speakers for the same lines', () => {
    expect(countObject.title).toBe('Title');
    expect(countObject.k).toHaveLength(3);
    expect(countObject.v).toHaveLength(3);
    expect(countObject.k[0]).toBe('Bob');
    expect(countObject.v[0]).toBe(5);
  });
  it('the sort function should sort object values in descending order', () => {
    const obj = {
      a: 0,
      b: 1,
      c: 2,
      beta: 1,
      e: 4,
      d: 3,
      alpha: 0,
    };
    const key = JSON.stringify(sort(obj).k);
    const value = JSON.stringify(sort(obj).v);
    expect(key).toBe(JSON.stringify(['e', 'd', 'c', 'b', 'beta', 'a', 'alpha']));
    expect(value).toBe(JSON.stringify([4, 3, 2, 1, 1, 0, 0]));
  });
  it('the data should not include a speaker called \'all\'', () => {
    expect(countObject.k).not.toContain('All');
    expect(countObject.k).not.toContain('ALL');

  })
});
