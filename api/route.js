import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { option } = req.query;
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!option) {
    try {
      const apiDir = path.join(process.cwd(), 'api');
      const files = fs.readdirSync(apiDir);
      
      const messFiles = files
        .filter(file => file.startsWith('mess-') && file.endsWith('.js'))
        .map(file => {
          const optionNumber = file.replace('mess-', '').replace('.js', '');
          return {
            option: optionNumber
          };
        });
      
      res.setHeader('Content-Type', 'application/json');
      return res.status(200).send(JSON.stringify({
        status: 'success',
        message: 'Diam lah'
      }, null, 2));
    } catch (error) {
      return res.status(500).send(JSON.stringify({
        error: 'Gagal membaca folder api'
      }, null, 2));
    }
  }
  
  try {
    const module = await import(`./mess-${option}.js`);
    return module.default(req, res);
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    return res.status(404).send(JSON.stringify({
      error: `Option "${option}" gada ya dek`
    }, null, 2));
  }
}