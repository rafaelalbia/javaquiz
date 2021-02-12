import db from '../../db.json';

export default function dbHandler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Acess-Control-Allow-Credentials', true);
  response.setHeader('Acess-Control-Allow-Credentials', '*');
  response.setHeader('Acess-Control-Allow-Credentials', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  response.json(db);
}
