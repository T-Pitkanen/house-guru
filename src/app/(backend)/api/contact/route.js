import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    await db.collection('Messages').insertOne(data);

    client.close();

    res.status(200).json({ message: 'Contact saved' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}