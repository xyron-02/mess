export default function handler(req, res) {
  const data = [
    'nih bunga 🌺🌻🌹🌷',
    '',
    '© cowo kuin'
  ];
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    option: 4,
    messages: data,
    total: data.length
  }, null, 2));
}