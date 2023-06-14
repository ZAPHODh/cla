import { NextApiRequest, NextApiResponse } from 'next';

import Model from '../../models/charSchema';
import dbConnect from '@/lib/dbConnection';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { charName, position } = req.body;
  const { method } = req;
  await dbConnect();
  switch (method) {
    case 'POST': {
      if (!charName || !position) {
        res.status(400).send('Você não enviou todas as informações');
        return;
      }
      new Model({ charName, position }).save();
      res.status(200).send('Cadastrado!');
      break;
    }
    case 'GET': {
      const chars = await Model.find();
      if (!chars) {
        res.status(400).send('Nao foi possível encontrar os personagens');
        break;
      }
      res.status(200).json(JSON.stringify(chars));
      break;
    }
    default:
      res.status(405).send('Erro ao carregar no servidor');
      break;
  }
}
