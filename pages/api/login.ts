import { NextApiRequest, NextApiResponse } from 'next';

import { User } from '@/entities/user';

type ServerUser = User & { password: string };

const users = [{ username: 'admin', password: '123', age: 12, firstname: 'Alexander' }];

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
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
    res.status(405).send({ message: 'Something went wrong' });
  }
}
