import { type NextApiRequest, type NextApiResponse } from 'next';

const users = [{ username: 'admin', password: '123', age: 12, firstName: 'Alexander' }];

export default async function portfoliosHandler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    }
    const body = JSON.parse(JSON.stringify(req.body));

    const user = users.find((user) => user.username === body.username && user.password === body.password) as User;

    if (!user) {
      res.status(404).send({ message: 'User does not exit!' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(405).send({ message: error.message });
  }
}
