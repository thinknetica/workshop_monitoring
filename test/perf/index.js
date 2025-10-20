import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 300 },
    { duration: '5s', target: 1000 },
  ],
  thresholds: {
    http_req_failed: [{
      threshold: 'rate<0.01',
      abortOnFail: true
    }],
    http_req_duration: [{
      threshold: 'p(95)<200',
      abortOnFail: true
    }],
  }
};

export default function() {
  const res = http.get('http://localhost:3000');
  check(res, { 'Index OK': (r) => r.status == 200 })
  // const res = http.get('http://localhost:3000/catalog');
  // check(res, { 'Catalog OK': (r) => r.status == 200 });
  // const res = http.post('http://localhost:3000/add_to_basket');
  // check(res, { 'Basket CREATED': (r) => r.status == 201 })
  // const res = http.get('http://localhost:3000/checkout');
  // check(res, { 'Checkout OK': (r) => r.status == 200 });
  sleep(1);
};

