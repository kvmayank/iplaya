import { Request, Response } from 'express';
import DBClient, { Collections } from '../utils/DBClient';

const DEFAULT_CAMPS_LIMIT = 10;

export class CampsController {
    public async getAll(req: Request, res: Response) {
        var limit: number = req.query.limit ? Number(req.query.limit) : DEFAULT_CAMPS_LIMIT;
        var fetchCamps = async (limit: number) => {
            await DBClient.connect();
            return await DBClient.collection(Collections.CAMPS).find().limit(limit).toArray();
        }
        fetchCamps(limit).then(camps => {
            res.json(camps);
        });
    }
}
