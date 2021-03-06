'use strict';

require('dotenv').config({
  path: __dirname + '/../.env'
});

const NEXMO_API_KEY = process.env.NEXMO_API_KEY;
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET;
const NEXMO_PRIVATE_KEY = __dirname + "/../" + process.env.NEXMO_PRIVATE_KEY;
const NEXMO_APPLICATION_ID = process.env.NEXMO_APPLICATION_ID;

const UUID = process.env.UUID;

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  applicationId: NEXMO_APPLICATION_ID,
  privateKey: NEXMO_PRIVATE_KEY
}, {
  debug: true
});

nexmo.calls.update(UUID, {
  action: 'transfer',
  destination: {
    "type": "ncco",
    "ncco": [
      "action": 'talk',
      "text": 'This is a transfer action using an inline NCCO'
    ]
  }
}, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
