export default function handler(req, res) {
  const data = [
    'iya sayangggg',
    '', 
    '© cowo kuin'
  ];
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
   data
  }, null, 2));
}
