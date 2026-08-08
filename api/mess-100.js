export default function handler(req, res) {
  const msg = "🖕"
  
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({
    msg
  }, null, 2));
}