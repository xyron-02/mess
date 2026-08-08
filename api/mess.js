// api/mess.js
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json([ 
    'iya sayangkuu iyaa',
    'kam si cantek na sayang yah',
    'ula kam gutul yahh'
  ]);
}
