import express from 'express';
const app = express();

app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.json([ 
    'iya sayangkuu iyaa',
    'kam si cantek na sayang yah',
    'ula kam gutul yahh'
  ]);
});

export default app;
